import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards'
import Form from './components/form/Form'
import Navbar from './components/navbar/Navbar'
import { FaRegTrashAlt } from "react-icons/fa";

function App() {

  const [data, setData] = useState([])
  const [cart, setCart] = useState([]);
  const [mode, setMode] = useState(false)
  const [save, setSave] = useState(true)
  const [like, setLike] = useState([])
  const [likeF, setLikeF] = useState(false)
  const getData = async (api) => {
    const req = await fetch(api);
    const data = await req.json();
    setData(data)
  }

  useEffect(() => {
    getData(`https://fakestoreapi.com/products`);
  }, [])
  function remuvEl(id) {
    const yangiFata = cart.filter((product) => {
      return product.id != id
    })

    setCart(yangiFata)
  }
  function removLike(id) {
    const yangiLike = like.filter((product) => {
      return product.id != id
    })
    setLike(yangiLike)
  }
  return (
    <div  className={mode ? "body" : "body active"}>
      {/* <div className="loader">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/174/698/original/animation-loading-circle-icon-loading-gif-loading-screen-gif-loading-spinner-gif-loading-animation-loading-on-black-background-free-video.jpg" alt="" />
      </div> */}
      <div className={save ? "saveDatas  " : "saveDatas  active"}>
        {cart &&
          cart.map((item) => {
            return <div className='cartDiv2'>
              <img src={item.image} alt="" />
              <h1>{item.title.slice(0, 10)}...</h1>
              < FaRegTrashAlt onClick={() => {
                remuvEl(item.id)
              }} />
            </div>
          })
        }
      </div>
      <div className={likeF ? "saveDatas likeData " : "saveDatas likeData active"}>
        {like &&
          like.map((item) => {
            return <div className='cartDiv2'>
              <img src={item.image} alt="" />
              <h1>{item.title.slice(0, 10)}...</h1>
              < FaRegTrashAlt onClick={() => {
                removLike(item.id)
              }} />
            </div>
          })
        }
      </div>
      <Navbar setLikeF={setLikeF} likeF={likeF} save={save} like={like} setSave={setSave} cart={cart} mode={mode} setMode={setMode} />
      <Form getData={getData} />
      <Cards like={like} setLike={setLike} cart={cart} setCart={setCart} data={data} />
    </div>
  );
}

export default App
