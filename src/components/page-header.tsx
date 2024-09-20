"use client";

import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const PageHeader = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-1">
      {sidebarLinks.map((item) => {
        const isActualPage = pathname === item.route;

        return (
          isActualPage && (
            <div className="flex items-center justify-center gap-4">
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
          )
        );
      })}
    </div>
  );
};
