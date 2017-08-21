import {generate as id} from 'shortid';
import {Dispatcher, ReduceStore} from '../flux';
import {TasksDispatcher} from '../dispatchers';
import {CREATE_TASK, COMPLETE_TASK, SHOW_TASKS} from '../actionTypes/TaskActionTypes';

class TasksStore extends ReduceStore {
    getInitialState() {
        return {
            tasks: [
                {
                    id: id(),
                    content: 'Update CSS Style',
                    complete: false
                },
                {
                    id: id(),
                    content: 'Implement Unit Tests',
                    complete: false
                },
                {
                    id: id(),
                    content: 'Install Dependencies',
                    complete: false
                },
                {
                    id: id(),
                    content: 'Scafold Application Structure',
                    complete: true
                },
                {
                    id: id(),
                    content: 'Learn Flux Redux',
                    complete: false
                }
            ],
            showComplete: true
        }
    }
    getState() {
        return this.__state;
    }
    reduce(state, action) {
        console.log('Reducing ...', state, action);
        let newState;

        switch (action.type) {
            case CREATE_TASK:
                newState = {...state, tasks: [...state.tasks]};
                newState.tasks.push({
                    id: id(),
                    content: action.data,
                    complete: false
                });
                return newState;
            case COMPLETE_TASK:
                newState = {...state, tasks: [...state.tasks]};
                let completedTaskIndex = newState.tasks.findIndex(task => task.id === action.data.id);
                newState.tasks[completedTaskIndex] = {...newState.tasks[completedTaskIndex], complete: action.data.complete};
                return newState;
            case SHOW_TASKS:
                newState = {...state, tasks: [...state.tasks], showComplete: action.data};
                return newState;
        }

        return state;
    }
}

export default new TasksStore(TasksDispatcher);