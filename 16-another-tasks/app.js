'use strict'

const toDoList = {
  tasks: [
    {
      title: 'Помыть посуду',
      id: 1,
      priority: 2
    },
    {
      title: 'Покормить кота',
      id: 2,
      priority: 1
    },
    {
      title: 'Купить картошки',
      id: 3,
      priority: 5
    }
  ],
  counter: 3,

  addTask: function (taskName, significance) {
    this.tasks.push(
      {
        title: taskName,
        id: this.counter + 1,
        priority: significance
      }
    );
    this.counter++;
  },

  deleteTask: function (taskId) {
    this.tasks = this.tasks.filter(el => taskId !== el.id);
    this.counter--
  },

  updateTaskName: function (taskId, updateName) {
    this.tasks.map(el => {
      if (el.id == taskId) el.title = updateName
    });
  },

  sortTask: function () {
    this.tasks.sort((a, b) => a.priority - b.priority)
  }

}
toDoList.addTask('gfgf', 5);
toDoList.addTask('pppppp', 3);
toDoList.deleteTask(3);
toDoList.updateTaskName(4, 'wash');

console.log(toDoList);

//я очень не уверена в том, что от меня хотели именно это

const newTask = {
  tasks: [
    {
      title: 'Помыть посуду',
      id: 1,
      priority: 2,
      description: 'описание'
    }
  ],
  counter: 1,

  addNewTasks(taskName, significance, description) {
    const scorCounter = this.counter
    const addFunc = toDoList.addTask.bind(newTask);
    addFunc(taskName, significance);
   this.tasks[scorCounter].description = description;
  },

  deleteNewTask(taskId) { 
    const deleteFunc = toDoList.deleteTask.bind(newTask);
    deleteFunc(taskId);
  },

  updateNewTaskName(taskId, updateName) {
    const updateFunc = toDoList.updateTaskName.bind(newTask);
    updateFunc(taskId,updateName);
  },

  sortNewTask() {
    const sotrFunc = toDoList.sortTask.bind(newTask);
    sotrFunc();
  }
}

newTask.addNewTasks('обед у кота', 1, 'рыба');
newTask.addNewTasks('ужин у кота', 3, 'мясо');
newTask.updateNewTaskName(1, 'завтрак у кота');

console.log(newTask);
