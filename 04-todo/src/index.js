import './style.css';
import { Todo, TodoList ,crearTodoHTML} from './classes';


export const todoList = new TodoList();
const tarea = new Todo( 'Aprender JavaScript !!' );
// const tarea2 = new Todo( 'Comprar un libro' );

todoList.nuevoTodo( tarea );

console.log( todoList );

crearTodoHTML( tarea );
