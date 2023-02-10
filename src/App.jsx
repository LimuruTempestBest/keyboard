import React from 'react'
import { Icon } from '@iconify/react'
import {
  BrowserRouter as Router, Routes, Route, Link, useNavigate, NavLink
} from "react-router-dom";
import 'animate.css';

const Home = () => {
  return (
    <div className="w-full h-screen bg-neutral-50">
      <div className="flex flex-row gap-16 py-5 bg-stone-900">
        <div className="ml-4 text-slate-100 text-6xl tracking-widest select-none">
          Keyboard.
        </div>
        <div className="flex flex-row gap-12 mt-6 ">
          <button className="text-lime-600 text-2xl tracking-wider hover:scale-110 duration-200 hover:text-lime-500 duration-200">
            Mechanism
          </button>
          <button className="text-lime-600 text-2xl tracking-wider hover:scale-110 duration-200 hover:text-lime-500 duration-200">
            History
          </button>
          <button className="text-lime-600 text-2xl tracking-wider hover:scale-110 duration-200 hover:text-lime-500 duration-200">
            Model
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-96 select-none">
        <div className="flex flex-col gap-3 items-center">
          <div className="animate__animated animate__bounce text-7xl text-zinc-900 font-semibold tracking-wider">
            FUCK OFF
          </div>
          <div className="animate__animated animate__shakeX text-4xl text-zinc-900 font-bold tracking-wider">
            WHAT ARE YOU WAITING FOR ?
          </div>
          <div className="flex flex-row items-center gap-24 mt-10">
            <button className="tracking-wider font-black text-lg p-4 border-2 border-rose-300 rounded hover:scale-110 duration-200 hover:bg-stone-900 duration-200 hover:text-white duration-200">
              Get Started
            </button>
            <Link to="me">
              <button className="tracking-wider font-black text-lg p-4 border-2 border-rose-300 rounded hover:scale-110 duration-200 hover:bg-stone-900 duration-200 hover:text-white duration-200">
                About Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="absolute bottom-2">
          <div className="text-xl tracking-wider">
            Made by <span className="font-black text-rose-400">Daniel </span>
            From Web group
          </div>
        </div>
      </div>

    </div>
  )
}

const Me = () => {
  return (
    <div className="w-full h-screen bg-neutral-50">
      <div className="flex flex-row gap-16 py-5 bg-stone-900">
        <div className="ml-4 text-slate-100 text-6xl tracking-widest select-none">
          Keyboard.
        </div>
        <div className="flex flex-row gap-12 mt-6 ">
          <button className="text-lime-600 text-2xl tracking-wider hover:scale-110 duration-200 hover:text-lime-500 duration-200">
            Mechanism
          </button>
          <button className="text-lime-600 text-2xl tracking-wider hover:scale-110 duration-200 hover:text-lime-500 duration-200">
            History
          </button>
          <button className="text-lime-600 text-2xl tracking-wider hover:scale-110 duration-200 hover:text-lime-500 duration-200">
            Model
          </button>
        </div>
      </div>


      <div className="flex justify-center items-center w-full h-96 select-none mt-36">
        <div className="flex flex-col gap-3 items-center">
          <div className="animate__animated animate__bounce text-7xl text-zinc-900 font-semibold tracking-wider">
            My Social Media
          </div>
          <div className="animate__animated animate__shakeX text-4xl text-zinc-900 font-bold tracking-wider">
            GO FOLLOW!!!
          </div>
          <div className="flex flex-col gap-7 items-center">
            <a href="https://www.youtube.com/channel/UCQrCDpJ64I4rDXwcptkYWyA" target="_blank">
              <div className="px-8 py-3 bg-stone-900 rounded text-3xl font-black text-yellow-600 mt-10 tracking-wider hover:tracking-widest duration-200 hover:text-yellow-500">
                YOUTUBE
              </div>
            </a>
            <a href="https://www.instagram.com/teddybakichan/" target="_blank">
              <div className="px-8 py-3 bg-stone-900 rounded text-3xl font-black text-yellow-600 tracking-wider hover:tracking-widest duration-200 hover:text-yellow-500">
                INSTAGRAM
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100069344944940" target="_blank">
              <div className="px-8 py-3 bg-stone-900 rounded text-3xl font-black text-yellow-600 tracking-wider hover:tracking-widest duration-200 hover:text-yellow-500">
                FACEBOOK
              </div>
            </a>
            <a href="https://github.com/LimuruTempestBest " target="_blank">
              <div className="px-8 py-3 bg-stone-900 rounded text-3xl font-black text-yellow-600 tracking-wider hover:tracking-widest duration-200 hover:text-yellow-500">
                GITHUB
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>



  )
}


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="me" element={<Me />}></Route>
      </Routes>
    </Router>
  );
};
export default App