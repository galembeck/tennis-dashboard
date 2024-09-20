"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-fit bg-primary-white sticky left-0 top-0 flex h-screen flex-col justify-between border-r border-gray-200 text-white max-md:hidden 2xl:w-[355px]">
      {/* w-[19rem] w-fit */}
      <nav className="flex flex-col gap-3 pt-10 pl-10 sm:p-6 xl:p-10">
        <Link href="/" className="flex mb-5 cursor-pointer items-center gap-3">
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
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          const isLiveGames = item.label === "Live Games";

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-3 items-center py-1 md:py-3 2xl:py-4 justify-center xl:justify-start",
                isActive &&
                  "-mr-10 border-r-4 border-primary-blue max-xl:border-none max-xl:mr-0"
              )}
            >
              <div className="relative size-6">
                {isActive ? (
                  <Image src={item.activeImgURL} alt={item.label} fill />
                ) : (
                  <Image src={item.imgURL} alt={item.label} fill />
                )}
              </div>
              <div
                className={cn(
                  "text-sm font-normal text-secondary-light-text max-xl:hidden",
                  { "text-primary-blue": isActive }
                )}
              >
                {item.label}
                {isLiveGames && (
                  <Badge
                    variant="destructive"
                    className="ml-2 rounded-md font-medium pointer-events-none"
                  >
                    LIVE
                  </Badge>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
      <div className="flex-col px-6 mb-6 hidden xl:block">
        <div className="flex flex-col items-center w-64 h-72 bg-primary-gray rounded-[30px] relative">
          <Image
            src="/assets/pro-feature-lock.svg"
            alt="Pro Features"
            width={215}
            height={215}
            className="absolute top-[-55px]"
          />
          <p className="absolute bottom-[80px] text-center px-12 text-secondary-dark-text">
            Upgrade to{" "}
            <span className="text-secondary-blue-text font-bold">PRO</span> for
            more features
          </p>
          <Button className="w-[230px] h-[54px] rounded-2xl bg-primary-blue font-medium hover:bg-primary-blue/90 transition text-primary-white absolute bottom-[10px]">
            Upgrade
          </Button>
        </div>
      </div>
    </div>
  );
};
