import { Home, TicketsIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Nav = () => {
  // const _id = params.id
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4 justify-center">
        {/* Home nav element */}
        <TooltipProvider> 
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/" className="hover:text-blue-accent">
                <Home />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* Tickets nav element */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={`/ticketing/new`} className="hover:text-blue-accent">
                <TicketsIcon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create a ticket</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div>
        <p className="text-default-text">dummy@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
