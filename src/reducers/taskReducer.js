import taskService from '../services/task'

const taskReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT':
            return action.tasks
        case 'CREATE_TASK':
            return [...store, action.task]
        case 'REMOVE_TASK':
            return store.filter(x => x._id !== action.id)
        case 'EDIT_TASK':
            return store.map(x => x._id !== action.task._id ? x : action.task)
        case 'REMOVE_TASKLIST':
            return store.filter(x => x.tasklist !== action.id)
        default:
            return store
    }
}

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        id
    }
}

export const editTask = (task) => {
    return async (dispatch) => {
        const editedTask = await taskService.edit(task)

        dispatch({
            type: 'EDIT_TASK',
            task: editedTask
        })
    }

}

export const createTask = (task) => {
    return async (dispatch) => {
        try {
            const createdTask = await taskService.create(task)
            dispatch({
                type: 'CREATE_TASK',
                task: createdTask
            })
        } catch (error) {
            console.log(error)
        }
    }
}

    export default taskReducer