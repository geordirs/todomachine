import React from "react";

function TodoLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando TODOs...</p>ç
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodoLoading };
