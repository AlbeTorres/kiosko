import { Function } from "./types";

export type SendRecoveryPasswordEmail = Function<
  SendRecoveryPasswordEmailInput,
  SendRecoveryPasswordEmailOutput
>;

export type SendRecoveryPasswordEmailInput = {  data: {
  email: string
} };

export type SendRecoveryPasswordEmailOutput = void;
