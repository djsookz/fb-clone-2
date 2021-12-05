import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative  h-48 w-24 md:h-32 md:w-24 lg:h-56 lg:w-32 cursor-pointer overflow-x-hidden p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
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
    </div>
  );
}

export default StoryCard;
