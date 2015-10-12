import { Component, bootstrap, NgIf } from 'angular2/angular2';
import { TodoService } from '../../services/TodoService'
import { Todo } from '../../models/Todo'
import { TodoList } from '../todolist/todolist'

@Component({
    selector: 'todo-app',
    viewBindings: [ TodoService ],
    templateUrl: 'src/components/todoapp/todoapp.html',
    directives: [ NgIf, TodoList ]
})
class TodoApp {
    _uid: number = 0;
    myTodos: Array<Todo> = [];
    
    constructor(public todoService: TodoService){
        this.myTodos = todoService.getAll();
        this._uid = todoService.getCount();
    }
    
    enterTodo(inputElement: HTMLInputElement): void {
        let newTodo = new Todo(this._nextUid(), inputElement.value, false);
        this.todoService.add(newTodo);
        inputElement.value = '';
    }
    
    toggleAll($event: any): void {
        let isComplete = $event.target.checked;
        this.todoService.getAll().forEach((todo: Todo) => {
             todo.completed = isComplete; 
        });
    }
    
    clearCompleted(): void { 
        let todosToDelete: Array<Todo> = [];
        this.todoService.getAll().forEach((todo: Todo) => {
             if(todo.completed){
                 todosToDelete.push(todo);
             } 
        });
        todosToDelete.forEach((todo: Todo) => {
             this.todoService.delete(todo); 
        });
    }
    
    getTodoCount(): number{
        return this.todoService.getCount();
    }
    
    _nextUid(): number { 
        return ++this._uid; 
    }
    
}

bootstrap(TodoApp);