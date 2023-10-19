interface ICheckboxInputProps {
    className?: string;
}

export default function CheckboxInput({ className }: ICheckboxInputProps) {
    return (
        <label htmlFor="my-checkbox" className="relative cursor-pointer">
            <input type="checkbox" id="my-checkbox" className="absolute inset-0 opacity-0" />
            <div className={`bg-gray-200 h-4 rounded-sm w-4 flex items-center justify-center ${className}`}>
                <svg className="h-3 w-3 text-white fill-current hidden" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
            </div>
        </label>
    );
}
