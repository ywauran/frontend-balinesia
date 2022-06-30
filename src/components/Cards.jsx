/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <>
        <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
          <img
            className="w-full h-40 object-cover rounded-xl"
            src={props.item.picture_url}
            alt={props.item.nama}
          />
          <div className="p-2">
            <Link to={'/details/' + props.item.id}>     
            <h2 className="font-bold text-lg mb-2 text-theme1 h-12 overflow-hidden flex justify-center items-center">{props.item.nama}</h2>
            </Link>
            <p className="text-sm text-gray-100 ">{props.item.deskripsi.substring(0,60) +"..."}
            </p>
            <h3 className="text-center font-semibold text-theme1 mt-5">
              {props.item.lokasi}
            </h3>
            <h3 className="text-center font-semibold text-theme1 mt-3">
              {'Rp.' + props.item.harga}
            </h3>
          </div>
        </div>
    </>
  );
};

export default Cards;
