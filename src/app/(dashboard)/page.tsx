import { PageHeader } from "../../components/page-header";
import { ProfileCard } from "../../components/profile-card";
import { NextMatchCard } from "@/components/next-match-card";

export default function DashboardPage() {
  return (
    <div className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <header>
          <PageHeader />
        </header>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <NextMatchCard />
          </div>

          <div className="">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}
