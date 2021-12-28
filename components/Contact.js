import Image from "next/image";
function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-4 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={40}
        height={40}
        layout="fixed"
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-5 bg-green-400 h-3 w-3 rounded-full animate-bounce"></div>
    </div>
  );
}

export default Contact;
