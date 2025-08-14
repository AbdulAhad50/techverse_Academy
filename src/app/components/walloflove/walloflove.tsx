import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";

const testimonials = [
  {
    name: "Esther Howard",
    username: "@totallyrealperson",
    text: "Pharetra pharetra massa massa ultricies. Accumsan sit amet nulla facilisi morbi. Integer eget aliquet nibh praesent tristique magna sit amet.",
    time: "12:15 PM - May 19, 2009",
    avatar: "/avatars/a1.jpg",
  },
  {
    name: "Leslie Alexander",
    username: "@totallyrealperson",
    text: "Magna fermentum iaculis eu non diam phasellus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.",
    time: "12:15 PM - May 19, 2009",
    avatar: "/avatars/a2.jpg",
  },
  {
    name: "Wade Warren",
    username: "@totallyrealperson",
    text: "Porttitor rhoncus dolor purus non. Varius duis at consectetur lorem donec. Aliquam ut porttitor leo a diam sollicitudin tempor id.",
    time: "12:15 PM - May 19, 2009",
    avatar: "/avatars/a3.jpg",
  },
  {
    name: "Jacob Jones",
    username: "@totallyrealperson",
    text: "Aliquam faucibus purus in massa tempor. Habitant platea dictumst vestibulum rhoncus est pellentesque elit.",
    time: "12:15 PM - May 19, 2009",
    avatar: "/avatars/a4.jpg",
  },
  {
    name: "Courtney Henry",
    username: "@totallyrealperson",
    text: "Nunc sed velit dignissim sodales ut eu sem integer. Scelerisque varius morbi enim nunc faucibus. Mi sit amet mauris commodo quis.",
    time: "12:15 PM - May 19, 2009",
    avatar: "/avatars/a5.jpg",
  },
  {
    name: "Darrell Steward",
    username: "@totallyrealperson",
    text: "Donec et scelerisque quam. Aliquam varius et sapien a pharetra. Maecenas auctor, augue finibus rhoncus, orci lorem ultricies eli.",
    time: "12:15 PM - May 19, 2009",
    avatar: "/avatars/a6.jpg",
  },
];

const WallOfLove = () => {
  return (
    <section className="bg-gradient-to-br from-[#270f71] to-[#270f71] py-16 px-6 md:px-20">
      <h2 className="text-center text-4xl md:text-6xl font-extrabold text-white/40 mb-12">
        Wall of love
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-5 flex flex-col justify-between shadow-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold">{t.name}</h3>
                  <p className="text-white/70 text-sm">{t.username}</p>
                </div>
              </div>
              <FaTwitter className="text-white text-lg" />
            </div>

            {/* Text */}
            <p className="text-white mt-4 text-sm md:text-base">{t.text}</p>

            {/* Footer */}
            <span className="text-white/60 text-xs mt-4">{t.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WallOfLove;
