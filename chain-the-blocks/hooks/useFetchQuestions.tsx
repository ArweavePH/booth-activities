import { AO } from "@/lib/config";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/lib/query-keys";
import { GenericResponse, IBlockResponse } from "@/lib/types";

const fetchQuestions = async () => {
  const messageId = await message({
    process: AO.chainTheBlocks,
    signer: createDataItemSigner(window.arweaveWallet),
    tags: [{ name: "Action", value: "Fetch-Questions" }],
  });

  const response = await result({
    message: messageId,
    process: AO.chainTheBlocks,
  })
    .then(
      (res) =>
        JSON.parse(res.Messages[0].Data) as GenericResponse<IBlockResponse[]>
    )
    .then((res) => res.Data);

  return response;
};

export const useFetchQuestions = () => {
  return useQuery({
    queryKey: queryKeys.fetchQuestions(),
    queryFn: async () => fetchQuestions(),
    refetchInterval: false,
  });
};
