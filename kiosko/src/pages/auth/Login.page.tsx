import React from "react";
import { useForm } from "react-hook-form";

import { regexps } from "../../util/validations";
import PasswordTextField from "../../components-libs/TextField/PasswordTextField";
import TextField from "../../components-libs/TextField/TextField";
import { Button } from "../../components-libs/Button";
import { FaEnvelope } from "react-icons/fa";

type LoginFrom = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    getValues,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFrom>();

  const handleLogin = () => {};

  return (
    <section className="w-full py-10 mt-20 h-fit ">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-72  md:w-80 h-full  flex flex-col gap-y-5    m-auto"
      >
        <TextField
          className="w-full"
          type="text"
          label={"Email"}
          icon={FaEnvelope}
          error={errors.email?.message}
          {...register("email", {
            required: {
              value: true,
              message: "Correo requerido",
            },
            pattern: {
              value: regexps.email,
              message: "correo inválido",
            },
          })}
        />

        <PasswordTextField
          className="w-full"
          label={"Contraseña"}
          placeholder="Contraseña"
          error={errors.password?.message}
          {...register("password", {
            required: "Contraseña requerida",
            setValueAs: (v: string) => v.trim(),
            pattern: {
              value: regexps.password,
              message: "Debe contener más de 8 caracteres",
            },
          })}
        />
        <Button type="submit" className="btn-primary w-full">
          Confirmar
        </Button>
      </form>
    </section>
  );
};
