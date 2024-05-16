"use client";
import { ReactElement } from "react";
import { cn } from "@/lib";

export const ItemWithIcon = ({
  iconClassName,
  icon,
  title,
  description,
}: Readonly<{
  iconClassName?: string;
  title: string;
  description: string;
  icon: ReactElement;
}>) => {
  return (
    <div className="flex items-start gap-4">
      <span className={cn("shrink-0 rounded-lg p-4 text-white", iconClassName)}>
        {icon}
      </span>

      <div>
        <h2 className="text-xl font-bold">{title}</h2>

        <p className="mt-1 text-lg text-gray-300">{description}</p>
      </div>
    </div>
  );
};
