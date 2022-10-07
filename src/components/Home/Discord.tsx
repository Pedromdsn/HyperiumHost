import Link from "next/link";

import { FaDiscord } from "react-icons/fa";

const Discord = () => {
  return (
    <Link href="https://discord.gg/rcKAWjbk" passHref>
      <div
        className="fixed bottom-7 left-7 flex h-14 w-14 transform cursor-pointer items-center justify-center
			 rounded-full bg-[#7289DA] transition-all duration-300 hover:h-16 hover:w-16 hover:rotate-12"
      >
        <FaDiscord size="35px" />
      </div>
    </Link>
  );
};

export default Discord;
