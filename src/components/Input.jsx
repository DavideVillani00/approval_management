export default function Input({ type, label, name, placeholder }) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="font-bold text-lg">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={5}
          className="p-2 border-[1px] border-input-border rounded-md focus:outline-focus shadow-lg"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className="p-2 border-[1px] border-input-border rounded-md focus:outline-focus shadow-lg"
        />
      )}
    </div>
  );
}
