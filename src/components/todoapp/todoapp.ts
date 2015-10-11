import { Component, bootstrap, NgFor, NgIf } from 'angular2/angular2';
import { TodoService } from '../../services/TodoService'
import { Todo } from '../../models/Todo'
import { TodoList } from '../todolist/todolist'

@Component({
    selector: 'todo-app',
    viewBindings: [TodoService],
    templateUrl: 'src/components/todoapp/todoapp.html',
    directives: [NgFor, NgIf, TodoList]
})
class TodoApp {
    _uid: number = 0;
    
    constructor(public todoService: TodoService){
        this._uid = todoService.getCount();
    }
    
    getAllTodos(): Array<Todo>{
        return this.todoService.getAll();
    }
    
    enterTodo(inputElement: HTMLInputElement): void {
        this.addTodo(inputElement.value);
        inputElement.value = '';
    }
    
    addTodo(newTitle: string): void {
        this.todoService.add(new Todo(this.nextUid(), newTitle, false)); 
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
    
    nextUid(): number { 
        return ++this._uid; 
    }
    
}

bootstrap(TodoApp);