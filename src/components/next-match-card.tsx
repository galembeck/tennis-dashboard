import { Calendar } from "lucide-react";
import Image from "next/image";

export const NextMatchCard = () => {
  return (
    <div className="2xl:w-[750px] 2xl:h-[200px] rounded-[30px] bg-primary-white p-5">
      <div className="flex justify-between max-sm:gap-[78px]">
        <h1 className="text-lg font-bold text-primary-dark-gray">
          Your Next Match
        </h1>
        <p className="flex text-xs text-secondary-light-white items-center gap-2">
          18 January 2020
          <Calendar width={15} height={15} />
        </p>
      </div>

      <div className="flex items-center px-[53px] mt-5 gap-11 max-sm:flex-col">
        <div>
          <h1 className="text-2xl font-bold">Naomi O.</h1>
          <p className="text-xs font-light text-secondary-light-white">Japan</p>
        </div>
        <Image
          src="/assets/player-avatar.svg"
          alt="Avatar"
          width={85}
          height={100}
        />

        <p className="text-4xl font-extrabold text-primary-blue">:</p>

        <Image
          src="/assets/player-avatar-2.svg"
          alt="Avatar"
          width={85}
          height={100}
        />
        <div>
          <h1 className="text-2xl font-bold">Pedro G.</h1>
          <p className="text-xs font-light text-secondary-light-white">
            Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};
