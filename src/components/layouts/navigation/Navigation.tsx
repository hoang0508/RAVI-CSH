import {
  IconBookRoom,
  IconContract,
  IconHome,
  IconProfile,
} from "@/components/icons";
import { INavigation } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavigationDataLink: INavigation[] = [
  {
    id: 1,
    title: "Trang chủ",
    icon: <IconHome />,
    path: "/home",
  },
  {
    id: 2,
    title: "Hợp đồng",
    icon: <IconContract />,
    path: "/contract",
  },
  {
    id: 3,
    title: "Đặt phòng",
    icon: <IconBookRoom />,
    path: "/booking",
  },
  {
    id: 4,
    title: "Hồ sơ",
    icon: <IconProfile />,
    path: "/profile",
  },
];

const Navigation = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex justify-around items-center mb-6">
        {NavigationDataLink.map((link) => (
          <Link
            href={link.path}
            className={`flex flex-col items-center gap-y-2  ${
              router.pathname == link.path
                ? "text-ravi-text-primary"
                : "text-ravi-text-4F4539"
            }`}
            key={link.id}
          >
            <span className="flex-shrink-0">{link.icon}</span>
            <span className="flex-1 text-xs font-medium">{link.title}</span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center max-w-[140px] h-[5px] mx-auto rounded-full bg-ravi-text-black25"></div>
    </>
  );
};

export default Navigation;
