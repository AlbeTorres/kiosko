import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchAuthenticateUser,
  fetchValidateUser,
} from "../lib/requests/auth.request";
import {
  changePassword,
  sendRecoveryPasswordCode,
} from "../lib/requests/password.request";
import { login, singup } from "../lib/requests/auth.request";

/**
 * The useProfile function is a custom hook that uses the useQuery hook to fetch and authenticate user
 * profile data.
 */
export const useProfile = () =>
  useQuery(["profile"], () => fetchAuthenticateUser());

/**
 * The `useValidateUser` function is a TypeScript function that uses the `useQuery` hook to fetch and
 * validate user data based on the input provided.
 * @param input - The `input` parameter is the value that will be passed to the `fetchValidateUser`
 * function. It is used to determine the user to be validated.
 * @param [enabled=false] - The `enabled` parameter is a boolean value that determines whether the
 * query should be enabled or disabled. If `enabled` is set to `true`, the query will be enabled and
 * executed. If `enabled` is set to `false`, the query will be disabled and not executed. By default,
 */
export const useValidateUser = (input, enabled = false) =>
  useQuery(["validateuser", input], () => fetchValidateUser(input), {
    enabled,
  });

/**
 * The function `useSendPasswordRecovery` is a custom hook that uses the `useMutation` hook to send a
 * recovery password code.
 */
export const useSendPasswordRecovery = () =>
  useMutation(sendRecoveryPasswordCode);

/**
 * The useChangePassword function is a custom hook that uses the useMutation hook to handle the
 * changePassword mutation.
 */
export const useChangePassword = () => useMutation(changePassword);

/**
 * The useLogin function is a custom hook that uses the useMutation hook to handle login functionality.
 */
export const useLogin = () => useMutation(login);
/**
 * The useSignup function is a custom hook that uses the useMutation hook to handle the signup process.
 */
export const useSingup = () => useMutation(singup);
