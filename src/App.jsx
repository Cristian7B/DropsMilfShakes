import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GridContent } from "./components/GridContent";
import { Title } from "./components/Title";

import { Analytics } from "@vercel/analytics/react"

import drop1 from './assets/drop1.jpg';
import drop2 from './assets/drop2.jpg';
import drop3 from './assets/drop3.jpg';
import drop4 from './assets/drop4.jpg';
import drop5 from './assets/drop5.jpg';
import drop6 from './assets/drop6.webp';
import drop7 from './assets/drop7.jpg';
import drop8 from './assets/drop8.jpg';
import drop9 from './assets/drop9.jpg';
import chunky from './assets/chunky.png';
import drop11 from './assets/drop11.jpg';
import drop12 from './assets/drop12.jpg';
import drop13 from './assets/drop13.jpg';
import drop14 from './assets/drop14.webp';

import "./App.css"

function App() {
  const drops = [
    {
      imgDrop: drop1,
      titleDrop:"HotMilfs",
      descriptionDrop:"Primer drop de Mlfshks",
      numberOfDrop: "001",
      linkDrop: "https://www.instagram.com/p/ClZgIwTKIpN/?img_index=1"
    },
    {
      imgDrop: drop2,
      titleDrop:"Edición limitada",
      descriptionDrop:"Zapatillas 1/1",
      numberOfDrop: "002",
      linkDrop: "https://www.instagram.com/p/CpF60wFq-Xr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop: drop3,
      titleDrop:"Air Wish",
      descriptionDrop:"Ambientador exclusivo",
      numberOfDrop: "003",
      linkDrop: "https://www.instagram.com/p/CqNbOEeqADP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      imgDrop: drop4,
      titleDrop:"Milfo",
      descriptionDrop:"Figura coleccionable",
      numberOfDrop: "004",
      linkDrop: "https://www.instagram.com/p/Csow7zAtofD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop: drop5,
      titleDrop:"Rampa Mlfshks",
      descriptionDrop:"Drop subastado 1/1",
      numberOfDrop: "005",
      linkDrop: "https://www.instagram.com/p/CthBnOYt-II/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      imgDrop: drop6,
      titleDrop:"Essentials",
      descriptionDrop:"Drop de ropa",
      numberOfDrop: "006",
      linkDrop: "https://www.instagram.com/p/CuEoRTrtNHo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop: drop7,
      titleDrop:"Malamanera",
      descriptionDrop:"Casco retro HJC",
      numberOfDrop: "007",
      linkDrop: "https://www.instagram.com/p/CxsUdBSKU8u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop: drop8,
      titleDrop:"Essentials",
      descriptionDrop:"8 Piezas de ropa",
      numberOfDrop: "008",
      linkDrop: "https://www.instagram.com/p/Czixtdmsrx4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop: drop9,
      titleDrop:"Evento presencial",
      descriptionDrop:"Colaboración con Pedro Gomez",
      numberOfDrop: "009",
      linkDrop: "https://www.instagram.com/p/C0ojKF_tlOL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop: chunky,
      titleDrop:"Chunky",
      descriptionDrop:"Drop exclusivo para navidad",
      numberOfDrop: "010",
      linkDrop: "https://www.instagram.com/p/C0_sQ-bMWfC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop: drop11,
      titleDrop:"Adopta, no compres",
      descriptionDrop:"Colaboración con 10 perreras de toda España",
      numberOfDrop: "011",
      linkDrop: "https://www.instagram.com/p/C3gWlZmsGpa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop: drop12,
      titleDrop:"Lingote de oro",
      descriptionDrop:"Drop relacionado con la serie '21 Días'",
      numberOfDrop: "012",
      linkDrop: "https://www.instagram.com/p/C5YTAEhscLT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop: drop13,
      titleDrop:"Exp 013",
      descriptionDrop:"Planta carnívora",
      numberOfDrop: "013",
      linkDrop: "https://www.instagram.com/p/C7Ou2BlofUG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop: drop14,
      titleDrop:"Lanzamiento latas",
      descriptionDrop:"Evento de lanzamiento ropa y latas",
      numberOfDrop: "014",
      linkDrop: "https://www.instagram.com/p/C9Hq6drMOn4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ]

  return (

    <div id="app">
      <Analytics />
      <Header text="milfshakes.es"/>
      <Title/>

      <section className="dropsSection">
          <div className="titleGrid">
              <h1>
                  ¿A dónde quieres ir?
              </h1>
          </div>
          <div className="gridContainerDrops">
          {
            drops.map(({linkDrop, imgDrop, titleDrop, descriptionDrop, numberOfDrop}) => (
              <GridContent 
                imgDrop={imgDrop} 
                titleDrop={titleDrop} 
                descriptionDrop={descriptionDrop}
                numberOfDrop={numberOfDrop}
                linkDrop={linkDrop}
                key={titleDrop}
              />
            ))
          }
          </div>
      </section> 

      <Footer/>
    </div>
  )

}

export default App