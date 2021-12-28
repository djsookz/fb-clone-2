import StoryCard from "./StoryCard";

import Image from "next/image";
import StoryPics from "./StoryPics";
const stories = [
  {
    name: "Димо Д.",
    src: "/dimo.jpg",
    profile: "/dimo.jpg",
  },
  {
    name: "Elon Musk",
    src: "/Elon.jpg",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Mark Zuckerberg",
    src: "/Mark1.jpg",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Harry Potter",
    src: "/Harry.jpg",
    profile: "https://links.papareact.com/d0c",
  },
  {
    name: "James Bond",
    src: "/James.jpg",
    profile: "https://links.papareact.com/r57",
  },
];

function Stories() {
  return (
    <div className=" h-[145px]  md:h-[129px] grid  grid-cols-5 lg:h-[208px] lg:grid-cols-6 overflow-y-hidden overflow-x-hidden  justify-center space-x-3 mx-auto transform transition-all duration-200 ">
      <StoryPics />
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
