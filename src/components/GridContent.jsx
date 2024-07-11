import { useState, useEffect } from "react"

export function GridContent({linkDrop, imgDrop, titleDrop, descriptionDrop, numberOfDrop}) {

    const [hover, setHover] = useState(false)   
    const [widthUser, setWidthUser] = useState(window.innerWidth <= 800)

    useEffect(() => {
        const handleResizeWidth = () => {
            setWidthUser(window.innerWidth <= 800);
        };
        window.addEventListener("resize", handleResizeWidth);
    }, []
    )

    const hoverElement = () => {
        setHover(true);
    }

    const noHoverElement = () => {
        setHover(false);
    }

    return (
        <div className="container">
            {widthUser ? (
                <div className="containerResponsiveCard">
                    <a className="redirectCardDrop" target="_blank" href={linkDrop}>
                        <div className="dropCard ">
                            <div className="dropCardImg">
                                <img className="imgCard " src={imgDrop} alt={titleDrop} />
                            </div>
                        </div>
                    </a>
                    <div className="textContentCard">
                        <div className="headerContainer">
                            <h1 className="hcard">{numberOfDrop}</h1>
                            <h3 className="textCard">{titleDrop}</h3>
                        </div>
                        <p className="descriptionCard">{descriptionDrop}</p> 
                    </div>
                </div>  
            ):(
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
            )}
        </div>
    )
}