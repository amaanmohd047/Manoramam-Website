"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import { deleteReservationAction } from "../_lib/actions";
import SpinnerMini from "./SpinnerMini";

import ConfirmActionModal from "./ConfirmActionModal";

function DeleteReservation({ bookingId }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => deleteReservationAction(bookingId));
  };

  return (
    <ConfirmActionModal
      handleAction={handleClick}
      resourceTitle="Delete Reservation"
      resourceDescription={"Are you sure you want to delete this reservation?"}
      className="group flex-grow flex items-stretch text-primary-700  transition-colors hover:bg-accent-600 hover:text-primary-100"
    >
      <button
        disabled={isPending}
        className="flex items-center gap-2 uppercase text-xs font-bold px-3 w-full"
      >
        {!isPending ? (
          <>
            <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-200 transition-colors" />
            <span className="mt-1">Delete</span>
          </>
        ) : (
          <span className="mx-auto">
            <SpinnerMini />
          </span>
        )}
      </button>
    </ConfirmActionModal>
  );
}

export default DeleteReservation;
