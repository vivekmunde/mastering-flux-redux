import {CREATE_TASK, COMPLETE_TASK, SHOW_TASKS} from '../actionTypes/TaskActionTypes';

export const createNewTaskAction = (task) => {
    return {
        type: CREATE_TASK,
        data: task
    }
}

export const completeTaskAction = (task) => {
    return {
        type: COMPLETE_TASK,
        data: task
    }
}

export const showTasksAction = (show) => {
    return {
        type: SHOW_TASKS,
        data: show
    }
}