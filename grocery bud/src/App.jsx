import React, { useEffect, useState } from 'react'
import List from './Components/List';
import Alert from './Components/Alert';

const getLocalStorage = () => {
    const list = localStorage.getItem('list')
    if (list) {
      return JSON.parse(localStorage.getItem('list'))
    }
    else {
      return []
    }
}

const App = () => {

  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false, msg: ''
  });

  useEffect(() => {
    showAlert()
  }, [list])

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!name){
      showAlert(true,'Please Enter some Values')
    }

    else if (name && isEditing){
      setList(
        list.map((item) => {
          if (item.id == editId){
            return {...item, title : name}
          }
          return item
        })
      )
      setName('');
      setIsEditing(false);
      setEditId(null);
      showAlert(true, 'Item Edited !')
    }
    else{
      const newItem = {
        id: Math.floor(Math.random() * 1000),
        title: name
      }
      setList([...list, newItem])
      setName('');
    }

  }

  const clearList = () => {
    setList([]);
  }

  const deleteList = (id) => {
    showAlert(true,'Value Deleted ')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
  
    const specific = list.find((item) => item.id == id)
    setIsEditing(true)
    setEditId(specific.id)
    setName(specific.title)
  }

  const showAlert = (show = false, msg = '') => {
    setAlert({
      show, msg
    })
  }

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  }, [list])
  return (
    <div>
      grocery bud
      {
        alert.show && <Alert alert={alert} />
      }
      <p></p>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      <button onClick={handleSubmit}>
        {isEditing ? 'Edit' : 'Add'}
      </button>
      {
        list.length > 0 &&
        <div> 
          <List items={list} deleteList={deleteList}  editItem={editItem}/>
          <button onClick={clearList}>clear list</button>
        </div>
      }
    </div>
  )
}

export default App
