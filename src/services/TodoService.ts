import {Todo} from '../models/Todo'

export class TodoService {
	todos: Array<Todo>;
	
	constructor(){
		this.todos = [
			{'id':1,'completed':false, 'title':'Go Home'},
			{'id':2,'completed':false, 'title':'Enjoy Holiday'}
		];
	}
	
	add(todo: Todo){
		this.todos.push(todo);
	}
	
	update(){
		
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