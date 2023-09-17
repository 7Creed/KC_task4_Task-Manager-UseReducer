import { Cards, ModalPage } from "./Cards";
import { AiOutlinePlus } from "react-icons/ai";

const InProgress = ({
  modalOpen,
  inProgressArr,
  handleAdd,
  handleDel,
  dueDateRef,
  dispatch,
  toggleModal,
}) => {
  const handleOpenModal = () => {
    toggleModal(dispatch, true, "inProgressModalOpen");
  };

  const handleCloseModal = () => {
    toggleModal(dispatch, false, "inProgressModalOpen");
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full bg-[#f4f6f8] p-4 rounded">
        <h2 className="text-[1rem] text-[#858a93]">In Progress</h2>
        <div className="bg-black text-white rounded py-1 px-3">
          <span className="">{inProgressArr.length}</span>
        </div>
      </div>
      <Cards
        data={inProgressArr}
        status={false}
        handleDel={(id) => handleDel(id)}
      />
      <button
        className="text-[#7D8088] font-medium w-full flex gap-3 py-3 mt-4 items-center justify-center bg-[f2f4f5] border border-dashed border-[#d5d5d5] rounded-xl"
        onClick={handleOpenModal}
      >
        <AiOutlinePlus />
        <span className="">Add Task</span>
      </button>

      {modalOpen && (
        <ModalPage
          handleCloseModal={handleCloseModal}
          handleAdd={handleAdd}
          dueDateRef={dueDateRef}
          showDueDate={true}
        />
      )}
    </div>
  );
};

export default InProgress;
