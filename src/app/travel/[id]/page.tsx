import { getTourPeriodUser } from "@/app/api/tourPeriod";
import { getUser } from "@/app/api/user";
import { getAllDateBetween } from "@/lib/dateArray";
import React, { FormEvent } from "react";
import moment from "moment";
import { addTravel } from "@/app/api/travel";
import TrTableValue from "../../components/table/TrTableValue";
import SectionTableValue from "@/app/components/table/SectionTableValue";
import FormAddButton from "@/app/components/Button/FormAddButton";

interface TravelPageProps {
  params: {
    id: string;
  };
}

const TravelPage = async ({ params: { id } }: TravelPageProps) => {
  moment.locale("fr");
  const user = await getUser(id);
  const tourPeriod = await getTourPeriodUser(id);
  console.log(tourPeriod?.endDate);
  const dates =
    getAllDateBetween(tourPeriod?.startDate, tourPeriod?.endDate) || [];

  return (
    <div className="flex flex-col p-5 gap-4">
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-md uppercase font-bold">Nom du client:</h1>
        <p>{user?.name}</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-md uppercase font-bold">Proposition:</h1>
        <p></p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-md capitalize font-bold">Tour period:</h1>
        <p>
          {moment(tourPeriod?.startDate).format("DD MMMM yyyy")} à{" "}
          {moment(tourPeriod?.endDate).format("DD MMMM yyyy")}
        </p>
      </div>
      <form action={addTravel} className="flex gap-4 flex-wrap">
        <select name="itinerary" className=" select select-bordered">
          {dates.map((date, index) => (
            <option value={date} key={index}>
              {date}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="input input-bordered"
          placeholder="Préstataire"
          name="provider"
          required
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="Libellé"
          name="label"
          required
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="Prix"
          name="price"
          required
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="Base"
          name="base"
          required
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="Restaurant"
          name="resto"
        />
        <input type="text" name="idUser" value={user?.id} className="hidden" />
        <input
          type="text"
          name="idTourPeriod"
          value={tourPeriod?.id}
          className="hidden"
        />
        <FormAddButton>Ajouter</FormAddButton>
      </form>
      <div className="overflow-x-auto mt-4">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <td>Itinéraire</td>
              <td>Préstataire</td>
              <td>Libellé</td>
              <td>Prix</td>
              <td>Base</td>
              <td>Resto</td>
              <td>Ariary/pax</td>
              <td>Cours</td>
              <td>Euro/pax</td>
            </tr>
          </thead>
          <tbody>
            {dates.map((date, index) => (
              <>
                <SectionTableValue
                  key={index}
                  date={date}
                  idUser={user?.id || 0}
                >
                  <TrTableValue idUser={user?.id || 0} itinerary={date} />
                </SectionTableValue>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TravelPage;
