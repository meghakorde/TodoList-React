import React from "react";
const List = (props) => {
  return (
    <>
      <table className="Todo_Table ">
        <thead>
          <tr>
            <th>TODO LIST </th>
            <th>DONE </th>
          </tr>
        </thead>
        <tbody>
          {props.todo.length === 0 ? (
            <tr>
              <td colSpan="2">
                <p>"Data is Not Available"</p>
              </td>
            </tr>
          ) : (
            props.todo.map((item, index) => {
              return (
                <tr key={index} id={index}>
                  <td>
                    <h4 className="content">{item.text}</h4>
                    <i
                      className="delete fa-solid fa-trash"
                      onClick={() => props.removeTodo(item.id, item.completed)}
                    />
                  </td>
                  <td>
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => props.completeTodo(index, item.completed)}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};
export default List;
