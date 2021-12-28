import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative  h-36 w-18 md:h-[130px] md:w-[110px] lg:h-52 lg:w-[100px]  cursor-pointer overflow-x-hidden p-3 transition-all duration-400 transform ease-in hover:scale-105 hover:animate-pulse">
      <span className="absolute opacity-0 lg:opacity-100 border-4 h-10 w-10 border-solid border-blue-500 rounded-full  z-50"></span>

      <Image
        className="absolute opacity-0 lg:opacity-100  rounded-full  z-40 top-10 "
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className=" object-cover filter brightness-75 rounded-xl lg:rounded-3xl"
        src={src}
        layout="fill"
      />
      <p className="hidden lg:inline-block absolute  w-12 bottom-2 right-10  text-white text-sm ">
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
