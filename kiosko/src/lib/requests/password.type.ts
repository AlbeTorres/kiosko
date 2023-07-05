import { Function } from "./types";

export type SendRecoveryPasswordEmail = Function<
  SendRecoveryPasswordEmailInput,
  SendRecoveryPasswordEmailOutput
>;

export type SendRecoveryPasswordEmailInput = {
  data: {
    email: string;
  };
};

export type SendRecoveryPasswordEmailOutput = void;

export type ChangePassword = Function<
  ChangePasswordInput,
  ChangePasswordOutput
>;

export type ChangePasswordInput = {
  data: {
    email: string;
    password: string;
    code: number;
  };
};

export type ChangePasswordOutput = void;
