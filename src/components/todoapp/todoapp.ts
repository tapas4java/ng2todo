import { Component, bootstrap, NgFor, NgIf } from 'angular2/angular2';
import { TodoService } from '../../services/TodoService'
import { Todo } from '../../models/Todo'

@Component({
    selector: 'todo-app',
    viewBindings: [TodoService],
    templateUrl: 'src/components/todoapp/todoapp.html',
    directives: [NgFor, NgIf]
})
class TodoApp {
    _uid: number = 0;
    todoEdit: Todo = null;
    myTodos: Array<Todo> = [];
    
    constructor(public todoService: TodoService){
        this.myTodos = todoService.getAll();
    }
    
    enterTodo(inputElement: HTMLInputElement): void {
        this.addTodo(inputElement.value);
        inputElement.value = '';
    }
    
    editTodo(todo: Todo): void { this.todoEdit = todo; }
    
    doneEditing($event: any, todo: Todo): void {
        var which = $event.which;
        var target = $event.target;
        if (which === 13) {
            todo.title = target.value;
            this.todoEdit = null;
        } else if (which === 27) {
            this.todoEdit = null;
            target.value = todo.title;
        }
    }
    
    addTodo(newTitle: string): void { 
        this.todoService.add(new Todo(this.nextUid(), newTitle, false)); 
    }
    
    completeMe(todo: Todo): void { 
        todo.completed = !todo.completed; 
    }
    
    deleteMe(todo: Todo): void { 
        this.todoService.delete(todo); 
    }
    
    toggleAll($event: any): void {
        var isComplete = $event.target.checked;
        this.todoService.getAll().forEach((todo: Todo) => {
             todo.completed = isComplete; 
        });
    }
    
    clearCompleted(): void { 
        //this.todoService.removeBy((todo: Todo) => todo.completed); 
    }
    
    getTodoCount(): number{
        return this.todoService.getCount();
    }
    
    nextUid(): number { 
        return this._uid++; 
    }
    
}

bootstrap(TodoApp);