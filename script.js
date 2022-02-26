const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
};

const DEFAULT_STATUS = STATUS.TO_DO;

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
};

const list = [];

let newList;
let index;

function changeStatus(name, status, priority) {
    findIndex(name);
    list.splice(index, 1, { name, status, priority});
}

function addTask(name, priority) {
    list.push({ name, status: DEFAULT_STATUS, priority });
}

function deleteTask(name) {
    findIndex(name);
    list.splice(index, 1);
}


function findIndex(name) {
    index = (list.findIndex(function (task) {
        return task.name === name
    }));
};

function createNewListByPriority(priority) {
    newList = list.filter(function (task) {
        return task.priority === priority
    });
}

const DEFAULT_VALUE_HIGH = 'Добавить важных дел';
const DEFAULT_VALUE_LOW = 'Добавить';

formHigh.addEventListener("click", cleanDefaultValueHigh);
formHigh.addEventListener("submit", addHighTask);
formHigh.addEventListener("submit", defaultValueHigh);
formHigh.addEventListener("submit", cleanHighTasks);
formHigh.addEventListener("submit", outputHighTasks);

formLow.addEventListener("click", cleanDefaultValueLow);
formLow.addEventListener("submit", addLowTask);
formLow.addEventListener("submit", defaultValueLow);
formLow.addEventListener("submit", cleanLowTasks);
formLow.addEventListener("submit", outputLowTasks);

function cleanDefaultValueHigh() {
    if (document.body.children[0].children[0].children[1].children[0].value === DEFAULT_VALUE_HIGH) {
        document.body.children[0].children[0].children[1].children[0].value = ''; };
};

function addHighTask() {
    let name = document.body.children[0].children[0].children[1].children[0].value;
    addTask(name, PRIORITY.HIGH);
}

function defaultValueHigh() {
    document.body.children[0].children[0].children[1].children[0].value = DEFAULT_VALUE_HIGH;
}

function cleanHighTasks() {
    highTaskList.innerHTML = '';
}

function outputHighTasks() {
    createNewListByPriority(PRIORITY.HIGH);
    const HTMLpart1 = '<div class="task-high-list"><div className="checkbox"><label><input type="checkbox" onclick="changeStatusHighPriority(), colorHighTaskDone()" class="checkboxHigh">';
    const HTMLpart2 = '</label></div><button class="del-high-task"><img src="del-icon.png" class="del-icon"></button></div>';
    for (let i = 0; i < newList.length; i++) {
        highTaskList.innerHTML += HTMLpart1 + newList[i].name + HTMLpart2;
    }
    outputHighCheck();
    setButtonsDel();

}

function cleanDefaultValueLow() {
    if (document.body.children[0].children[1].children[1].children[0].value === DEFAULT_VALUE_LOW) {
        document.body.children[0].children[1].children[1].children[0].value = ''; };
};

function addLowTask() {
    let name = document.body.children[0].children[1].children[1].children[0].value;
    addTask(name, PRIORITY.LOW);
}

function defaultValueLow() {
    document.body.children[0].children[1].children[1].children[0].value = DEFAULT_VALUE_LOW;
}

function cleanLowTasks() {
    lowTaskList.innerHTML = '';
}

function outputLowTasks() {
    createNewListByPriority(PRIORITY.LOW);
    const HTMLpart1 = '<div class="task-low-list"><div className="checkbox"><input type="checkbox" onclick="changeStatusLowPriority(), colorLowTaskDone()" class="checkboxLow">';
    const HTMLpart2 = '</div><button class="del-low-task"><img src="del-icon.png" class="del-icon"></button></div>';
    for (let i = 0; i < newList.length; i++) {
        lowTaskList.innerHTML += HTMLpart1 + newList[i].name + HTMLpart2;
    }
    outputLowCheck();
    setButtonsDel();
}


function setButtonsDel() {
    let tasks = document.querySelectorAll("button.del-high-task, button.del-low-task");
    for (let elem of tasks) {
        elem.addEventListener("click", function () {
            elem.parentNode.remove();
            deleteTask(elem.textContent);
        });
    }
}

function changeStatusHighPriority() {
    let checkboxes = document.querySelectorAll("input.checkboxHigh");
    for (let elem of checkboxes) {
        if (elem.checked) {
            changeStatus((elem.parentNode.textContent), STATUS.DONE, PRIORITY.HIGH);
        } else {
            changeStatus((elem.parentNode.textContent), STATUS.TO_DO, PRIORITY.HIGH);
        }
    };
};

function changeStatusLowPriority() {
    let checkboxes = document.querySelectorAll("input.checkboxLow");
    for (let elem of checkboxes) {
        if (elem.checked) {
            changeStatus((elem.parentNode.textContent), STATUS.DONE, PRIORITY.LOW);
        } else {
            changeStatus((elem.parentNode.textContent), STATUS.TO_DO, PRIORITY.LOW);
        }
    };
};

function outputHighCheck() {
    createNewListByPriority(PRIORITY.HIGH);
    for (let i = 0; i < newList.length; i++) {
            if (newList[i].status === STATUS.DONE) {
                document.querySelectorAll("input.checkboxHigh")[i].checked = true;
            }
    }

}
function outputLowCheck() {
    createNewListByPriority(PRIORITY.LOW);
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].status === STATUS.DONE) {
            document.querySelectorAll("input.checkboxLow")[i].checked = true;
        }
    }
}
function colorHighTaskDone() {
    createNewListByPriority(PRIORITY.HIGH);
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].status === STATUS.DONE) {
            document.querySelectorAll("div.task-high-list")[i].className = 'task-high-list done-high-task';
            document.querySelectorAll("button.del-high-task")[i].className = 'del-high-task del-done-high-task';
        } else {
            document.querySelectorAll("div.task-high-list")[i].className = 'task-high-list';
            document.querySelectorAll("button.del-high-task")[i].className = 'del-high-task';
        }
    }

}

function colorLowTaskDone() {
    createNewListByPriority(PRIORITY.LOW);
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].status === STATUS.DONE) {
            document.querySelectorAll("div.task-low-list")[i].className = 'task-low-list done-low-task';
            document.querySelectorAll("button.del-low-task")[i].className = 'del-low-task del-done-low-task';
        } else {
            document.querySelectorAll("div.task-low-list")[i].className = 'task-low-list';
            document.querySelectorAll("button.del-low-task")[i].className = 'del-low-task';
        }
    }

}