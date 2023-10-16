
import { useEffect, useState } from 'react';
import './App.css';
import { BASE_URL, EMPTY_FORM_VALUES } from './constants/users';
import Modal from './components/modal';
import Header from './components/Header';
import { useForm } from 'react-hook-form';
import UserList from './components/UserList';
import axios from 'axios';

function App() {
 const [isShowModal, setIsShowModal] = useState (false);
 const [users, setUsers] = useState([]);
 const [idUserToEdit, setIdUserToEdit] = useState(null);

 const { handleSubmit, register, reset, formState } = useForm();
  const { errors } = formState;
  console.log(errors)

  const submit = (data) => {
    if (idUserToEdit) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

 const handleOpenModal = () => {
  setIsShowModal(true);
};

 const handleClosedModal = () => {
    setIsShowModal(false);
    reset(EMPTY_FORM_VALUES);
    
  };

  const createUser = (data) => {
    axios
    .post(BASE_URL + "/users/", data)
    .then (() => {
   handleClosedModal();
   getAllUsers();
  })
  .catch((err) => console.log(err));
};

const deleteUser = (id) => {
  axios
    .delete(BASE_URL + `/users/${id}/`)
    .then(() => getAllUsers())
    .catch((err) => console.log(err));
};

const updateUser = (data) => {
  axios
    .put(BASE_URL + `/users/${idUserToEdit}/`, data)
    .then(() => {
      getAllUsers();
      handleClosedModal();
    })
    .catch((err) => console.log(err));
};

const getAllUsers = () => {
  axios
    .get(BASE_URL + "/users/")
    .then(({ data }) => setUsers(data))
    .catch((err) => console.log(err));
};
const handleClickUpdate = (userToUpdate) => {
  handleOpenModal();
  reset(userToUpdate);
  setIdUserToEdit(userToUpdate.id);
};
  useEffect (() => {
    getAllUsers();
  }, [])

  return (
    <main className='min-h-screen'>
        <Header handleOpenModal={handleOpenModal} />
       <Modal 
       isShowModal={isShowModal}
       handleClosedModal={handleClosedModal}
       handleSubmit={handleSubmit}
       submit={submit}
       register={register}
       idUserToEdit={idUserToEdit}
       errors={errors}
       />
       <UserList
       users= {users}
       deleteUser={deleteUser}
        handleClickUpdate={handleClickUpdate}
       />
    </main>
  )
}

export default App
