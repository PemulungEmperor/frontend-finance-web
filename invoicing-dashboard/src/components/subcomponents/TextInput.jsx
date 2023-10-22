const TextInput = ({ label, id, type, placeholder }) => {
  return (
    <div className="input mb-2">
      <label htmlFor={id} className="mb-2 text-sm text-[#064061] font-Montserrat font-mediumBold">
        {label}
      </label>
      <input type={type} id={id} className="block py-3 border-none bg-gray-50 text-[#064061] text-md rounded-lg focus:ring-[#4EB7F2] focus:border-[#4EB7F2] placeholder-[#AAAAAA] w-full" placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
