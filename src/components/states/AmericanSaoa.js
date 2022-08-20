import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { db } from "../../firebase";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useScrollTo } from 'react-use-window-scroll';
import up from '../../images/up.png'

function California() {
  const scrollTo = useScrollTo();

  const [todo, setTodo] = useState("");
  const [vin, setVin] = useState("");
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);


  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  const { id } = useParams();
  let car = todos.filter(item => item.vin === id)[0]
  console.log(car)

  const images_1 = todos.filter(item => item.vin === id)[0] ? car.img1 : '';
  const images_2 = todos.filter(item => item.vin === id)[0] ? car.img2 : '';
  const images_3 = todos.filter(item => item.vin === id)[0] ? car.img3 : '';
  const images_4 = todos.filter(item => item.vin === id)[0] ? car.img4 : '';
  const images_5 = todos.filter(item => item.vin === id)[0] ? car.img5 : '';
  const images_6 = todos.filter(item => item.vin === id)[0] ? car.img6 : '' ? car.img6 : '';
  const images_7 = todos.filter(item => item.vin === id)[0] ? car.img7 : '' ? car.img7 : '';
  const images_8 = todos.filter(item => item.vin === id)[0] ? car.img8 : '' ? car.img8 : '';
  const images_9 = todos.filter(item => item.vin === id)[0] ? car.img9 : '' ? car.img9 : '';
  const images_10 = todos.filter(item => item.vin === id)[0] ? car.img10 : '' ? car.img10 : '';
  const images_11 = todos.filter(item => item.vin === id)[0] ? car.img11 : '' ? car.img11 : '';
  const images_12 = todos.filter(item => item.vin === id)[0] ? car.img12 : '' ? car.img12 : '';
  const images_13 = todos.filter(item => item.vin === id)[0] ? car.img13 : '' ? car.img13 : '';
  const images_14 = todos.filter(item => item.vin === id)[0] ? car.img14 : '' ? car.img14 : '';
  const images_15 = todos.filter(item => item.vin === id)[0] ? car.img15 : '' ? car.img14 : '';

  const imgs = [
    { id: 0, value: `${images_1}` },
    { id: 1, value: `${images_2}` },
    { id: 2, value: `${images_3}` },
    { id: 3, value: `${images_4}` },
    { id: 4, value: `${images_5}` },
    { id: 5, value: `${images_6}` },
    { id: 6, value: `${images_7}` },
    { id: 7, value: `${images_8}` },
    { id: 8, value: `${images_9}` },
    { id: 9, value: `${images_10}` },
    { id: 10, value: `${images_11}` },
    { id: 11, value: `${images_12}` },
    { id: 12, value: `${images_13}` },
    { id: 13, value: `${images_14}` },
    { id: 14, value: `${images_15}` },

  ]

  const [wordData, setWordData] = useState(imgs[0])
  const handleClick = (index) => {
    console.log(index)
    const wordSlider = imgs[index];
    setWordData(wordSlider)
  }
  return (

    <div className="container">
      <Helmet>
        <title>{todos.filter(item => item.vin === id)[0] ? car.vin : ''}</title>
        <meta name="description" content={todos.filter(item => item.vin === id)[0] ? car.todo : ''} />
        <link rel="canonical" href={`/landing/${todos.filter(item => item.vin === id)[0] ? car.vin : ''}`} />
      </Helmet>
      <h2>{todos.filter(item => item.vin === id)[0] ? car.todo : ''}:&nbsp;&nbsp;VIN:&nbsp;{todos.filter(item => item.vin === id)[0] ? car.vin : ''}</h2>
      <div className="main">
        <img src={wordData.value} className='main_img' />
        <div className='flex_row'>
          {imgs.map((data, i) =>
            <div className="thumbnail" key={i} >
              <img className={wordData.id == i ? "clicked" : "unclicked"} src={data.value ? data.value : null}
                onClick={() => handleClick(i)} height={data.value ? '100' : '0'} width="150" />
            </div>
          )}
        </div>
      </div>
      <hr></hr>
      <div className='description'>
        <div className='spec-info'>
          <li><strong>Primary damage: &nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.primary : ''}</li>
          <li><strong>Secondary damage:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.secondary : ''}</li>
          <li><strong>Odometer:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.odometer : ''}</li>
          <li><strong>Start code:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.startCode : ''}</li>
          <li><strong>Key:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.key : ''}</li>
          <li><strong>Fuel Type:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.fuelType : ''}</li>
          <li><strong>Transmission:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.primary : ''}</li>
        </div>
        <div className='spec-info'>
          <li><strong>Location:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.location : ''}</li>
          <li><strong>Color:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.color : ''}</li>
          <li><strong>Lot:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.lot : ''}</li>
          <li><strong>Year:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.year : ''}</li>
          <li><strong>Engine:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.engine : ''}</li>
          <li><strong>Cylinders:&nbsp;&nbsp;</strong>{todos.filter(item => item.vin === id)[0] ? car.cylenders : ''}</li>
        </div>
      </div>

      <button onClick={() => scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
        <img src={up} className='up' />
      </button>
    </div>

  )
}

export default California