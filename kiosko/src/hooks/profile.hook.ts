import { useQuery } from "@tanstack/react-query";
import {
  fetchAuthenticateUser,
  fetchValidateUser,
} from "../lib/requests/auth.request";

export const useProfile = () =>
  useQuery(["profile"], () => fetchAuthenticateUser());

export const useValidateUser = (input, enabled = false) =>
  useQuery(["validateuser", input], () => fetchValidateUser(input),{enabled});
