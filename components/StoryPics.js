import { signOut, useSession } from "next-auth/client";
import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/solid";

function StoryPics() {
  const [session] = useSession();
  return (
    <div className="ml-2">
      <div className="relative shadow-xl rounded-2xl h-[145px] w-18 md:h-[130px] md:w-[110px] lg:h-52 lg:w-[100px] cursor-pointer overflow-x-hidden p-3 transition-all duration-400 transform ease-in hover:scale-105 hover:animate-pulse">
        <span className="absolute opacity-0 lg:opacity-100 border-4 h-10 w-10 border-solid border-blue-500 rounded-full  z-50"></span>
        <Image
          className="absolute opacity-0 lg:opacity-100  rounded-full  z-40 top-10 "
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          objectFit="cover"
        />
        <Image
          className="relative object-cover  filter brightness-75 rounded-xl lg:rounded-3xl"
          src={session.user.image}
          layout="fill"
        />
        <span className="absolute bottom-0 left-[-5px] bg-white w-[100px] h-16 rounded-b-2xl md:w-[130px] md:h-12 lg:h-16 z-50 group group hover:bg-gray-200">
          <PlusCircleIcon className="absolute left-[25px] bottom-11 h-10 text-blue-500 bg-white rounded-full md:left-10 md:bottom-8 lg:bottom-10 lg:left-[35px] group-hover:bg-gray-200" />
          <p className="absolute bottom-[25px] left-[7px] text-center text-xs font-bold md:left-5 md:bottom-[17px] lg:bottom-[25px] lg:left-4">
            Create a story
          </p>
        </span>
      </div>
    </div>
  );
}

export default StoryPics;
