const User = ({ name, email, avatar }) => {
  return (
    <div className="profile flex justify-center items-center py-1 px-4 m-3 my-4 bg-slate-50 hover:bg-slate-100 rounded-lg">
      <div className="avatar flex-shrink-0 ml-2">
        <img src={avatar} alt="avatar" className="h-full w-full" />
      </div>
      <div className="credentials ml-4">
        <div className="name font-bold text-sm text-[#064061] font-Montserrat">{name}</div>
        <div className="email text-xs text-[#AAAAAA] ">{email}</div>
      </div>
    </div>
  );
};

export default User;
