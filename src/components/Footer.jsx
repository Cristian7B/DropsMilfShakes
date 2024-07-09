import Github from "../assets/GitHub"
import LinkedIn from "../assets/linkedIn"
import linkOutline from "../assets/link-outline.svg"
export function Footer() {
    return (
        <section className="footerContainer">
            <div className="socialMedia">
                <div className="iconRedirect">
                    <a target="_blank" href="https://github.com/Cristian7B/"><Github/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/cristian-bonilla-77b4012aa/"><LinkedIn/></a>
                    
                </div>
                <p>
                    By: Cristian Bonilla
                </p>
            </div>
            <div className="originalPage">
                <a target="_blank" href="https://milfshakes.es"><img src={linkOutline} alt="" />milfshakes</a>
            </div>
        </section>
    )
}