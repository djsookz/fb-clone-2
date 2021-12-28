function HeaderIcon({ Icon, active }) {
  return (
    <div
      className={`relative flex  items-center cursor-pointer md:px-5 lg:px-10 sm:h-14 sm:ml-14 ${
        active && "md:hover:bg-white active:border-b-0"
      } md:hover:bg-gray-100  rounded-xl active:border-b-2 active:border-blue-500 group `}
    >
      <Icon
        className={`text-lg text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${
          active && "text-blue-500  "
        }`}
      />
      <span
        className={`${
          active &&
          "absolute border-[2px] bottom-[-2px]  w-28 border-blue-500 sm:left-[-6px] sm:w-10 md:left-[14px]  lg:w-20 xl:w-28 xl:left-[0px]"
        }`}
      ></span>
    </div>
  );
}

export default HeaderIcon;
