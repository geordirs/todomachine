import React from "react";
import { TodoContext } from "./TodoContext";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButtom} from "./CreateTodoButtom";
import {TodoForm} from "./TodoForm";
import {TodoLoading} from "./TodoLoading";
import {TodoError} from "./TodoError";
import {EmptyTodos} from "./EmptyTodos";
import {Modal} from "./modal";

function UI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {error && <TodoError/>}
        {loading && <TodoLoading/>}
        {!loading && !searchedTodos.length && <EmptyTodos/>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      <CreateTodoButtom
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    );
}

export { UI };

