let myToDos = [];

/* localStorage.setItem('data', JSON.stringify(myToDos)); */

class ToDoCard {

    constructor(project, title, description, dueDate, priotity) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priotity = priotity;
    }

    load() {
        return JSON.parse(localStorage.getItem('data'));
    }

    save(newUser) {
        myToDos.push(newUser);
        localStorage.setItem('data', JSON.stringify(myToDos));
    }
}

export { myToDos, ToDoCard }