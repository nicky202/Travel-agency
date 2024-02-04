import React, { useEffect, useState } from "react";

import { addUser, getAllUser } from "../api/user";
import Link from "next/link";

const AddTravelPage = async () => {
  const listUser = (await getAllUser()) || [];

  // const listUser = (await getAllUser()) || [];
  console.log(listUser);

  return (
    <div className="max-w-7xl m-auto flex items-center my-4 flex-col">
      <form action={addUser} className="m-auto flex flex-col gap-2 px-2">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Nom du passager</span>
          </div>
          <input
            type="text"
            placeholder="Nom du passager"
            name="namePax"
            className="input input-bordered w-full focus:outline-none"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Nom du passager</span>
          </div>
          <input
            type="text"
            placeholder="N° Tel"
            name="phone"
            className="input input-bordered w-full focus:outline-none"
          />
        </label>
        <div className="flex gap-4">
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Date de début</span>
            </div>
            <input
              type="date"
              className="input input-bordered w-full max-w-xs focus:outline-none"
              name="startDate"
            />
          </label>
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Date de fin</span>
            </div>
            <input
              type="date"
              className="input input-bordered w-full max-w-xs focus:outline-none"
              name="endDate"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary text-white ">
          Ajouter
        </button>
      </form>
      <div className="divider my-4"></div>
      <div className="overflow-x-auto mt-4 min-w-96">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <td>Tour Period</td>
              <td>Nom & numéro de téléphone</td>
            </tr>
          </thead>
          <tbody>
            {listUser.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.tourPeriod[0].startDate.toLocaleDateString()} -{" "}
                  {item.tourPeriod[0].endDate.toLocaleDateString()}
                </td>
                <td>
                  <Link href={"/travel/" + item.id}>
                    {item.name} <br /> <span className="font-bold">Tel: </span>
                    {item.phone}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Tour Period</td>
              <td>Nom & numéro de téléphone</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AddTravelPage;
