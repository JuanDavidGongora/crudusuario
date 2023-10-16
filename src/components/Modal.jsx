import { IconSquareRoundedXFilled } from "@tabler/icons-react";

const Modal = ({
  isShowModal,
  handleClosedModal,
  handleSubmit,
  register,
  submit,
  idUserToEdit,
  errors,
}) => {
  return (
    <section className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all duration-300 ${
      isShowModal ? "visible opacity-100" : "invisible opacity-0"
    }`}>
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-3 rounded-md grid gap-3 w-[min(100%, _270px)] relative"
      >
        <h2 className="text-center text-lg font-semibold ">Crear Usuario</h2>
        <button
          onClick={handleClosedModal}
          type="button"
          className="text-red-500 hover:text-red-600 transition-colors absolute top-2 right-2"
        >
          <IconSquareRoundedXFilled />
        </button>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="email">
            Email:
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="email"
            type="text"
            {...register("email", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              maxLength: {
                value: 150,
                message: "Este campo acepta 150 carácteres como máximo"
              }
            })}
          />

              {errors.email && (
              <span className="text-xs text-red-500">{errors.email.message}</span>
          )}

        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="password">
            Clave:
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="password"
            type="text"
            {...register("password")}
          />
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="first_name">
            Primer Nombre:
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="first_name"
            type="text"
            {...register("first_name")}
          />
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="last_name">
            Apellido:
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="last_name"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="grid gap-1 ">
  <label className="font-light" htmlFor="birthday">
    Cumpleaños:
  </label>
  <div className="flex items-center">
    <input
      className="outline-none border px-2 py-1 rounded-sm"
      id="birthday"
      type="date"
      {...register("birthday")}
    />
   
  </div>
</div>

        <button
          className="bg-blue-500 text-white p-2 px-4 uppercase font-semibold"
          type="submit"
        >
          {idUserToEdit ? "Guardar cambios" : "Crear"}
        </button>
      </form>
    </section>
  );
};

export default Modal;
