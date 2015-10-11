import {Todo} from '../models/Todo'

export class TodoService {
	todos: Array<Todo>;
	
	constructor(){
		this.todos = [
			{'id':1,'completed':false, 'title':'Walk Dog!'},
			{'id':2,'completed':true, 'title':'Learn Angular2'},
			{'id':3,'completed':false, 'title':'Prepare for presentation'}
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