import './style.css';
import { Todo, TodoList ,crearTodoHTML } from './classes';

export const todoList = new TodoList();

//todoList.todos.forEach(todo => {crearTodoHTML(todo);});//forma funcion flecha

todoList.todos.forEach(crearTodoHTML);//forma corta 


