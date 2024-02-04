import { getAllTravelByIdUser } from "@/app/api/travel";
import React from "react";

const SectionTableValue = async ({ children, date, idUser }: any) => {
  const allTravel = await getAllTravelByIdUser(idUser);
  const number =
    allTravel?.filter(
      (travel) => travel.itinerary === date && travel.userId == parseInt(idUser)
    ).length || 0;
  return (
    <>
      <tr>
        <td className="min-w-24" rowSpan={number == 0 ? 2 : number + 1}>
          {date}
        </td>
      </tr>
      {children}
    </>
  );
};

export default SectionTableValue;
