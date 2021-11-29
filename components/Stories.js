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
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
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
