import { Component, NgFor } from 'angular2/angular2';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/TodoService'

@Component({
	selector: 'todo-list',
	templateUrl: 'src/components/todolist/todolist.html',
	directives: [NgFor],
	inputs: ['todos']
})
export class TodoList {
	todoEdit: Todo = null;
	constructor(public todoService: TodoService){
		
	}
	
	completeMe(todo: Todo): void { 
        todo.completed = !todo.completed; 
        this.todoService.update(todo);
    }
    
    deleteMe(todo: Todo): void { 
        this.todoService.delete(todo); 
    }
	
	editTodo(todo: Todo): void { 
        this.todoEdit = todo; 
        console.log(this.todoEdit == todo);
    }
    
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
	
}