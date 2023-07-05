import { useForm, SubmitHandler } from "react-hook-form";
import { regexps } from "../../../../util/validations";
import TextField from "../../../../components-libs/TextField";
import { useContext } from "react";
import productoContext from "../../../../context/productoContext/productoContext.js";
import { useSendPasswordRecovery } from "../../../../hooks/profile.hook";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type RecoverPassEmailForm = {
  email: string;
};

const RecoverPassEmail = () => {
  const navigate = useNavigate();
  const sendRecoveryPassCode = useSendPasswordRecovery();

  const { establecerAccion } = useContext(productoContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverPassEmailForm>();

  const handleSendRecoveryEmail: SubmitHandler<RecoverPassEmailForm> = (
    data
  ) => {
    sendRecoveryPassCode.mutate(
      { data },
      {
        onSuccess: () => {
          toast.success(
            "Se le ha enviado un código de verificación a su correo"
          );
          establecerAccion({ accion: "recoverypassword" });
          navigate(`/${data.email}`);
        },
        onError: () => {
          toast.error("Algo salío mal");
        },
      }
    );
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className="font-semibold text-center ">Introduzca su correo</h1>
        <form
          className="flex flex-col w-full items-center gap-y-5"
          onSubmit={handleSubmit(handleSendRecoveryEmail)}
        >
          <TextField
            className="w-full"
            type="text"
            label={"Email"}
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
          <div className="flex flex-col w-full gap-y-3">
            <button type="submit" className="btn btn-primary w-full">
              Recuperar contraseña
            </button>
            <label htmlFor="my-modal-6" className="btn w-full">
              Cancelar
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassEmail;
