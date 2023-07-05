import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchAuthenticateUser,
  fetchValidateUser,
} from "../lib/requests/auth.request";
import {
  changePassword,
  sendRecoveryPasswordCode,
} from "../lib/requests/password.request";

export const useProfile = () =>
  useQuery(["profile"], () => fetchAuthenticateUser());

export const useValidateUser = (input, enabled = false) =>
  useQuery(["validateuser", input], () => fetchValidateUser(input), {
    enabled,
  });

export const useSendPasswordRecovery = () =>
  useMutation(sendRecoveryPasswordCode);

export const useChangePassword = () => useMutation(changePassword);
