// import React from 'react'

function Reducer(state, action) {
  const { type, payload, date } = action;
  console.log(state);
  console.log(action);
  switch (type) {
    case "ADD_TODO": {
      // console.log(payload);
      return {
        ...state,
        todoArr: [
          ...state.todoArr,
          {
            id: state.todoArr.length + 1,
            title: payload.title,
            desc: payload.desc,
            due_date: date,
          },
        ],
        todoModalOpen: false,
      };
    }

    case "ADD_INPROGRESS": {
      console.log(payload);
      return {
        ...state,
        inProgressArr: [
          ...state.inProgressArr,
          {
            id: state.inProgressArr.length + 1,
            title: payload.title,
            desc: payload.desc,
            due_date: date,
          },
        ],
        inProgressModalOpen: false,
      };
    }

    case "ADD_COMPLETED": {
      console.log(payload);
      return {
        ...state,
        completedArr: [
          ...state.completedArr,
          {
            id: state.completedArr.length + 1,
            title: payload.title,
            desc: payload.desc,
            due_date: date,
          },
        ],
        completedModalOpen: false,
      };
    }

    case "OPEN_MODAL": {
      return {
        ...state,
        [payload.modalType]: true,
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        [payload.modalType]: false,
      };
    }

    case "REMOVE_ITEM": {
      // const { modalType, id } = payload;
      let updatedTask = state[payload.modalType].filter(
        (task) => task.id !== payload.id
      );
      return {
        ...state,
        [payload.modalType]: updatedTask,
      };
    }

    case "ERROR": {
      return { ...state, error: true && "Input word greater than ..." };
    }

    default:
      return state;
  }
}

export default Reducer;
