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

const DEFAULT_PRIORITY = PRIORITY.LOW

const list = [
    { name: 'create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW },
    { name: 'test', status: STATUS.DONE, priority: PRIORITY.HIGH }
]

let newList;

function changeStatus(name, status) {
    findIndex(name);
    let priority = list[index].priority;
    list.splice(index, 1, { name, status, priority });
}

function changePriority(name, priority) {
    findIndex(name);
    let status = list[index].status;
    list.splice(index, 1, { name, status, priority });
}

function addTask(name) {
    list.push({ name, status: DEFAULT_STATUS, priority: DEFAULT_PRIORITY });
}

function deleteTask(name) {
    findIndex(name);
    list.splice(index, 1);
}

function showBy(style) {
    if (style === 'status') {
        console.log(STATUS.TO_DO + ':');
        createNewListByStatus(STATUS.TO_DO);
        showName(newList);

        console.log(STATUS.IN_PROGRESS + ':');
        createNewListByStatus(STATUS.IN_PROGRESS);
        showName(newList);

        console.log(STATUS.DONE + ':');
        createNewListByStatus(STATUS.DONE);
        showName(newList);
    }

    if (style === 'priority') {
        console.log(PRIORITY.HIGH + ':');
        createNewListByPriority(PRIORITY.HIGH);
        showName(newList);

        console.log(PRIORITY.LOW + ':');
        createNewListByPriority(PRIORITY.LOW);
        showName(newList);

    }
}

function findIndex(name) {
    index = (list.findIndex(function (task) {
        return task.name === name
    }));
};

function createNewListByStatus(status) {
    newList = list.filter(function (task) {
        return task.status === status
    });
}

function createNewListByPriority(priority) {
    newList = list.filter(function (task) {
        return task.priority === priority
    });
}

function showName(newList) {
    if (newList.length === 0) {
      console.log('-');
    } else {
      newList.forEach(function func(item) {
        console.log(item.name)
      });
    }
  }

changeStatus('create a post', 'Done');
addTask('cleaning')
deleteTask('test')
showBy('status')
//changePriority('cleaning', 'high')
//showBy('priority')