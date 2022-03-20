import { Todo } from "./todo.class";

export class TodoList {

    constructor(){
        //this.todos = [];

        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id)
        this.guardarLocalStorage();

    }

    marcarCompletados( id ){
        for( const todo of this.todos){
            //console.log(id,todo.id);
            if(todo.id == id ){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }

    }

    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();


    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify( this.todos ));
        this.pendienteTodo()

    }

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo') ) 
                        ? JSON.parse( localStorage.getItem('todo') ) 
                        : [];
        
        //this.todos = this.todos.map(obj=>Todo.fromfson(obj));//metodo largo
        this.todos = this.todos.map( Todo.fromfson );
        this.pendienteTodo();

    }

    pendienteTodo(){
        const tareasPendiente=document.querySelector('strong');
        let contador =0;
        for(let i = 0;i<this.todos.length;i++){
            if(this.todos[i].completado===false){
                contador++;
            }
            
        }
        tareasPendiente.innerHTML = contador;
        return tareasPendiente;
    }
}
