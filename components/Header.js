import Image from "next/image";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

import {
  BeakerIcon,
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-[1px] lg:px-5 shadow-md justify-between">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="/fb_logo.png"
          width={40}
          height={40}
          layout="fixed"
          className="cursor-pointer"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Middle */}
      <div className="hidden sm:inline-flex  justify-center flex-grow ">
        <div className="relative flex space-x-6 md:space-x-2 ">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2  ">
        <div className="hidden xl:flex  items-center space-x-2">
          <Image
            onClick={signOut}
            className="rounded-full cursor-pointer"
            src={session.user.image}
            width={30}
            height={30}
            layout="fixed"
          />
          <p className="whitespace-nowrap font-semibold pr-3">
            {session.user.name}
          </p>
        </div>
        <div className="flex flex-grow justify-between"> </div>
        <div className=" flex space-x-1 ">
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon onClick={signOut} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
