import { useState } from 'react';
import './App.css';
import Directory from './Components/Directory';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import List from './Components/List';

/*
  1. Phantoms
  2. ghosts
  3. Details
*/

function App() {
  const [files, setFiles] = useState(
    ["Phantoms", "Ghosts", "Community Contribution"]
  );
  const [ghosts, setGhosts] = useState(
    ["REDACTED", "REDACTED", "REDACTED", "REDACTED", "REDACTED"]
  )
  const [arts, setArts] = useState(
    ["astrthndr", "jasmee_nft", "rishyyay", "SofyG_NFT", "Vicendraws"]
  )
  var [show, setShow] = useState(false);
  const [_ghost, setGhost] = useState({ title: 'NOTHING.', image: '/banner.gif' })
  const [isHovering, setHovering] = useState(false);
  const [isOpened, setOpened] = useState(false);
  const [content, setContent] = useState(null);
  const [currentDir, setCurrentDir] = useState(files[0])
  const [pictures, setPictures] = useState([
    "2.gif", "3.jpg", "4.gif", "5.jpeg", "6.jpeg", "7.jpeg", "8.png", "9.png"
  ])
  const [identified, setIdentified] = useState(false);
  const handleClick = (value) => {
    console.log("HIHIHIH", value)
  }
  const handleDirectoryClick = (i) => {
    setCurrentDir(files[i]);
    if (i == 0) {
      setContent(
        <div className='max-h-full grid grid-cols-3 overflow-y-scroll overflow-x-hidden w-[80%]'>
          {pictures.map((elem, i) => {
            return (
              <div className="flex flex-col">
                <img src={`/phantoms/${elem}`} key={i} className='w-[200px]' />
                <h1 className="text-white uppercase font-[700]">
                  p{i}
                </h1>
              </div>
            )
          })}
        </div>
      )
    } else if (i == 1) {

      setContent(<div className='h-full flex items-center justify-center overflow-y-scroll overflow-x-hidden w-[80%]'>
        <div className="w-[50%] h-full">
          {
            ghosts.map((ghost, i) => {
              return (
                <div onClick={() => {
                  console.log('OKEADSAKDL')
                  if (i == 3) {
                    setShow(true)
                    show= true;
                    console.log(show);
                  } else {
                    setShow(false)
                  }
                }} className='w-full flex items-center gap-6 h-[20%] justify-evenly'>

                  <List ghost={ghost} key={i} identified={identified} setIdentified={setIdentified} handleClick={handleClick} />
                </div>
              )
            })
          }
        </div>
        <div className="w-[50%]">
          <div className='flex flex-col'>
            <img src={show? "/Phantoms/1.jpg" : "/banner.gif"} alt="" />
            <p className="text-white font-[700]">{show ? "IDENTIFIED" : "GHOST ERROR 💀"}</p>
          </div>
        </div>
      </div>)
    } else if (i == 2) {

      setContent(

        <div className='max-h-full grid grid-cols-3 overflow-y-scroll overflow-x-hidden w-[80%]'>
          {arts.map((elem, i) => {
            return (
              <div className="flex flex-col">
                <img src={`/FanArts/${elem}.jfif`} key={i} className='w-[200px] h-full' />
                <h1 className="text-white uppercase font-[700]">
                  <a href={`http://twitter.com/${elem}`} target="_blank" rel="noopener noreferrer" className='underline'>@{elem}</a>
                </h1>
              </div>
            )
          })}
        </div>
      )
    }
    setOpened(true)
  }

  const [isHoveringWallet, setHoveringWallet] = useState(false);
  return (
    <div className="App bg-black h-full flex text-white">
      <div className="sidebar relative flex flex-col items-center justify-items-stretch p-9 w-[15%] border-sidebar">
        <ul className="flex gap-9 flex-col items-start text-left justify-center">
          {
            files.map((elem, i) => {
              return (<li onClick={() => { handleDirectoryClick(i) }} className="files flex-col items-center text-left justify-center"> <img src="/filepng.png" alt="" /> <h1 className='text-green text-sm'>{elem.split(" ").map(x => {

                return <span>{x}<br /></span>
              })}</h1></li>)
            })
          }
        </ul>
        <div className="absolute bottom-[40px] hover:-translate-y-3 transition-all">
          <img src="/ghost.png" className='w-[60px] ghost' alt="" />
          <h1 className="text-green pt-2">!BOO</h1>
        </div>
      </div>
      <div className="header w-[85%] h-screen relative flex flex-col items-center justify-center">
        {
          isOpened &&
          <Directory slot={
            content
          } setOpened={setOpened} isOpened={isOpened} currentDir={currentDir} />
        }
        <video className='absolute top-0 left-0 w-full h-full z-10' autoPlay muted loop="true">
          <source src='/ghost_spec.mp4' />
        </video>

        {/* MODAL!!!!!! */}


        <div className={`modal bg-green-600 absolute left-10 bottom-44 z-30 p-6 rounded-xl max-w-[400px] ${!isHovering ? 'invisible opacity-0' : "visible opacity-100"}`}>
          <h1 className="text-white font-[700]">
            Supply: 10000 <br />
            Price: 0.1 ETH
          </h1>
        </div>

        {/* RIGHT BOTTOM THINGS IDK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}



        <div className="flex items-center align-center overflow-hidden">
          <div className="flex flex-col overflow-hidden absolute bottom-24 right-0 items-center z-20 justify-center">
            <GlitchSquiggly className='flex items-center justify-center'>
              <img src="/outline_cropped_png.png" className='banner w-[70%]' alt="" />
            </GlitchSquiggly>
            <GlitchSquiggly className='flex items-center justify-center'>
              <img src="/Logo.png" className="w-[73%] pr-8" alt="" />
            </GlitchSquiggly>
          </div>
        </div>





        {/* LEFT MINT BUTTON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}




        <div className="flex items-center align-center overflow-hidden">
          <div className="flex flex-col overflow-hidden absolute bottom-24 left-10 items-center z-30 justify-center">
            <button onMouseEnter={() => {
              setHovering(true);
            }} onMouseLeave={() => {
              setHovering(false);
            }} className="bg-green modal-button mint-btm w-[120px] rounded-lg h-[50px] text-white uppercase font-[700] text-2xl">
              Mint
            </button>
          </div>
        </div>



        {/* CONNECT WALLET BUTTON !!!!!!!!!!!!!!!!!!!!!!!!! */}

        <div className="flex items-center align-center overflow-hidden">
          <div className="flex flex-col overflow-hidden absolute top-24 right-10 items-center z-20 justify-center">
            <button onMouseEnter={() => {
              setHoveringWallet(!isHoveringWallet);
            }} className="bg-green modal-button modal-btn-wallet mint-btm rounded-lg p-5 text-white uppercase font-[700] text-2xl">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* MODAL WALLETS!!!!!! */}


        <div className={`modal bg-green-600 absolute right-10 top-44 z-20 p-8 rounded-xl max-w-[400px] ${!isHoveringWallet ? 'invisible opacity-0' : "visible opacity-100"}`}>
          <ul className="flex-col items-center justify-center list-disc">
            <li className="text-white"> Coinbase</li>
            <hr className='outline-none' />
            <li className="text-white">Metamask</li>
          </ul>
        </div>



        <div className="-translate-y-20 socials text-white gap-7 p-4 text-3xl z-20 absolute left-10 bottom-0 h-full flex flex-col items-center justify-center">
          <div className="bg-green-600 p-4 rounded-full">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="bg-green-600 p-4 rounded-full">
            <i className="fa-brands fa-discord"></i>
          </div>
        </div>



        {/* <div style={{
          backgroundColor: 'rgb(0, 119, 48)'
        }} className="absolute h-[7%] flex z-20 items-center px-4 justify-center top-10 right-10 rounded-xl">
          <p className="text-white text-xl uppercase font-[700]">
            Connect Wallet
          </p>
        </div> */}

      </div>
    </div>
  );
}

export default App;
