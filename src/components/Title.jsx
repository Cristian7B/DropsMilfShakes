import imgMilfo from "../assets/milfo.png"
export function Title() {
    return (
        <div className="titleContentPage">
            <div className="textContent">
                <h2>
                    Todos los drops de
                </h2>
                <h1>
                    <a href="https://milfshakes.es">
                        milfshakes.es
                    </a>
                </h1>
                <p>
                    En un solo lugar
                </p>
            </div>
            <img className="imagenMilfoTitle" src={imgMilfo} alt="Imagen del milfo" />
        </div>
    )
}