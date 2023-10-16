const Header = ({ handleOpenModal }) => {
    return (
      <header className="flex justify-between p-2">
       <h1 className="text-xl font-bold ">Usuarios</h1>

        <button
          onClick={handleOpenModal}
          className="bg-blue-500 text-white p-2 px-4 font-semibold rounded-md hover:bg-blue-600 transition-colors"
        >
          Agregar usuario
        </button>
      </header>
    );
  };
  export default Header;