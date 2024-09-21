"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

export const PageHeader = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center">
        {sidebarLinks
          .filter((item) => pathname === item.route)
          .map((item) => (
            <div
              key={item.route}
              className="flex items-center justify-center gap-4"
            >
              <Link href="/">
                <Image
                  src="/icons/arrow-left.svg"
                  alt="Arrow Right"
                  width={30}
                  height={30}
                />
              </Link>
              <h1 className="text-2xl lg:text-3xl font-semibold text-secondary-page-header">
                {item.label}
              </h1>
            </div>
          ))}
      </div>

      <div className="flex items-center gap-5 cursor-pointer">
        <Image src="/icons/search.svg" alt="Search" width={24} height={24} />
        <Image
          src="/icons/settings.svg"
          alt="Settings"
          width={24}
          height={24}
        />
        <Image
          src="/icons/notification.svg"
          alt="Notification"
          width={24}
          height={24}
        />
        <Image
          src="/assets/profile-picture.svg"
          alt="Profile Picture"
          width={30}
          height={30}
        />
      </div>
    </header>
  );
};
