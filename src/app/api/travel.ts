"use server";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
export async function addTravel(formData: FormData) {
  const itinerary = String(formData.get("itinerary")) || "";
  const provider = formData.get("provider")?.toString() || "";
  const label = formData.get("label")?.toString() || "";
  const price = Number(formData.get("price")) || 0;
  const base = Number(formData.get("base")) || 0;
  const restaurant = Number(formData.get("resto")) || 0;
  const ariaryPax = (price + restaurant) / base;
  const course = 4900;
  const euroPax = ariaryPax / course;
  const userId = Number(formData.get("idUser"));
  const tourPeriodId = Number(formData.get("idTourPeriod"));
  console.log(itinerary);
  try {
    await prisma.travel.create({
      data: {
        itinerary,
        provider,
        label,
        price,
        base,
        restaurant,
        ariaryPax,
        course,
        euroPax,
        userId,
        tourPeriodId,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAllTravelByIdUser(idUser: number) {
  try {
    const result = await prisma.travel.findMany({
      where: { userId: idUser },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
  redirect("");
}
