import "./Rank.scss"

export default function Rank(){
    return(
        <div className="Rank_container">
            <div id="rank_top_txt">랭킹확인</div>
            <div className="My_Rank_txt">지금<div>나의 랭킹</div>은?</div>
        
            <div className="app_promotion_container">
                <img id ="app_scren" src="./Rank_img/app_screen.png" alt="app_screen"/>
                <div className="app_promotion_inner">
                <img id="vws_app" src="./Rank_img/vws_app.png" alt="vws_app_txt"/>
                <img id="QR_img" src="./Rank_img/QRCode_Img.png" alt="QR_img"/>
                </div>
            </div>
        </div>

        
    )
}