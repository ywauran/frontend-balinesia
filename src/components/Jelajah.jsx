/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";

function importAll(r) {
  let images = {};
  // eslint-disable-next-line no-unused-vars
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const item = ['Karangasem','Bangli','Gianyar','Buleleng','Klungkung','Badung','Tabanan','Jembrana','Denpasar']

const Jelajah = () => {

  return (
    <section id="Jelajah">
      <div className="w-full min-h-[91vh] h-full bg-theme3">
        <div className="relative px-4 py-32 text-left md:max-w-none md:text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-theme1 text-center sm:leading-none md:text-6xl lg:text-5xl">
            Mari Berjelajah!
          </h1>
          <div className="mx-auto mt-1 text-theme1 md:mt-3 md:max-w-lg text-center lg:text-lg">
            Jelajahi Destinasi Wisata Yang Ada Di Bali
          </div>
          <div className="mt-12 gap-10 grid grid-cols-1 grid-rows-1 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 justify-items-center w-fit mx-auto">
            {/* Cards And Background child Start */}
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${images['karangasem.png']}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="w-full h-40 object-scale-down rounded-xl"
                  src={images['karangasem.png']}
                  alt=""
                />
                <div className="p-2">
                <Link to={'/jelajah/location/' + item[0]}> 
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Karangasem
                  </h2>
                  </Link>
                  <p className="text-sm text-gray-100 text-justify">
                  Adalah sebuah kabupaten yang terletak di provinsi Bali, Indonesia. Ibu kotanya berada di kota Amlapura. Memiliki dua Pelabuhan yakni Padang Bai dan Tanah Ampo. Di kabupaten ini terletak pura terbesar di Bali, yaitu Pura Besakih. Penduduk Karangasem berjumlah 416.600 jiwa pada tahun 2019
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${images['bangli.png']}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="w-full h-40 object-scale-down rounded-xl"
                  src={images['bangli.png']}
                  alt=""
                />
                <div className="p-2">
                <Link to={'/jelajah/location/' + item[1]}> 
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Bangli
                  </h2>
                  </Link>
                  <p className="text-sm text-gray-100 text-justify">
                  Bangli adalah sebuah kabupaten yang terletak di provinsi Bali, Indonesia. Kabupaten Bangli adalah satu-satunya kabupaten di provinsi Bali yang tidak memiliki wilayah laut atau berbatasan dengan laut, sehingga Bangli tidak memiliki pantai di tepi laut.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${images['gianyar.png']}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="w-full h-40 object-scale-down rounded-xl"
                  src={images['gianyar.png']}
                  alt=""
                />
                <div className="p-2">
                <Link to={'/jelajah/location/' + item[2]}> 
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Gianyar
                  </h2>
                  </Link>
                  <p className="text-sm text-gray-100 text-justify">
                  Gianyar adalah sebuah kabupaten di provinsi Bali, Indonesia. Daerah ini merupakan pusat budaya ukiran di Bali. Gianyar berbatasan dengan Kota Denpasar di Barat Daya, Kabupaten Badung di Barat, Kabupaten Bangli di Utara dan Kabupaten Klungkung di Timur. Penduduk Gianyar berjumlah 519.485 jiwa pada tahun 2021.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${images['buleleng.png']}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="w-full h-40 object-scale-down rounded-xl"
                  src={images['buleleng.png']}
                  alt=""
                />
                <div className="p-2">
                <Link to={'/jelajah/location/' + item[3]}> 
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Buleleng
                  </h2>
                  </Link>
                  <p className="text-sm text-gray-100 text-justify">
                  Buleleng adalah salah satu kabupaten di provinsi Bali, Indonesia. Ibu kotanya adalah Singaraja. Buleleng berbatasan dengan Laut Jawa di sebelah utara, Selat Bali di sebelah barat, Kabupaten Karangasem di sebelah timur. Kabupaten Jembrana, Bangli, Tabanan serta Badung di sebelah selatan.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${images['klungkung.png']}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="w-full h-40 object-scale-down rounded-xl"
                  src={images['klungkung.png']}
                  alt=""
                />
                <div className="p-2">
                <Link to={'/jelajah/location/' + item[4]}> 
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Klungkung
                  </h2>
                  </Link>
                  <p className="text-sm text-gray-100 text-justify">
                  Adalah kabupaten terkecil di provinsi Bali, Indonesia. Ibu kotanya berada di Semarapura. Klungkung berbatasan dengan Kabupaten Bangli di sebelah utara, Kabupaten Karangasem di timur, Kabupaten Gianyar di barat dan dengan Samudra Hindia di sebelah selatan.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${images['badung.png']}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="w-full h-40 object-scale-down rounded-xl"
                  src={images['badung.png']}
                  alt=""
                />
                <div className="p-2">
                <Link to={'/jelajah/location/' + item[5]}> 
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Badung
                  </h2>
                  </Link>
                  <p className="text-sm text-gray-100 text-justify">
                  Adalah sebuah kabupaten yang terletak di provinsi Bali, Indonesia. Daerah ini yang juga meliputi Kuta dan Nusa Dua adalah sebuah objek wisata yang terkenal. Ibu kotanya berada di Mangupura, dahulu berada di Denpasar.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${images['tabanan.png']}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="w-full h-40 object-scale-down rounded-xl"
                  src={images['tabanan.png']}
                  alt=""
                />
                <div className="p-2">
                <Link to={'/jelajah/location/' + item[6]}> 
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Tabanan
                  </h2>
                  </Link>
                  <p className="text-sm text-gray-100 text-justify">
                  Tabanan adalah sebuah kabupaten di provinsi Bali, Indonesia, terletak sekitar 35 km di sebelah barat kota Denpasar. Tabanan berbatasan dengan Kabupaten Buleleng di sebelah utara, Kabupaten Badung di timur, Samudra Indonesia di selatan dan Kabupaten Jembrana di barat.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${images['jembrana.png']}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="w-full h-40 object-scale-down rounded-xl"
                  src={images['jembrana.png']}
                  alt=""
                />
                <div className="p-2">
                <Link to={'/jelajah/location/' + item[7]}> 
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Jembrana
                  </h2>
                  </Link>
                  <p className="text-sm text-gray-100 text-justify">
                  Jembrana adalah sebuah kabupaten yang terletak di ujung Barat pulau Bali, Indonesia. Ibu kotanya berada di kecamatan Negara. Kabupaten ini berbatasan dengan Kabupaten Tabanan di Timur, Kabupaten Buleleng di Utara, Selat Bali di Barat dan Samudera Hindia di Selatan
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${images['denpasar.png']}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="w-full h-40 object-scale-down rounded-xl"
                  src={images['denpasar.png']}
                  alt=""
                />
                <div className="p-2">
                <Link to={'/jelajah/location/' + item[8]}> 
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Denpasar
                  </h2>
                  </Link>
                  <p className="text-sm text-gray-100 text-justify">
                  Denpasar adalah ibu kota dari provinsi Bali, Indonesia. Denpasar merupakan kota terbesar di Kepulauan Nusa Tenggara dan kota terbesar kedua di wilayah Indonesia Timur setelah Kota Makassar.
                  </p>
                </div>
              </div>
            </div>
            {/* Cards And Background End */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jelajah;
