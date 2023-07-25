import UploadImageFile from "../../UploadFile/UploadImageFile";

export default function CourseItemForm() {
    return (
        <div className="max-h-[54vh]">
            <form className="px-5 pt-5 pb-2 h-full rounded border border-[#b5b5b5]">
                <div className="grid grid-cols-4 mb-4">
                    <div className="col-span-1 text-[14px] font-semibold">Lesson title: </div>
                    <input className="p-[2px] col-span-3 outline-none" placeholder="Enter your title" type="text" />
                </div>

                <div className="grid grid-cols-4 mb-4">
                    <div className="col-span-1 text-[14px] font-semibold">Account: </div>
                    <input placeholder="Giana Schelea" className="p-[2px] col-span-3" type="text" disabled />
                </div>

                <div className="grid grid-cols-4 text-[14px] mb-4">
                    <div className="col-span-1 font-semibold">Description: </div>
                    <textarea
                        placeholder="Enter your description ..."
                        className="h-[10vh] col-span-3 font-semibold py-2 px-3 text-[16px] border-[#b5b5b5] rounded border-2 w-full"
                    />
                </div>

                <div className="grid grid-cols-4 mb-4">
                    <div className="col-span-1 text-[14px] font-semibold">Account: </div>
                    <div className="col-span-3 h-[20vh]">
                        <UploadImageFile />
                    </div>
                </div>
            </form>
        </div>
    );
}
