import React from "react";

const List = ({ list, removeItem, editingItem }) => {
  return (
    <>
      {list.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="listItem">
            <p>{title}</p>
            <div className="control">
              <i
                className="fas fa-edit"
                onClick={() => {
                  editingItem(id);
                }}
              ></i>
              <i
                className="fas fa-trash"
                onClick={() => {
                  removeItem(id);
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
