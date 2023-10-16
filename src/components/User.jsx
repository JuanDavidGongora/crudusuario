import { IconUserCheck, IconEditCircle, IconTrash, IconGift } from "@tabler/icons-react";

const User = ({userInfo, deleteUser, handleClickUpdate}) => {
  return (
    <article className="border-2 p-4 rounded-lg grid gap-3">
    <h5 className="flex gap-2 items-center text-lg font-bold">
      <IconUserCheck/> {userInfo.email} - {userInfo.password}
    </h5>
    <ul className="grid gap-1 text-gray-800">
        <li>
          <span className="font-semibold">Primer nombre:</span> {userInfo.first_name}
        </li>
        <li>
          <span className="font-semibold">Segundo Nombre:</span> {userInfo.last_name}
        </li>
        <li>
          
          <span className="flex gap-2 items-center text-lg font-bold">  <IconGift size={20} className="ml-2" /> Cumpleaños:</span> {userInfo.birthday}
        </li>
      </ul>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => handleClickUpdate(userInfo)}
          className="bg-green-400 hover:bg-green-500 transition-colors text-white p-1 rounded-md"
        >
          <IconEditCircle size={20} />
        </button>
        <button
          onClick={() => deleteUser(userInfo.id)}
          className="bg-red-500 hover:bg-red-600 transition-colors text-white p-1 rounded-md"
        >
          <IconTrash size={20} />
        </button>
    
    </div>
    </article>
  );
}

export default User;
