// import { AiOutlinePlus } from "react-icons/ai";
import { Cards, ModalPage } from "./Cards";

const Completed = ({
  modalOpen,
  completedArr,
  handleAdd,
  handleDel,
}) => {
  const handleOpenModal = () => {
    setModalOpen(true);
    console.log("lfks");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full bg-[#f4f6f8] p-4 rounded">
        <h2 className="text-[1rem] text-[#858a93]">Completed</h2>
        <div className="bg-black text-white rounded py-1 px-3">
          <span className="">{completedArr.length}</span>
        </div>
      </div>
      <Cards
        data={completedArr}
        status={true}
        handleDel={(id) => handleDel(id)}
      />
      {/* Not Visible in Completed */}
      {/* <button
        className="text-[#7D8088] font-medium w-full flex gap-3 py-3 mt-4 items-center justify-center bg-[f2f4f5] border border-dashed border-[#d5d5d5] rounded-xl"
        onClick={handleOpenModal}
      >
        <AiOutlinePlus />
        <span className="">Add Task</span>
      </button>{" "} */}

      {modalOpen && (
        <ModalPage
          handleCloseModal={handleCloseModal}
          handleAdd={handleAdd}
          showDueDate={false}
        />
      )}
    </div>
  );
};

export default Completed;
