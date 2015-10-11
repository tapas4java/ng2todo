import {Todo} from '../models/Todo'

export class TodoService {
	
	add(todo: Todo){
		let allList = this.getAll();
		allList.push(todo);
		localStorage.setItem('todos', JSON.stringify(allList));
		console.log('Created!');
	}
	
	update(todo: Todo){
		let allList = this.getAll();
		allList.forEach((dbTodo: Todo) => {
			if(dbTodo.id === todo.id){
				dbTodo.title = todo.title;
				dbTodo.completed = todo.completed;
			}
		});
		localStorage.setItem('todos', JSON.stringify(allList));
		console.log('Updated!');
	}
	
	delete(todo: Todo){
		console.log(this.getAll().indexOf(todo))
		let allList = this.getAll();
		if(allList.length > 1){
			localStorage.setItem('todos', JSON.stringify(allList.splice(this.getAll().indexOf(todo), 1)));
		}else{
			localStorage.setItem('todos', '[]');
		}
		console.log('Deleted!');
	}
	
	getAll(){
		if(localStorage.getItem('todos')){
			return JSON.parse(localStorage.getItem('todos'));
		}
		return [];
	}
	
	getCount(){
		return this.getAll().length;
	}
}