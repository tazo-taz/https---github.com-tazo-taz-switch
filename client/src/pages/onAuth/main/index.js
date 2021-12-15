import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callNumberAxios, createNumberAxios, deleteNumberAxios, updateNumberAxios } from '../../../axios/numbers';
import { inputObjStateChange, objNotEmpty } from '../../../commont tools/obj';
import { isNum, onlyAlphabet } from '../../../commont tools/type';
import Input1 from '../../../components/input/Input1';
import SimpleModal from '../../../defaultComponents/SimpleModal';
import { numbersInDispatch } from '../../../dispatch';
import { logoutFunc } from '../../../functions/auth';

export default function Index() {
  const { numbers, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [searchNums, setSearchNums] = useState('');

  const defaultModalData = {
    name: '',
    phone: '',
  };

  const validateNumber = (data) => {
    if (!objNotEmpty(data)) return false;
    if (!isNum(data.phone)) return false;
    if (!onlyAlphabet(data.name)) return false;
    return true;
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(defaultModalData);
  const [modalType, setModalType] = useState('');

  const modalOnSave = async () => {
    const { _id, name, phone } = modalData;
    const data = { name, phone };
    if (!validateNumber(data)) return alert('sheavset yvela veli sworad');
    if (modalType === 'create') {
      const {
        data: { data: numbers },
      } = await createNumberAxios(data);
      if (numbers) numbersInDispatch(dispatch, numbers);
      setModalOpen(false);
    } else if (modalType === 'update') {
      const {
        data: { data: numbers },
      } = await updateNumberAxios(_id, data);
      if (numbers) numbersInDispatch(dispatch, numbers);
      setModalOpen(false);
    }
  };

  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [modalDeleteData, setModalDeleteData] = useState({});

  const modalDeleteOnSave = async () => {
    const {
      data: { data },
    } = await deleteNumberAxios(modalDeleteData._id);
    if (data) numbersInDispatch(dispatch, data);
    setModalDeleteOpen(false);
  };

  return (
    <div>
      <SimpleModal open={modalOpen} setOpen={setModalOpen} onSave={modalOnSave}>
        <Input1
          placeholder="name"
          className="my-1"
          value={modalData.name}
          onChange={(e) => inputObjStateChange(e, 'name', setModalData)}
          fullWidth
        />
        <Input1
          placeholder="number"
          className="my-1"
          value={modalData.phone}
          onChange={(e) => inputObjStateChange(e, 'phone', setModalData)}
          fullWidth
        />
      </SimpleModal>
      <SimpleModal open={modalDeleteOpen} setOpen={setModalDeleteOpen} onSave={modalDeleteOnSave}>
        Are you sure you want to delete {modalDeleteData.name}
      </SimpleModal>
      <h2>
        hello {user.username}{' '}
        <button className="ml-2" onClick={() => logoutFunc(dispatch)}>
          Logout
        </button>
      </h2>
      <br />

      <button
        onClick={() => {
          setModalOpen(true);
          setModalData(defaultModalData);
          setModalType('create');
        }}
      >
        Add phone
      </button>
      <br />
      <br />
      <Input1 placeholder="name" className="my-1" value={searchNums} onChange={(e) => setSearchNums(e.target.value)} />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>handle</th>
          </tr>
        </thead>
        <tbody>
          {numbers
            .filter((a) => a.name.includes(searchNums) || a.phone.includes(searchNums))
            .map(({ _id, name, phone }) => (
              <tr key={_id}>
                <td>{_id}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>
                  <button
                    onClick={() => {
                      callNumberAxios(_id);
                    }}
                  >
                    Call
                  </button>
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setModalData({ _id, name, phone });
                      setModalType('update');
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setModalDeleteOpen(true);
                      setModalDeleteData({ _id, name });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
