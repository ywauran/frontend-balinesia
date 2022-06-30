/* eslint-disable prettier/prettier */
import axios from "axios";
import React, { useEffect, Fragment, useState } from "react";
import Cards from "./Cards";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const Location = [
  { name: "Lokasi", value: "" },
  { name: "Karangasem", value: "Karangasem" },
  { name: "Bangli", value: "Bangli" },
  { name: "Gianyar", value: "Gianyar" },
  { name: "Buleleng", value: "Buleleng" },
  { name: "Klungkung", value: "Klungkung" },
  { name: "Badung", value: "Badung" },
  { name: "Tabananan", value: "Tabananan" },
  { name: "Jembrana", value: "Jembrana" },
  { name: "Denpasar", value: "Denpasar" },
];

const Rating = [
  { rate: "Rating", value: 0.0 },
  { rate: "⭐5", value: 5.0 },
  { rate: "⭐4", value: 4.0 },
  { rate: "⭐3", value: 3.0 },
  { rate: "⭐2", value: 2.0 },
  { rate: "⭐1", value: 1.0 },
];
const HargaMinimum = [
  { price: "Minimum" },
  { price: 100000 },
  { price: 50000 },
  { price: 25000 },
  { price: 0 },
];
const HargaMaksimum = [
  { price: "Maksimum" },
  { price: 100000 },
  { price: 50000 },
  { price: 25000 },
  { price: 0 },
];

const Pencarian = () => {
  const [selected, setSelected] = useState(Location[0]);
  const [selectedrate, setSelectedRate] = useState(Rating[0]);
  const [selectedMinimum, setSelectedMinimum] = useState(HargaMinimum[0]);
  const [selectedMaksimum, setSelectedMaksimum] = useState(HargaMaksimum[0]);
  const [wisata, setWisata] = useState([]);

  const getWisata = async () => {
    const response = await axios.get("https://backend-balinesia.herokuapp.com/api/destinations");
    const resData = response.data.data;

    const resFilter = resData.filter((res) => { return (selected.value != "" ? selected.value == res.lokasi : true) })
      .filter((res) => { return (selectedrate.value != "" ? res.rating >= selectedrate.value && res.rating < selectedrate.value + 1 : true) })
      .filter((res) => { return (selectedMinimum.price != "Minimum" ? res.harga >= selectedMinimum.price : true) })
      .filter((res) => { return (selectedMaksimum.price != "Maksimum" ? res.harga <= selectedMaksimum.price : true) });
    setWisata(resFilter);
  };

  useEffect(() => {
    getWisata()
  }, [])

  return (
    <section id="Pencarian">
      <div className="w-full min-h-[91vh] h-full relative bg-theme3">
        <div className="relative px-8 py-32 md:max-w-none text-center text-theme1">
          <h1 className="font-black text-3xl">Pencarian Destinasi Wisata di</h1>
          <h1 className="font-black text-3xl">Provinsi Bali</h1>
          <div className="flex flex-wrap items-center justify-center mt-5">
            <div className="inline-flex flex-col lg:flex-row text-left mb-4 md:mb-2">
              {/* Dropdown Location Start */}
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1 mx-5">
                  <Listbox.Button className="relative w-full h-auto cursor-default rounded-lg bg-white py-2 p-20 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate text-theme3">
                      {selected.name}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {Location.map((location, locationId) => (
                        <Listbox.Option
                          key={locationId}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                            }`
                          }
                          value={location}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-medium" : "font-normal"
                                  }`}
                              >
                                {location.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              {/* Dropdown Location Start */}
              <Listbox value={selectedrate} onChange={setSelectedRate}>
                <div className="relative mt-1 mx-5">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 p-20 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate text-theme3">
                      {selectedrate.rate}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {Rating.map((rates, ratesId) => (
                        <Listbox.Option
                          key={ratesId}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                            }`
                          }
                          value={rates}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-medium" : "font-normal"
                                  }`}
                              >
                                {rates.rate}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              {/* Dropdown Location Start */}
              <Listbox value={selectedMinimum} onChange={setSelectedMinimum}>
                <div className="relative mt-1 mx-5">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 p-20 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate text-theme3">
                      {selectedMinimum.price}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {HargaMinimum.map((prices, priceId) => (
                        <Listbox.Option
                          key={priceId}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                            }`
                          }
                          value={prices}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-medium" : "font-normal"
                                  }`}
                              >
                                {prices.price}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              {/* Dropdown Location Start */}
              <Listbox value={selectedMaksimum} onChange={setSelectedMaksimum}>
                <div className="relative mt-1 mx-5">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 p-20 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate text-theme3">
                      {selectedMaksimum.price}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {HargaMaksimum.map((prices, priceId) => (
                        <Listbox.Option
                          key={priceId}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                            }`
                          }
                          value={prices}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-medium" : "font-normal"
                                  }`}
                              >
                                {prices.price}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <button onClick={getWisata} className="inline-flex items-center px-5 py-2 mx-4 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-3xl max-h-10 max-w-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <a>Cari Destinasi</a>
            </button>
          </div>
          <div className="relative z-0 mt-12 gap-8 flex-wrap flex justify-center items-center">
            {wisata.map((value, index) => {
              return (
                <section
                  style={{ backgroundImage: `url('${value.picture_url}')` }}
                  className="card-container"
                  key={index}
                >
                  <Cards item={value} />
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pencarian;
