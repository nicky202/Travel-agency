"use server";
import moment from "moment";

import { prisma } from "@/lib/db/prisma";
import { getTourPeriodUser } from "./tourPeriod";
import { redirect } from "next/navigation";

export async function addUser(formData: FormData) {
  const name = formData.get("namePax")?.toString();
  const phone = Number(formData.get("phone")) || 0;
  const startDate =
    new Date(formData.get("startDate")?.toString() || "") || new Date();
  const endDate =
    new Date(formData.get("endDate")?.toString() || "") || new Date();
  const newUser = await prisma.user.create({
    data: { name, phone },
  });
  await prisma.tourPeriod.create({
    data: { startDate, endDate, userId: newUser.id },
  });
  redirect("/add-travel");
}

export async function getAllUser() {
  try {
    const result = await prisma.user.findMany({
      orderBy: { id: "desc" },
      include: { tourPeriod: true },
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(id: any) {
  try {
    const result = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}
