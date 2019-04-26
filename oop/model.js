const todoList = require('./todo.json')

class Model {
    constructor (utility) {
        this.utility = utility;
    }

    getCountEachStatus () {
        return todoList.reduce((countEachStatus, todoObj) => {
            countEachStatus[todoObj.status]++;
            return countEachStatus;
        }, {'todo' : 0, 'doing': 0, 'done': 0});
    }
    
    getListInStatus (status) {
        return todoList.filter((todoObj) => { return todoObj.status === status; })
                        .reduce((listInStatus, todoObj) => {
                            listInStatus.push(`'${todoObj.name}, ${todoObj.id}번'`);
                            return listInStatus;
                        }, []);
    }
    
    addTodoObject (todoObj) {
        todoList.push(todoObj);
        this.utility.save(todoList);
    }
    
    deleteTodoObject (id) {
        const objToDelete = this.utility.getObjectById(id);
        todoList.splice(todoList.indexOf(objToDelete), 1);
        this.utility.save(todoList);
        return objToDelete;
    }
    
    updateTodoObject (id, status) {
        const index = this.utility.getIndexById(id);
        todoList[index].status = status;
        this.utility.save(todoList);
        return todoList[index];
    }
}

module.exports = Model;