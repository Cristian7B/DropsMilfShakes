import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GridContent } from "./components/GridContent";
import { Title } from "./components/Title";
import "./App.css"

function App() {
  const drops = [
    {
      imgDrop:"src/assets/drop1.jpg",
      titleDrop:"HotMilfs",
      descriptionDrop:"Primer drop de Mlfshks",
      numberOfDrop: "001",
      linkDrop: "https://www.instagram.com/p/ClZgIwTKIpN/?img_index=1"
    },
    {
      imgDrop:"src/assets/drop2.jpg",
      titleDrop:"Edición limitada",
      descriptionDrop:"Zapatillas 1/1",
      numberOfDrop: "002",
      linkDrop: "https://www.instagram.com/p/CpF60wFq-Xr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop:"src/assets/drop3.jpg",
      titleDrop:"Air Wish",
      descriptionDrop:"Ambientador exclusivo",
      numberOfDrop: "003",
      linkDrop: "https://www.instagram.com/p/CqNbOEeqADP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      imgDrop:"src/assets/drop4.jpg",
      titleDrop:"Milfo",
      descriptionDrop:"Figura coleccionable",
      numberOfDrop: "004",
      linkDrop: "https://www.instagram.com/p/Csow7zAtofD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop:"src/assets/drop5.jpg",
      titleDrop:"Rampa para deportistas",
      descriptionDrop:"Drop subastado 1/1",
      numberOfDrop: "005",
      linkDrop: "https://www.instagram.com/p/CthBnOYt-II/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      imgDrop:"src/assets/drop6.webp",
      titleDrop:"Essentials",
      descriptionDrop:"Drop de ropa",
      numberOfDrop: "006",
      linkDrop: "https://www.instagram.com/p/CuEoRTrtNHo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop:"src/assets/drop7.jpg",
      titleDrop:"Malamanera",
      descriptionDrop:"Casco retro HJC",
      numberOfDrop: "007",
      linkDrop: "https://www.instagram.com/p/CxsUdBSKU8u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop:"src/assets/drop8.jpg",
      titleDrop:"Essentials",
      descriptionDrop:"8 Piezas de ropa",
      numberOfDrop: "008",
      linkDrop: "https://www.instagram.com/p/Czixtdmsrx4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop:"src/assets/drop9.jpg",
      titleDrop:"Evento presencial",
      descriptionDrop:"Colaboración con Pedro Gomez",
      numberOfDrop: "009",
      linkDrop: "https://www.instagram.com/p/C0ojKF_tlOL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop:"src/assets/chunky.png",
      titleDrop:"Chunky",
      descriptionDrop:"Drop exclusivo para navidad",
      numberOfDrop: "010",
      linkDrop: "https://www.instagram.com/p/C0_sQ-bMWfC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop:"src/assets/drop11.jpg",
      titleDrop:"Adopta, no compres",
      descriptionDrop:"Colaboración con 10 perreras de toda España",
      numberOfDrop: "011",
      linkDrop: "https://www.instagram.com/p/C3gWlZmsGpa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop:"src/assets/drop12.jpg",
      titleDrop:"Lingote de oro",
      descriptionDrop:"Drop relacionado con la serie '21 Días'",
      numberOfDrop: "012",
      linkDrop: "https://www.instagram.com/p/C5YTAEhscLT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop:"src/assets/drop13.jpg",
      titleDrop:"Exp 013",
      descriptionDrop:"Planta carnívora",
      numberOfDrop: "013",
      linkDrop: "https://www.instagram.com/p/C7Ou2BlofUG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      imgDrop:"src/assets/drop14.webp",
      titleDrop:"Lanzamiento latas",
      descriptionDrop:"Evento de lanzamiento ropa y latas",
      numberOfDrop: "014",
      linkDrop: "https://www.instagram.com/p/C9Hq6drMOn4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ]
  return (
    <div id="app">
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