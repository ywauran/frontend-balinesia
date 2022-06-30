/* eslint-disable prettier/prettier */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";

const Destination = () => {
  const { id } = useParams();
  const [wisata, setWisata] = useState([]);
  const getWisataDestination = async () => {
    const response = await axios.get(
      "https://backend-balinesia.herokuapp.com/api/destinations/" + id,
      { params: { id } }
    );
    const resData = response.data.data;
    setWisata(resData);
    console.log(resData);
    console.log(id)
  };

  useEffect(() => {
    getWisataDestination();
  }, [id]);

  return (
    <>
      <section id="Destinasi">
        <div className="w-full min-h-[91vh] h-full bg-theme3">
          <div className="relative px-10 py-32 pb-60 md:px-[7.5rem] lg:px-52 sm:px-20 mx-auto my-auto md:max-w-none">
          <Button></Button>
            {wisata.map((value,index) => {
              return (
                <div key={index}
                  className="h-full bg-opacity-30 bg-center overflow-hidden  rounded-lg bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url('${value.picture_url}')` }}
                >
                  <div className="min-h-full backdrop-blur-xl backdrop-brightness-50 p-4">
                    <div>
                      <img
                        className="w-full h-40 md:h-80 object-cover rounded-xl"
                        src={value.picture_url}
                        alt=""
                      />
                    </div>
                    <div className=" text-theme1 mt-4">
                      <h1 className="text-center font-bold text-xl">{value.nama}</h1>
                      <p className="text-justify text-base mt-4">{value.deskripsi}</p>
                    </div>
                    <div className="container bg-gradient-to-l from-fuchsia-100 via-purple-200 to-pink-300 w-full h-full rounded-xl p-4 flex flex-wrap gap-10 items-center justify-center mx-auto max-w-3xl mt-7">
                      <div className="content-container max-w-sm">
                        <h2 className="font-semibold text-sm">Lokasi</h2>
                        <div className="bg-theme1 p-3 w-52 rounded flex items-center justify-between">
                          <p className="">{value.lokasi}</p>
                          <svg className="svg-icon w-6" viewBox="0 0 20 20">
                            <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="content-container max-w-sm">
                        <h2 className="font-semibold text-sm">Harga</h2>
                        <div className="bg-theme1 p-3 w-52 rounded flex items-center justify-between">
                          <p className="">{"RP. " + value.harga}</p>
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M2 9.453v-9.453h9.352l10.648 10.625-3.794 3.794 1.849 4.733-12.34 4.848-5.715-14.547zm1.761 1.748l4.519 11.503 10.48-4.118-1.326-3.395-4.809 4.809-8.864-8.799zm-.761-10.201v8.036l9.622 9.552 7.963-7.962-9.647-9.626h-7.938zm12.25 8.293c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.803-.682.411-1.118.585-1.456.585-.361 0-1.083-.409-.961-1.219.052-.345.25-.696.572-1.019.652-.652 1.544-.848 2.276-.107l.744-.744c-.476-.475-1.096-.792-1.761-.792-.566 0-1.125.228-1.663.677l-.626-.626-.698.699.653.652c-.569.826-.842 2.021.076 2.937 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589.001 1.18.498 1.078 1.258-.052.386-.26.764-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.25-7.292c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
                          </svg>
                        </div>
                      </div>
                      <div className="content-container max-w-sm">
                        <h2 className="font-semibold text-sm">Rating</h2>
                        <div className="bg-theme1 p-3 w-52 rounded flex items-center justify-between">
                          <p className="">{value.rating}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
