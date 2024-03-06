const myToDos = [
    {
        project: 'Duden',
        title: 'Langenscheid',
        description: 450,
        dueDate: true,
        priority: 'normal',
    },
    {
        project: 'Duden',
        title: 'Englisch-Deutsch',
        description: 450,
        dueDate: true,
        priority: 'normal',
    },
    {
        project: 'Duden',
        title: 'Englisch-Deutsch',
        description: 450,
        dueDate: true,
        priority: 'normal',
    }
];

localStorage.setItem('data', JSON.stringify(myToDos));

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

function test () {
    const toDo = new ToDoCard("", "test2", "this was added with a function", "", "high");
    toDo.save(toDo);
}

export { myToDos, ToDoCard }