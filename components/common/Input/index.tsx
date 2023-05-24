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
        className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
        placeholder={placeholder}
        {...register(name, rules)}
        autoComplete={autoComplete}
      />
      <div className="mt-1 text-red-600 min-h-[1rem] text-sm">
        {errorMessage}
      </div>
    </div>
  );
}
