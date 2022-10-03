import{Link} from "react-router-dom";
import "./Bottom_Information.scss"



export default function Bottom_Information(){

  

    return(
        
        <div><img id="Bottom_Line" src="./bottom_img/Bottom_Line.png"></img>
        <div className="Bottom_content_container">
            
            <div className="Bottom_side_left">
                <img id="bottom_logo"src="./bottom_img/bottom_logo.png"></img>
            
            <div className="SNS_container">
                <img id="icon_items"src="./bottom_img/facebook_icon.png"></img>
                <img id="icon_items"src="./bottom_img/twiter_icon.png"></img>
                <img id="icon_items"src="./bottom_img/instagram_icon.png"></img>
            </div>
            </div>

            <div className="Bottom_Information_conationer">
                <div className="Bottom_Information_title">
                    About
                </div>
                <div className="Bottom_Information_items">
                    About Us
                </div>
                <div className="Bottom_Information_items">
                    Features
                </div>
                <div className="Bottom_Information_items">
                    News
                </div>
                 <div className="Bottom_Information_items">
                    Menu
                </div>
            </div>

            <div className="Bottom_Information_conationer">
                <div className="Bottom_Information_title">
                    Company
                </div>
                <div className="Bottom_Information_items">
                    Why 2rism
                </div>
                <div className="Bottom_Information_items">
                    Parther With Us
                </div>
                <div className="Bottom_Information_items">
                    FAQ
                </div>
                 <div className="Bottom_Information_items">
                    Blog  
                </div>
            </div>

            <div className="Bottom_Information_conationer">
                <div className="Bottom_Information_title">
                    Support
                </div>
                <div className="Bottom_Information_items">
                    Account
                </div>
                <div className="Bottom_Information_items">
                    Support Center
                </div>
                <div className="Bottom_Information_items">
                    Feedback
                </div>
                 <div className="Bottom_Information_items">
                    Contact Us
                </div>
            </div>


        </div>   
        </div>
     )
}