//import { Todo } from "./todo.class";

export class TodoList {
    todos = [];

    contructor() {
        this.todos = [];
    }

    nuevoTodo( todo ){
        this.todos.push( todo );

    }

    eliminarTodo( id ){
    
    }

    marcarCompletados( id ){
        for( const todo of this.todos){
            console.log(id,todo.id);
            if(todo.id == id ){
                todo.completado = !todo.completado;
                break;

            }
        }

    }

    eliminarCompletados(){

    }
}