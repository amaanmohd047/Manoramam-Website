"use server";

import { revalidatePath } from "next/cache";

import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateProfileAction(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to update your profile");
  const id = session.user.guestId;

  const nationalID = formData.get("nationalID");
  const nationality = formData.get("nationality");
  const contactNo = formData.get("contact");

  if (!/^[a-zA-Z0-9]{6,16}$/.test(nationalID))
    throw new Error("Invalid National ID. Please try again");

  const updateData = { nationalID, nationality, contactNo };
  console.log(updateData);

  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", id);

  if (error) {
    throw new Error("Profile could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function deleteReservationAction(bookingId) {
  const session = await auth();
  if (!session)
    throw new Error("You must be logged in to delete a reservation");

  const guestBookings = await getBookings(session.user.guestId);
  const guestbookingIds = guestBookings.map((book) => book.id);
  if (!guestbookingIds.includes(bookingId))
    throw new Error("You are not allowed to delete this reservation");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);
  if (error) {
    throw new Error("Reservation could not be deleted");
  }
  revalidatePath("/account/reservations");
}

export async function updateReservationAction(formData) {
  const session = await auth();
  if (!session)
    throw new Error("You must be logged in to update a reservation");

  const bookingId = Number(formData.get("bookingId"));

  const guestBookings = await getBookings(session.user.guestId);
  const guestbookingIds = guestBookings.map((book) => book.id);

  if (!guestbookingIds.includes(bookingId))
    throw new Error("You are not allowed to delete this reservation");

  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");

  console.log(bookingId);
  const updateData = { numGuests: Number(numGuests), observations };

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId);

  if (error) {
    throw new Error("Reservation could not be updated");
  }
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${id}`);
  redirect("/account/reservations");
}

export async function createBookingAction(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to create a booking");
  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations").slice(0, 1000);

  const newBooking = {
    observations,
    numGuests: Number(numGuests),
    ...bookingData,
    guestId: session.user.guestId,
  };

  console.log(newBooking);

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    throw new Error("Reservation could not be created");
  }

  revalidatePath("/account/reservations");
  revalidatePath(`/suite/${bookingData.roomId}`);
  redirect(`/suites/${bookingData.roomId}/thank-you`);
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
