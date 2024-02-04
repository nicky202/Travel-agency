import prisma from "@/lib/db/prisma";

export const getTourPeriodUser = async (idUser: string) => {
  try {
    const result = await prisma.tourPeriod.findFirst({
      where: {
        userId: parseInt(idUser),
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
