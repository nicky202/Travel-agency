import { getAllTravelByIdUser } from "@/app/api/travel";
import React from "react";

interface TrTableValueProps {
  idUser: number;
  itinerary: string;
}

const TrTableValue = async ({ idUser, itinerary }: TrTableValueProps) => {
  const allTravel = await getAllTravelByIdUser(idUser);
  const travelByItinerary = allTravel?.filter(
    (travel) => travel.itinerary === itinerary
  );

  return (
    <>
      {travelByItinerary &&
        (travelByItinerary.length != 0 ? (
          travelByItinerary.map((travel, index) => (
            <tr key={index}>
              <td>{travel.provider}</td>
              <td>{travel.label}</td>
              <td>{travel.price}</td>
              <td>{travel.base}</td>
              <td>{travel.restaurant}</td>
              <td>{travel.ariaryPax}</td>
              <td>{travel.course}</td>
              <td>{travel.euroPax}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
    </>
  );
};

export default TrTableValue;
