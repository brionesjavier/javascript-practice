import './style.css';
import { Todo, TodoList } from './classes';


const todolist = new TodoList();
const tarea = new Todo( 'Aprender JavaScript' );
const tarea2 = new Todo( 'Comprar un libro' );

todolist.nuevoTodo( tarea );

console.log( todolist );
