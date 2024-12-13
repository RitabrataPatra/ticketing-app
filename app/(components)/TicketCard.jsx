import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const TicketCard = ({ ticket }) => {
  const date = ticket.createdAt;
  const currentDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const currentTime = new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className="flex flex-col bg-slate-700 hover:bg-slate-600  d-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>

      {/* for updating the card right click on it */}
      <ContextMenu>
        <ContextMenuTrigger>
          <h4>{ticket.title}</h4>
          <hr className="h-px border-0 bg-page mb-2 " />
          <p className="whitspace-pre-wrap">{ticket.description}</p>

          <div className="flex-grow">
            <div className="flex mt-2 ">
              <div className="flex flex-col">
                <p className="text-xs my-1">
                  {currentDate} at {currentTime}
                </p>
                <ProgressBar progress={ticket.progress} />
              </div>
              <div className="ml-auto flex items-end">
                <StatusDisplay status={ticket.status} />
              </div>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64 backdrop-blur-xl bg-transparent border border-slate-800">
          <Link href={`${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://ticketing-app-fawn.vercel.app/'}/ticketing/${ticket._id}`}>
            <ContextMenuItem inset className="text-white hover:cursor-pointer ">
              Update
            </ContextMenuItem>
          </Link>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};
