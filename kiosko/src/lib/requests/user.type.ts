import { User } from "../Models/User.model";
import { Function } from "./types";

export type UpdateUser = Function<UpdateUserInput, UpdateUserOutput>;

export type UpdateUserInput = {
  id: string;
  datos: {
    perfilimg?: string;
    perfil_cloud_id?: string;
    nombre?: string;
    email?: string;
    movil?: string;
    carnet?: string;
  };
};

export type UpdateUserOutput = { usuario: User };

export type DeleteUser = Function<DeleteUserInput, DeleteUserOutput>;

export type DeleteUserInput = {
  id: string;
};

export type DeleteUserOutput = { msg: string };

export type FetchUsers = Function<FetchUsersInput, FetchUsersOutput>;

export type FetchUsersInput = void;

export type FetchUsersOutput = { usuarios: User[] };

export type FetchUser = Function<FetchUserInput, FetchUserOutput>;

export type FetchUserInput = {
  id: string;
};

export type FetchUserOutput = { usuario: User };
