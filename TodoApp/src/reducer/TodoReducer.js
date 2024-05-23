function TodoReducer(state, action){
    // the action can be of the following 4 `types`
    //  1. add todo
    //  2. edit todo
    //  3. finish todo
    //  4. delete todo

    if(action.type == 'add_todo'){
        let nextId = state.length + 1;
        return [...state, {id: nextId, text: action.payload.todoText, isFinished: false}]
    } 
    
    else if(action.type == 'edit_todo'){
        const newTodoList = state.map(todo => {
            if(todo.id == action.payload.id){
                todo.text = action.payload.newTodo;
            }
            return todo;
        })
        return newTodoList;
    } 
    
    else if(action.type == 'finish_todo'){
        const newTodoList = state.map(todo => {
            if(todo.id == action.payload.id){
                todo.isFinished = action.payload.state;
            }
            return todo;
        })
        return newTodoList;
    }
    
    else if(action.type == 'delete_todo'){
        const newTodoList = state.filter(todo => todo.id != action.payload.id)
        return newTodoList;
    }
    return state;
}
export default TodoReducer;