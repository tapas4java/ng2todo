import { Todo } from '../models/Todo'

export class TodoService {
	
	todos: Array<Todo> = [];
	
	constructor(){
		let todo1 = new Todo(1, 'Learn Angular2', false);
		let todo2 = new Todo(2, 'Walk Dog!', true);
		let todo3 = new Todo(3, 'Prepare for presentation', false);
		this.todos.push(todo1, todo2, todo3);
	}
	
	add(todo: Todo){
		this.todos.push(todo);
	}
	
	delete(todo: Todo){
		this.todos.splice(this.todos.indexOf(todo), 1);
	}
	
	getAll(){
		return this.todos;
	}
	
	getCount(){
		return this.todos.length;
	}
	
}