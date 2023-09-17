import React, { useState, useRef, useReducer } from "react";

import { todoObj, inProgress, completedData } from "./data/data";
import Todo from "./Todo";
import InProgress from "./InProgress";
import Completed from "./Completed";
import Reducer from "../../utils/reducer";
import { useGlobalContext } from "../../utils/contex";

const defaultState = {
  todoArr: todoObj,
  inProgressArr: inProgress,
  completedArr: completedData,
  todoModalOpen: false,
  inProgressModalOpen: false,
  completedModalOpen: false,
  error: false,
};

// const toggleModal = (dispatch, isOpen, modalOpen) => {
//   return dispatch({
//     type: isOpen ? "OPEN_MODAL" : "CLOSE_MODAL",
//     payload: { modalType: modalOpen },
//   });
// };

const Body = () => {
  let cleared = { title: "", desc: "", due_date: "" };
  const { newTask, setNewTask } = useGlobalContext();

  const dueDateRef = useRef(null);
  const [state, dispatch] = useReducer(Reducer, defaultState);

  const toggleModal = (dispatch, isOpen, modalOpen) => {
    return dispatch({
      type: isOpen ? "OPEN_MODAL" : "CLOSE_MODAL",
      payload: { modalType: modalOpen },
    });
  };

  const isFilled = function () {
    // const hasError = newTask.title.trim() === "" || newTask.desc.trim() === "";
    const hasError = !newTask.title.trim() || !newTask.desc.trim();
    hasError
      ? dispatch({
          type: "ERROR",
        })
      : null;
  };
  // console.log(state.error);

  // to use global context on this soon
  const handleAddTodo = (e) => {
    e.preventDefault();

    isFilled();
    dispatch({
      type: "ADD_TODO",
      payload: newTask,
      date: dueDateRef.current.value,
    });

    // Clear the input fields
    setNewTask(cleared);
  };

  const handleAddInProgress = (e) => {
    e.preventDefault();

    isFilled();
    dispatch({
      type: "ADD_INPROGRESS",
      payload: newTask,
      date: dueDateRef.current.value,
    });

    // Clear the input fields
    setNewTask(cleared);
  };

  const handleAddCompleted = (e) => {
    e.preventDefault();

    isFilled();
    dispatch({
      type: "ADD_COMPLETED",
      payload: newTask,
      date: dueDateRef.current.value,
    });

    // Clear the input fields
    setNewTask(cleared);
  };

  const handleDel = (id, modalType) => {
    console.log(modalType);
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id: id, modalType: modalType },
    });
  };

  return (
    <main>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-4 xl:gap-10 bg-[#fcfbfc] px-5 lg:px-6 xl:px-16 pt-8 pb-16">
        <Todo
          todoArr={state.todoArr}
          modalOpen={state.todoModalOpen}
          handleAdd={handleAddTodo}
          dispatch={dispatch}
          // handleDel={handleDel}
          toggleModal={toggleModal}
          handleDel={(id) => handleDel(id, "todoArr")}
          dueDateRef={dueDateRef}
        />

        <InProgress
          inProgressArr={state.inProgressArr}
          modalOpen={state.inProgressModalOpen}
          handleAdd={handleAddInProgress}
          dispatch={dispatch}
          // handleDel={handleDel}

          toggleModal={toggleModal}
          handleDel={(id) => handleDel(id, "inProgressArr")}
          dueDateRef={dueDateRef}
        />

        <Completed
          completedArr={state.completedArr}
          modalOpen={state.completedModalOpen}
          handleAdd={handleAddCompleted}
          // handleDel={handleDel}
          handleDel={(id) => handleDel(id, "completedArr")}
        />
      </div>
    </main>
  );
};

export default Body;
