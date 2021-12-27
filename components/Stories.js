import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Dimo Dimov",
    src: "/dimo.jpg",
    profile: "/dimo.jpg",
  },
  {
    name: "Dimo Dimov",
    src: "/dimo.jpg",
    profile: "/dimo.jpg",
  },
  {
    name: "Dimo Dimov",
    src: "/dimo.jpg",
    profile: "/dimo.jpg",
  },
  {
    name: "Dimo Dimov",
    src: "/dimo.jpg",
    profile: "/dimo.jpg",
  },
  {
    name: "Dimo Dimov",
    src: "/dimo.jpg",
    profile: "/dimo.jpg",
  },
  {
    name: "Dimo Dimov",
    src: "/dimo.jpg",
    profile: "/dimo.jpg",
  },
];

function Stories() {
  return (
    <div className="h-[145px] md:h-[129px] grid  grid-cols-5 lg:h-[224px] lg:grid-cols-6 overflow-y-hidden overflow-x-hidden  justify-center space-x-3 mx-auto transform transition-all duration-200 ">
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
