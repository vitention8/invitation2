import flowerCover1 from "../assets/images/flower-cover-1.png";
import flowerCover2 from "../assets/images/flower-cover-2.png";
import flowerCover3 from "../assets/images/flower-cover-3.png";
import flowerCover4 from "../assets/images/flower-cover-4.png";
import flower1 from "../assets/images/flower-1.png";
import flower2 from "../assets/images/flower-2.png";
import flower3 from "../assets/images/flower-3.png";
import bridegroom from "../assets/images/bridegroom.png";
import man from "../assets/images/man.png";
import woman from "../assets/images/woman.png";
import flowerWoman from "../assets/images/flower-woman.png";
import flowerMan from "../assets/images/flower-man.png";
import img1 from "../assets/images/IMG_1.png";
import img2 from "../assets/images/IMG_2.png";
import img3 from "../assets/images/IMG_3.png";
import img4 from "../assets/images/IMG_4.png";
import img5 from "../assets/images/IMG_5.png";
import img6 from "../assets/images/IMG_6.png";
import img7 from "../assets/images/IMG_7.png";
import music from "../assets/music/song.mp3";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCalendarDays, faImage, faLocationDot, faComment, faMusic, faClock, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export function Cover() {
  const queryParameters = new URLSearchParams(window.location.search);
  const tamu = queryParameters.get("tamu");
  const [message, setMessage] = useState([]);

  const [qrCode, setQrCode] = useState();
  const SteinStore = require("stein-js-client");
  const store = new SteinStore("https://api.steinhq.com/v1/storages/6440b3edeced9b09e9caeb25");

  const getData = async () => {
    try {
      store.read("Sheet1", { limit: 50, offset: 1 }).then((data) => {
        console.log(data);
        setMessage(data);
      });
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getData();
  }, []);

  const [inputData, setInputData] = useState({
    name: "",
    instagram: "",
    message: "",
    date: new Date().toString(),
  });

  const handleChange = (e) => setInputData({ ...inputData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      store.append("Sheet1", [inputData]).then((res) => {
        setMessage([...message, inputData]);
        alert("Terimakasih")
        setInputData({ name: "",
        instagram: "",
        message: "",
        date: new Date().toString() });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [bank, setBank] = useState();
  const [dataGift, setDataGift] = useState({
    name: "",
    nominal: "",
    rekening: bank,
    date: new Date().toString(),
  });
  const handleGift = (e) => setDataGift({ ...dataGift, [e.target.name]: e.target.value });

  const giftSubmit = async (e) => {
    e.preventDefault();
    try {
      store.append("Sheet3", [dataGift]).then((res) => {
        alert("Data berhasil tersimpan");
        setDataGift({ name: "", nominal: "", rekening: bank, date: new Date().toString() });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const arrLength = message.length - 1;

  const [nextButton, setnextButton] = useState("false");
  const [value, setValue] = useState(0);
  // if (nextButton === "false") {
  //   setTimeout(() => {
  //     if (value < arrLength) {
  //       setValue(value + 1);
  //     } else {
  //       setValue(0);
  //     }
  //   }, 3000);
  // }

  // timer
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [cover, setCover] = useState(true);
  const [imageActive, setImageActive] = useState(true);

  const deadline = "May, 12, 2023";

  const getTime = () => {
    const time = Date.now() - Date.parse(deadline);

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const [modal, setModal] = useState(false);
  const [musicMode, setMusicMode] = useState(false);
  const x = document.getElementById("idAudio");
  function play() {
    if (musicMode === true) {
      x.play();
    }
    if (musicMode === false) {
      x.pause();
    }
    setMusicMode(!musicMode);
  }
  // const [play, { stop, isPlaying }] = useSound(music);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    setBank("Ardilla Ika Putri (BCA)")
  }, []);

  return (
    <div>
      <audio id="idAudio">
        <source src={music} type="audio/ogg" />
        <source src={music} type="audio/mpeg" /> The browser is not support
      </audio>
      <div className={`cover ${cover === false && "d-none"} `}>
        <div className="content ">
          <div></div>
          <img src={flowerCover4} className="flower-cover" />
          <img src={flowerCover2} className="flower-cover" />
          <img src={flowerCover3} className="flower-cover" />
          <img src={flowerCover1} className="flower-cover" />
          <img src={flowerCover4} style={{ display: "none" }} className="flower-cover" />
          <div className="border">
            <h5>The Wedding of</h5>
            <div className="name">
              <h1 data-aos="fade-up">
                Ardilla <span>&</span> Yudha
              </h1>
            </div>
            <div className="date-cover">
              <div data-aos="fade-down " className="card-date">
                <p>Resepsi (Madiun)</p>
                <div className="card-content">
                  <div className="date">
                    <h4>Mei</h4>
                    <h4>12</h4>
                    <h4>2023</h4>
                  </div>
                  <div className="time">
                    <h4> 09.00 - Selesai</h4>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down " className="card-date">
                <p>Ngunduh Mantu (Lamongan)</p>
                <div className="card-content">
                  <div className="date">
                    <h4>Mei</h4>
                    <h4>14</h4>
                    <h4>2023</h4>
                  </div>
                  <div className="time">
                    <h4> 11.00 - Selesai</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="for">
              <h4>Kepada Yth:</h4>
              <h6>Bapak / Ibu / Saudara (i)</h6>
              <h2 >{tamu}</h2>
            </div>
    
            <button className="golden-btn" onClick={() => {setCover(false); x.play(); }}>
              Open Invitation
            </button>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="border">
          <div className="nav">
            <Link activeClass="active" to="section-2" spy={true} smooth={true} offset={-70} duration={500}>
              <FontAwesomeIcon icon={faHeart} className="icon-nav" />
            </Link>
            <Link activeClass="active" to="section-3" spy={true} smooth={true} offset={-70} duration={500}>
              <FontAwesomeIcon icon={faCalendarDays} className="icon-nav" />
            </Link>
            <Link activeClass="active" to="section-4" spy={true} smooth={true} offset={-70} duration={500}>
              <FontAwesomeIcon icon={faImage} className="icon-nav" />
            </Link>
            <Link activeClass="active" to="section-6" spy={true} smooth={true} offset={-70} duration={500}>
              <FontAwesomeIcon icon={faComment} className="icon-nav" />
            </Link>
            <a onClick={play} className={musicMode === false ? "active" : ""}>
              <FontAwesomeIcon icon={faMusic} className="icon-nav" />
            </a>
          </div>
        </div>
        <img src={flower1} className="img-bottom" />
        <img src={flower2} className="img-bottom" />
        <img src={flower3} className="img-bottom" />
      </div>

        <div id="section-1">
          <div className="content">
            <div className="border">
            <div>
              <h5 data-aos="fade-up">The Wedding of</h5>
              <div className="name">
                <h1 data-aos="fade-up">
                  Ardilla <span>&</span> Yudha
                </h1>
              </div>
              <div className="countdown">
                <div className="time">
                  <div className="count">
                    <h4>{days}</h4>
                    <p>Hari</p>
                  </div>{" "}
                  <div className="count">
                    <h4>{hours}</h4>
                    <p>Jam</p>
                  </div>{" "}
                  <div className="count">
                    <h4>{minutes}</h4>
                    <p>Menit</p>
                  </div>{" "}
                  <div className="count">
                    <h4>{seconds}</h4>
                    <p>Detik</p>
                  </div>
                </div>
              </div>
            </div>
              
              <div className="image-countdown">
                <img src={bridegroom} width="190px" height="auto" />
              </div>
            </div>
          </div>
        </div>

      <div id="section-2">
        <div className="content">
          <div className="border">
            <p>Maha suci Allah, yang telah menciptakan makhluknya berpasang-pasangan.Ya Allah semoga Ridho-Mu tercurah mengiringi pernikahan kami</p>
            <div className="bingkai">
              <div data-aos="fade-up-right">
                <div className="bg-image-bridegroom man">
                  <div className="man-card">
                    <img src={flowerMan} className="flower-man" />
                    <img src={man} className="bridegroom" />
                  </div>
                </div>

                <h4>Yudha Bagus Cahyono</h4>
                <h6>Putra Kedua dari Bpk. Harktono dan Ibu Reti</h6>
                <br />
              </div>

              <h3>&</h3>
              <div data-aos="fade-down-left">
                <div className="bg-image-bridegroom woman">
                  <div className="woman-card">
                    <img src={flowerWoman} className="flower-woman" />
                    <img src={woman} className="bridegroom" />
                  </div>
                </div>

                <h4>Ardilla Ika Putri</h4>
                <h6>Putri dari Bpk. Murjianto dan Ibu Asminah</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section-3">
        <div className="content">
          <h5>Acara akan dilaksanakan pada</h5>
          <div className="line">
            <div className="card-box">
              <div className="box-event" data-aos="zoom-in">
                <h4>Akad Nikah</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCalendarDays} className="icon-event" />
                    <p>
                      <b>Jum'at, 12 Mei 2023</b>
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faClock} className="icon-event" />
                    <p>09.00 WIB s/d Selesai</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} className="icon-event" />
                    <p>
                      {" "}
                      <b>Kantor KUA, </b>
                      Jl. Pelita Tama No. 56, Rejomulyo, Kec.Kartoharjo, Madiun
                    </p>
                  </li>
                </ul>
              </div>
              <div className="box-event resepsi" data-aos="zoom-in">
                <h4>Resepsi</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCalendarDays} className="icon-event" />
                    <p>
                      {" "}
                      <b>Jum'at, 12 Mei 2023</b>
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faClock} className="icon-event" />
                    <p>13.30 WIB s/d Selesai</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} className="icon-event" />
                    <p>
                      {" "}
                      <b>Kediaman Bapak Sutrisno & Ibu Sinem, </b>
                      Jl. Raya Dungus No. 55 Dorangan RT.14/RW.04 Munggul Wungu, Madiun
                    </p>
                  </li>
                  <div className="button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://goo.gl/maps/VmA5kosqK3t9ByRV9"
                    >
                      <button className="button-calendar" type="button">
                        Open Map
                      </button>
                    </a>
                    <a
                      href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Acara+Resepsi+Pernikahan+Yudha+dan+Ardila&ctz=Asia/Jakarta&dates=20230512T133000/20230512T200000%7D&details=Acara+Resepsi+Pernikahan+Yudha+dan+Ardila&location=Raya+Dungus+No.55,+Ngrayung,+Mojopurno,+Kec.+Wungu,+Kabupaten+Madiun,+Jawa+Timur&sprop&sprop=name:"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button type="button" className="button-calendar">
                        Simpan Acara
                      </button>
                    </a>
                  </div>
                </ul>
              </div>
              <div className="box-event resepsi" data-aos="zoom-in">
                <h4>Ngunduh Mantu</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCalendarDays} className="icon-event" />
                    <p>
                      <b>Minggu, 14 Mei 2023</b>
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faClock} className="icon-event" />
                    <p>11.00 WIB s/d Selesa</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} className="icon-event" />
                    <p>
                      {" "}
                      <b>Kediaman Bpk. Hartono dan Ibu Reti, </b>
                      Tiwet, Kalitengah, Kab. Lamongan
                    </p>
                  </li>
                  <div className="button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://goo.gl/maps/ZUgFrwsV1HZzYuua7"
                    >
                      <button className="button-calendar" type="button">
                        Open Map
                      </button>
                    </a>
                    <a
                      href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Acara+Ngunduh+Mantu+Pernikahan+Yudha+dan+Ardila&ctz=Asia/Jakarta&dates=20230514T120000/20230514T200000%7D&details=Acara+Ngunduh+Mantu+Pernikahan+Yudha+dan+Ardila&location=Tiwet,+Kalitengah,+Lamongan+Regency,+East+Java&sprop&sprop=name:"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button type="button" className="button-calendar">
                        Simpan Acara
                      </button>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section-4">
        <div className="content">
          <div className="title">
            <img src={flowerCover1} className="flower1" />
            <h4>Gallery</h4>
            <img src={flowerCover2} className="flower2" />
          </div>

          <div className="slide-container" data-aos="zoom-out">
            <span className="slider-span" id="slider-span1"></span>
            <span className="slider-span" id="slider-span2"></span>
            <span className="slider-span" id="slider-span3"></span>
            <span className={`slider-span ${imageActive === true ? "image-active" : ""}`} id="slider-span4"></span>
            <span className="slider-span" id="slider-span5"></span>
            <span className="slider-span" id="slider-span6"></span>
            <span className="slider-span" id="slider-span7"></span>

            <div className={`image-slider ${imageActive === true ? "image-active" : ""}`}>
              <div className="slides-div" id="slide-1">
                <img src={img1} alt="" className="img" id="img1" />
                <a href="#slider-span1" className="button" id="button-1" onClick={() => setImageActive(false)} />
              </div>
              <div className="slides-div" id="slide-2">
                <img src={img2} alt="" className="img" id="img2" />
                <a href="#slider-span2" className="button" id="button-2" onClick={() => setImageActive(false)} />
              </div>
              <div className="slides-div" id="slide-3">
                <img src={img3} alt="" className="img" id="img3" />
                <a href="#slider-span3" className="button" id="button-3" onClick={() => setImageActive(false)} />
              </div>
              <div className="slides-div" id="slide-4">
                <img src={img4} alt="" className="img image-active" id="img4" />
                <a href={`#slider-span4 ${imageActive === true ? "image-active" : ""}`} className="button" id="button-4" />
              </div>
              <div className="slides-div" id="slide-5">
                <img src={img5} alt="" className="img" id="img5" />
                <a href="#slider-span5" className="button" id="button-5" onClick={() => setImageActive(false)} />
              </div>
              <div className="slides-div" id="slide-6">
                <img src={img6} alt="" className="img" id="img6" />
                <a href="#slider-span6" className="button" id="button-6" onClick={() => setImageActive(false)} />
              </div>
              <div className="slides-div" id="slide-7">
                <img src={img7} alt="" className="img" id="img7" />
                <a href="#slider-span7" className="button" id="button-7" onClick={() => setImageActive(false)} />
              </div>
            </div>
          </div>
          <div className="box-event" data-aos="zoom-out">
            <p>Menikah itu karena ingin hidup bersama dengan orang terkasih, ekonomi adalah bentuk perjuangan dan kerja sama, anak adalah bonus. punya atau tidak bukan kesalahan sedangkan menua bersama adalah tujuannya.</p>
          </div>
        </div>
      </div>

      <div id="section-5">
        <div className="content">
          <div className="box-event">
            <div className="img-gift">
              <img src={img7} alt="gift" />
            </div>
            <div className="gift" data-aos="zoom-out">
              <h4>Kado Online</h4>
              <p>Untuk keluarga dan teman yang ingin mengirimi kami hadiah dan harapan, silakan ketuk tombol di bawah untuk instruksi lebih lanjut:</p>
              <button type="button" onClick={() => setModal(true)}>
                Kirim Kado
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="section-6">
        <div className="content">
          <div className="quotes" data-aos="zoom-out-up">
            <h4>Ucapan dan Do'a</h4>
            <div className="congratulate">
              <button
                type="button m-0"
                onClick={() => {
                  value === 0 ? setValue(arrLength) : setValue(value - 1);
                  setnextButton(true);
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} className="icon-event" />
              </button>
              <div>
                <h5>{message[value]?.name}</h5>
                <p>{message[value]?.message}</p>
                <p className="instagram">{message[value]?.instagram}</p>
              </div>

              <button
                type="button m-0"
                onClick={() => {
                  value === arrLength ? setValue(0) : setValue(value + 1);
                  setnextButton(true);
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} className="icon-event" />
              </button>
            </div>
          </div>
          <div className="box-event" data-aos="zoom-in">
            <form onSubmit={handleSubmit}>
              <h4>Kirim Ucapan</h4>
              <div>
                <label>Nama</label>
                <input type="text" className="form-control" name="name" value={inputData.name} onChange={handleChange} required placeholder="nama" />
              </div>
              <div>
                <label>Instagram (opsional)</label>
                <input type="text" className="form-control" name="instagram" value={inputData.instagram} onChange={handleChange} />
              </div>
              <div>
                <label>Ucapan dan doa</label>
                <textarea name="message" cols="30" rows="3" className="form-control" value={inputData.message} onChange={handleChange} required placeholder="Tuliskan ucapan dan doa"></textarea>
              </div>

              <button type="submit">Kirim</button>
            </form>
          </div>
        </div>
      </div>

      <div id="section-7">
        <div className="content">
          <p data-aos="zoom-in-up">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/ Ibu/ Saudara (i) berkenan hadir untuk memberikan do’a dan restu kepada putra-putri kami. </p>
          <p data-aos="zoom-in-up">Atas kehadiran dan do’a restunya kami mengucuapkan terimakasih.</p>
          <h5>topinviter.com</h5>
        </div>
      </div>

      <div id="myModal" className={`modal ${modal === false && "d-none"}`}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={() => setModal(false)}>
              &times;
            </span>
            <h2>Kirim Hadiah</h2>
          </div>
          <div className="modal-body">
            <p>Tanpa mengurangi rasa hormat, untuk melengkapi kebahagiaan pengantin, anda dapat memberikan tanda terima kasih disini:</p>

            <form onSubmit={giftSubmit}>
              <select id="cars" name="carlist" onClick={(event)=>setBank(event.target.value)} form="carform">
              {["Ardilla Ika Putri (BCA)", "Ardilla Ika Putri (Mandiri)", "Yudha Bagus Cahyono (BCA)"].map((bank, index) =>
              <option key={index} value={bank}>{bank}</option>
               )}
              </select>
              {bank === "Ardilla Ika Putri (BCA)" &&
              <div className="bank">
                <h3>Bank BCA</h3>
                <p>
                  No Rek : 1771853833 <br />
                  Atas Nama : Ardilla Ika Putri
                </p>
              </div>
              }
              {bank === "Ardilla Ika Putri (Mandiri)" &&
              <div className="bank">
                <h3>Bank Mandiri</h3>
                <p>
                  No Rek : 1400022289376 <br />
                  Atas Nama : Ardilla Ika Putri
                </p>
              </div>
              }
              {bank === "Yudha Bagus Cahyono (BCA)" &&
              <div className="bank">
                <h3>Bank BCA</h3>
                <p>
                  No Rek : 3300960111 <br />
                  Atas Nama : Yudha Bagus Cahyono
                </p>
              </div>
              }
              
              <div>
                <input type="text" className="form-control" name="name" value={dataGift.name} onChange={handleGift} required placeholder="nama" />
              </div>
              <div>
                <input type="number" className="form-control" name="nominal" value={dataGift.nominal} onChange={handleGift} required placeholder="nominal" />
              </div>

              <button type="submit">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
