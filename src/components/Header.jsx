import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddClass from "./AddClass";

export const Header = () => {
  return (
    <header className="fixed top-0 bg-white border-b border-slate-200 w-full">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center h-header">
            <Link
              href="/"
              className="font-medium flex gap-x-3 text-slate-500 hover:text-roomgreen ml-2 text-xl"
            >
              <Image
                src={
                  "https://raw.githubusercontent.com/techiesakar/classroom-frontend/a5c776f26aebc2f430e74a43139940541f4e5b57/public/logo.svg"
                }
                width={26}
                height={26}
                alt="logo"
              />
              Google Sala de Aula
            </Link>
          </div>

          <div className="ml-auto">
            <AddClass />
          </div>
        </div>
      </div>
    </header>
  );
};
