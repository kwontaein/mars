import { useState } from "react";
import{Link} from "react-router-dom";
import "./Choice.scss"
import Main from "../Cocktail/main/Main";
import Main2 from "../Bakery/main/Main";
import Sign from "../auth/Sign";
import Sign_Up from "../auth/Sign_up";


export default function Choice({name}){
    const [Current_page,setCurrent_page] =useState("");


    function rePage(){
        setCurrent_page("Cocktail");
        
    }

    function rePage2(){
        setCurrent_page("Bakery");
    }

    function Sign_in(){
        setCurrent_page("Sign_in");
    }

    function Sign_up(){
        setCurrent_page("Sign_up");
    }

    
    



    return(
        <div>
            {Current_page === "" ?
        <div className="Background_Container">
            
            <img id="move_img" src="./start_page_img/background_img.gif" alt="bg_img"/>
            <div className="left_contents">
                <img id="top_img" src="./start_page_img/top_img.png" alt="top_txt"/>
                <img id="mid_img" src="./start_page_img/mid_img.png" alt="mid_txt"/>
                <p>VWS에 오신 여러분을 환영합니다.</p>
                <div className="Button_container">
                <button id="Go_To_BARTENDER" onClick={rePage}>조주기능사<img id="Arrow_Right"src="./start_page_img/Arrow_Right.png" alt="Arrow_Right"></img></button>
                <button id="Go_To_BAKER" onClick={rePage2}>제과 · 제빵기능사<img id="Arrow_Right"src="./start_page_img/Arrow_Right.png"  alt="Arrow_Right"></img></button>
                </div>
                {name===undefined ?
                <div className="Signbox_container">
                    <button id="Sign_in_button" onClick={Sign_in}>Sign in</button>
                    <img id="chose_mid_line"src="./start_page_img/mid_line.png" alt="mid_line"/>
                    <button id="Goto_Sign_up_button" onClick={Sign_up}>Sign up</button>
                </div>
                :null}
            </div>
        </div>
        : Current_page ==="Sign_in" ? <Sign/> : Current_page==="Sign_up" ?<Sign_Up/> :Current_page ==="Cocktail" ?  <Main name={name}/> : Current_page ==="Bakery" ? <Main2 name={name}/> : null}
        </div>
    )
}