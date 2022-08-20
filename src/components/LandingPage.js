import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import search from '../images/search.png'
import head_img from '../images/head-img.jpg'
import { db } from "../firebase";
import { set, ref, onValue, remove, update } from "firebase/database";




function LandingPage() {
  const [todo, setTodo] = useState("");
  const [vin, setVin] = useState("");
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  const [filter, setFilter] = useState('');

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handlePrimaryChange = (e) => {
    setPrimary(e.target.value);
  };

  const handleSecondaryChange = (e) => {
    setSecondary(e.target.value);
  };
  const handleVinChange = (e) => {
    setVin(e.target.value);
  };
  const searchText = (event) => {
    setFilter(event.target.value);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true)
  }

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false)
  }

  let dataSearch = todos.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });

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

  console.log(todos)
  return (
    <div className="landingPage">
      {/* {todos.map((todo) => (
        <>
          <Link className="link" to={todo.vin}>
            <div className='grid-item'>
              <img src={todo.primary} />
              <h1>{todo.secondary}</h1>
              <div className='overlay'>
                <button>Show Details</button>
              </div>
            </div>
          </Link>
        </>
      ))} */}
      <div className="above">
        <h1>You can see the damage and decide!</h1>
        <h2>All our cars are Americans!</h2>
        <button>Go and Check</button>
      </div>
      <img className='head_img' src={head_img} />

      <div>
      </div>
      <div class="search_container">
        <img src={search} />
        <input
          className="search-box"
          type="text" value={filter}
          onChange={searchText.bind(this)}
        />
      </div>
      <div class="grid">
        {
          dataSearch.map((todo) => {
            return <Link to={`/linked/${todo.vin}`}><div className='grid-item'>
              <img src={todo.img2} />
              <h1>{todo.vin}</h1>
              <div className='overlay'>
                <button>Show Details</button>
              </div>
            </div>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default LandingPage