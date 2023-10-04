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

    addTask: function (taskName, significance) {
        this.tasks.push(
            {
                title: taskName,
                id: this.tasks.length + 1,
                priority: significance
            }
        )
    },

    delTask: function (taskNum) {
      this.tasks = this.tasks.filter(el => taskNum !== el.id)
    },

    newName: function (taskId, updateName) {
        this.tasks.map(el => {
            if (el.id == taskId) el.title = updateName
        });
    },

    sortTask: function () {
        this.tasks.sort((a,b) => a.priority-b.priority)
    }

}
toDoList.addTask('gfgf',5);
//toDoList.delTask(3);
toDoList.newName(4, 'wash');
toDoList.sortTask();
console.log(toDoList);
