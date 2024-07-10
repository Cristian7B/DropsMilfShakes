import { useState } from "react"

export function GridContent({linkDrop, imgDrop, titleDrop, descriptionDrop, numberOfDrop}) {

    const [hover, setHover] = useState(false)   

    const hoverElement = () => {
        setHover(true);
    }

    const noHoverElement = () => {
        setHover(false);
    }

    return (
        <a className="redirectCardDrop" target="_blank" href={linkDrop}>
            <div 
                onMouseEnter={hoverElement}
                onMouseLeave={noHoverElement}
                className={`dropCard ${hover ? 'hovered':''}`} 
            >
                <div className="dropCardImg">
                    <img className={`imgCard ${hover ? 'hovered':''}`} src={imgDrop} alt={titleDrop} />
                </div>
                <div className={`textContentCard ${hover ? 'hovered':''}`}>
                    <h1 className="hcard">{numberOfDrop}</h1>
                    <h3 className="textCard">{titleDrop}</h3>
                    <p className="descriptionCard">{descriptionDrop}</p>   
                </div>
            </div>

        </a>
    )
}