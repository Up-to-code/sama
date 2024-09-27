
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={props.id} className="text-sm font-semibold text-primary">{label}</label>
      <input className={`w-full p-2 border-2 border-border focus:border-primary focus:outline-none  `} {...props} />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default Input