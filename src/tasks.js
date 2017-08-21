import {TasksDispatcher} from './dispatchers';
import {TasksReduceStore} from './reduceStore';
import {createNewTaskAction, completeTaskAction, showTasksAction} from './actions/TaskActions';

const TaskComponent = ({content, complete, id}) => {
    return `<section>
        ${content} <input type="checkbox" name="taskCompleteCheck" data-taskid=${id} ${complete ? "checked" : ""}>
    </section>`
};

document.forms.newTask.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.newTaskName.value;
    if (name) {
        TasksDispatcher.dispatch(createNewTaskAction(name));
        e.target.newTaskName.value = '';
    }
});

document.getElementById('showComplete').addEventListener('change', ({target}) => {
    const showComplete = target.checked;
    TasksDispatcher.dispatch(showTasksAction(showComplete));
});

document.forms.undo.addEventListener('submit', e => {
    e.preventDefault();
    TasksReduceStore.revertLastState();
});

TasksReduceStore.addListener(() => {
    render();
});

const render = () => {
    const tasks = document.getElementById('tasks');
    const state = TasksReduceStore.getState();
    const renderred = state.tasks
        .filter(task => state.showComplete ? true : !task.complete)
        .map(TaskComponent)
        .join('');
    tasks.innerHTML = renderred;

    document.getElementsByName('taskCompleteCheck').forEach(element => {
        element.addEventListener('change', (e) => {
            const id = e.target.attributes['data-taskid'].value;
            const checked = e.target.checked;
            TasksDispatcher.dispatch(completeTaskAction({id, complete: checked}));
        })
    });
};

render();