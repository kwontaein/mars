import "./Guide.scss"
import Exam_mode from "../exam/Exam_mode"

export default function Guide(){
    return(
        <div className="Guide_container">
            <div id="Guide_top_txt">조주기능사 가이드</div>
            <iframe
          id="certifiacte_guide_video"
          src="https://www.youtube.com/embed/G__j6zCVc9g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
    )
}