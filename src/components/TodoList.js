import React from "react";
import '../styles.css';

function TodoList(props) {
    return (
      <section>
        <ul>
          {props.children}
        </ul>
      </section>
    );
}

export { TodoList };
