import database from '../../firebase/firebase';

export const getDraft = (id) => {
  const path = `draft/${id}`
  return database.readData({path});
}

export const saveDraft = (id, uuid, data) => {
  const path = `draft/${id}/${uuid}`;
  return database.setData({path, data});
}

export const deleteDraft = (id, uuid) => {
    const path = `draft/${id}/${uuid}`;
    return database.deleteData({path});
  }