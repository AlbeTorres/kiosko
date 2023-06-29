import { User } from "../Models/User.model";
import { Function } from "./types";

export type FetchAuthenticateUser = Function<
  FetchAuthenticateUserInput,
  FetchAuthenticateUserOutput
>;

export type FetchAuthenticateUserInput = void;

export type FetchAuthenticateUserOutput = { usuario: User };

export type FetchValidateUser = Function<
  FetchValidateUserInput,
  FetchValidateUserOutput
>;

export type FetchValidateUserInput = {
  emailToken: String;
};

export type FetchValidateUserOutput = User;
