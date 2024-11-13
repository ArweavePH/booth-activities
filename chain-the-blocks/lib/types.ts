export type TagType = { name: string; value: string };

export interface GenericResponse<T = undefined> {
  Success: boolean;
  Message: string;
  Data: T;
}

export interface IPlayerResponse {
  DiscordName: string;
  TimeInMs: number;
}

export interface IBlockResponse {
  Question: string;
  Answer: number;
  Options: string[];
}
