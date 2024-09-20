import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="w-[19rem] bg-primary-white sticky left-0 top-0 flex h-screen flex-col justify-between border-r border-gray-200 pt-10 pl-10 text-white max-md:hidden sm:p-6 xl:p-10 2xl:w-[355px]">
      {/* w-fit */}
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 cursor-pointer items-center gap-3">
          <Image
            src="/icons/tennis-logo.svg"
            width={34}
            height={34}
            alt="Tennis"
            className="size-[30px] max-xl:size-[25px]"
          />
          <h1 className="text-[25px] max-xl:text-[20px] font-semibold text-secondary-dark-text">
            Tennis
          </h1>
        </Link>
      </nav>
      <h1>Teste</h1>
    </div>
  );
};
