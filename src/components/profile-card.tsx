import Image from "next/image";
import Link from "next/link";

export const ProfileCard = () => {
  return (
    <div className="flex flex-col sticky w-[400px] h-[537px] rounded-[30px] bg-primary-white max-2xl:hidden">
      <div className="flex flex-col relative">
        <Image
          src="/assets/profile-card-wave.svg"
          alt="Wave"
          width={400}
          height={200}
          className="rounded-[30px]"
        />
        <div className="flex flex-col absolute px-6 pt-10 gap-[10px]">
          <h1 className="text-2xl text-primary-white font-bold text-start w-[50%]">
            Pedro Galembeck
          </h1>
          <div className="flex items-center gap-[10px]">
            <Image
              src="/icons/flags/indonesia.svg"
              alt="Flag"
              width={24}
              height={24}
            />
            <p className="font-semibold text-sm text-primary-white">
              Indonesia
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5 px-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-base">Biography</h1>
          <Image
            src="/assets/profile-avatar.svg"
            alt="Profile"
            width={50}
            height={60}
          />
        </div>

        <div className="flex flex-col gap-[10px] mt-[17px] text-sm font-medium">
          <p>
            <span className="font-semibold">Age: </span>27
          </p>
          <p>
            <span className="font-semibold">Birth: </span>06 - 07 - 2006
          </p>
          <p>
            <span className="font-semibold">Sex: </span>Men
          </p>
          <p>
            <span className="font-semibold">WTA: </span>10
          </p>
        </div>

        <div className="flex flex-col mt-7">
          <p className="font-semibold text-base">Social Media</p>
          <div className="flex mt-[10px]">
            <Link href="/">
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={25}
                height={25}
              />
            </Link>
            <Link href="/">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/assets/human-player.svg"
        alt="Players"
        width={307}
        height={486}
        className="flex absolute right-0"
      />
    </div>
  );
};
