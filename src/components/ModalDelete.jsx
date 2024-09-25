export default function ModalDelete({ openModal, onDelete }) {
  return (
    <>
      {openModal && (
        <div className="px-3 py-3 bg-[#FAFAFA] rounded-md absolute right-[-10%] bottom-0 shadow-md">
          <button onClick={onDelete} className="text-black">Deletar</button>
        </div>
      )}
    </>
  );
}
