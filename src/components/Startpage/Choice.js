import{Link} from "react-router-dom";
import "./Choice.scss"


export default function Choice(){
    
    return(
        <div className="Background_Container">
            
            <img id="move_img" src="./start_page_img/background_img.gif" alt="bg_img"/>
            <div className="left_contents">
                <img id="top_img" src="./start_page_img/top_img.png" alt="top_txt"/>
                <img id="mid_img" src="./start_page_img/mid_img.png" alt="mid_txt"/>
                <p>VWS에 오신 여러분을 환영합니다.</p>
                <div className="Button_container">
                <Link to="/Cocktail"><button id="Go_To_BARTENDER">조주기능사<img id="Arrow_Right"src="./start_page_img/Arrow_Right.png" alt="Arrow_Right"></img></button></Link>
                <Link to="/Bakery"><button id="Go_To_BAKER">제과 · 제빵기능사<img id="Arrow_Right"src="./start_page_img/Arrow_Right.png"  alt="Arrow_Right"></img></button></Link>
                </div>
                <div className="Signbox_container">
                    <Link to="/Sign_page"><button id="Sign_in_button">Sign in</button></Link>
                    <img id="chose_mid_line"src="./start_page_img/mid_line.png" alt="mid_line"/>
                    <Link to="/SignUp"><button id="Goto_Sign_up_button">Sign up</button></Link>
                </div>
            </div>
        </div>
    )
}