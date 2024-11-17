"use client";

import { AO } from "@/lib/config";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/lib/query-keys";
import { GenericResponse, IBlockResponse } from "@/lib/types";
import { QuickWallet } from "quick-wallet";

const fetchQuestions = async () => {
  const signer = createDataItemSigner(QuickWallet);
  const messageId = await message({
    signer,
    process: AO.chainTheBlocks,
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
