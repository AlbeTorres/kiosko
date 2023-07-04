import { Controller, SubmitHandler, useForm } from "react-hook-form";
import PasswordTextField from "../../../../components-libs/PasswordTextField";
import PinField from "react-pin-field";

type RecoverPassForm = {
  code: string;
  password: string;
  passwordConfirmation: string;
};

const RecoveryPass = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverPassForm>();

  const handleRecoveryPass: SubmitHandler<RecoverPassForm> = (data) =>
    console.log(data);

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className="font-semibold text-center ">Nueva contraseña</h1>
        <h3 className="text-sm text-center">
          Hemos envíado a su correo un código, introduzcalo así como su nueva
          contraseña
        </h3>
        <form
          className="flex flex-col w-full mt-5 items-center gap-y-5"
          onSubmit={handleSubmit(handleRecoveryPass)}
        >
          <div className="flex flex-row gap-x-2">
            <Controller
              name="code"
              control={control}
              render={({ field: { onChange } }) => (
                <PinField
                  autoComplete="new-number"
                  length={6}
                  validate={/^[0-9]$/}
                  className=" w-8 rounded-md border-2 border-gray-300  text-center text-lg outline-none focus:border-topaz"
                  onComplete={onChange}
                />
              )}
            />
          </div>
          <div className="w-full">
            <PasswordTextField autoComplete="new-password" />
            <PasswordTextField autoComplete="new-password" />
          </div>

          <div className="flex flex-col w-full gap-y-3">
            <button type="submit" className="btn btn-primary w-full">
              Confirmar
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

export default RecoveryPass;
