const list = {
    "complete a practical task": "Done",
    "order vitamins": "In Progress",
    "to wash the dishes": "To Do",
};

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = "To Do";
}

function deleteTask(task) {
    delete list[task];
}

function showList() {

    console.log('Todo:');
    let counterToDo = 0;
    for (let key in list) {
        if (list[key] === "To Do") {
            counterToDo++;
        }
    }
    if (counterToDo === 0) {
        console.log('-');
    } else {
        for (let key in list) {
            if (list[key] === "To Do") {
                console.log('"' + key + '"');
            }
        }
    }

    console.log('In Progress:');
    let counterInProgress = 0;
    for (key in list) {
        if (list[key] === "In Progress") {
            counterInProgress++;
        }
    }
    if (counterInProgress === 0) {
        console.log('-');
    } else {
        for (key in list) {
            if (list[key] === "In Progress") {
                console.log('"' + key + '"');
            }
        }
    }

    console.log('Done:');
    let counterDone = 0;
    for (key in list) {
        if (list[key] === "Done") {
            counterDone++;
        }
    }
    if (counterDone === 0) {
        console.log('-');
    } else {
        for (key in list) {
            if (list[key] === "Done") {
                console.log('"' + key + '"');
            }
        }
    }
}

addTask('homework');
addTask ('bake cookies');
deleteTask('order vitamins');
changeStatus ('bake cookies', "Done");
changeStatus ('homework', "Done");
showList();