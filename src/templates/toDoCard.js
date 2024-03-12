let myToDos = [];

class ToDoCard {

    constructor(project, title, description, dueDate, priority, status) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }

    save(newUser) {
        myToDos.push(newUser);
        localStorage.setItem('data', JSON.stringify(myToDos));
    }
}

export { myToDos, ToDoCard }