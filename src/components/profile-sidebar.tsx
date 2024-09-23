import Image from "next/image";

export const ProfileSidebar = () => {
  return (
    <div className="flex flex-col w-[400px] h-[505px] rounded-[30px] bg-primary-white">
      <div className="flex flex-col relative">
        <Image
          src="/assets/profile-sidebar-wave.svg"
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
              src="/icons/profile-flag.svg"
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

      <Image
        src="/assets/human-player.svg"
        alt="Players"
        width={277}
        height={456}
        className="flex absolute right-0 mr-8"
      />
    </div>
  );
};
