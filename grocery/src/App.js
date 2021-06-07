import React, { useState, useEffect } from "react";
import List from "./List";
import Modal from "./Modal";

const getLocalStorage = () => {
  let localData = localStorage.getItem("list");
  if (localData) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [modal, setModal] = useState({ show: false, msg: "", type: "" });
  const [list, setList] = useState(getLocalStorage());
  const [editID, setEditID] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const clearAll = () => {
    setList([]);
    setModal({ show: true, msg: "All item cleared", type: "danger" });
  };
  const editingItem = (id) => {
    const newEdit = list.find((item) => item.id === id);
    setIsEdited(true);
    setName(newEdit.title);
    setEditID(id);
  };
  const removeItem = (id) => {
    setModal({ show: true, msg: "Item removed", type: "danger" });
    setList(list.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setModal({ show: true, msg: "please type something", type: "warning" });
    } else if (name && isEdited) {
      setModal({ show: true, msg: "Item edited", type: "success" });
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setIsEdited(false);
    } else {
      setModal({ show: true, msg: "Item added", type: "success" });
      let newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  return (
    <div className="container">
      <div className="window">
        <form className="form" onSubmit={handleSubmit}>
          <Modal {...modal} list={list} setModal={setModal} />
          <h3>Grocery Bud</h3>
          <div className="inpBox">
            <input
              type="text"
              name="list"
              id="list"
              placeholder="e.g egg"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button type="submit">{isEdited ? "Edit" : "Add"}</button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="list">
            <List
              list={list}
              removeItem={removeItem}
              editingItem={editingItem}
            />
            <button
              onClick={() => {
                clearAll();
              }}
            >
              Clear List
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
