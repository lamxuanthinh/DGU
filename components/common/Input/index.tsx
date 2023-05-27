import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface Props {
  className?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  autoComplete?: string;
  name: string;
  errorMessage?: string;
}

export default function Input({
  className,
  type,
  placeholder,
  name,
  register,
  autoComplete,
  errorMessage,
  rules,
}: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className="text-[14px] px-5 py-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-xl"
        placeholder={placeholder}
        {...register(name, rules)}
        autoComplete={autoComplete}
      />
      <div className="mt-1 px-5 text-red-600 min-h-[1.5rem] text-sm">
        {errorMessage}
      </div>
    </div>
  );
}
