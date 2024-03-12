let myToDos = [];

class ToDoCard {

    constructor(project, title, description, dueDate, priority) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    save(newUser) {
        myToDos.push(newUser);
        localStorage.setItem('data', JSON.stringify(myToDos));
    }
}

export { myToDos, ToDoCard }