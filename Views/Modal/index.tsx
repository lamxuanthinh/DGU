interface IModalProps {
  title: string;
  onOk: () => void;
  onCancel: () => void;
}
export default function Modal({ title, onOk, onCancel }: IModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center transition-opacity z-50 bg-modal-gradient backdrop-blur-sm font-semibold select-none">
      <div className="">
        <p className="text-3xl text-[#DBDBDB]  mb-14">{title}</p>
        <div className="flex justify-center text-[26px] text-black ">
          <button
            className="rounded-[16px] mr-20 bg-white min-w-[200px] py-5 hover:opacity-80 transition-opacity duration-200"
            onClick={onOk}
          >
            OK
          </button>
          <button
            className="rounded-[16px]  bg-white min-w-[200px] py-5 hover:opacity-80 transition-opacity duration-200"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
