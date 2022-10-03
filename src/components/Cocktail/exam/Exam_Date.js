import "./Exam_Date.scss"
import Schedule from "../../DateContent/Schedule"
import Schedule2 from "../../DateContent/Schedule2"

export default function ExamDate(){
    return(
        <div className="Exam_Date_container">
            <div id="Exam_Date_top_txt">조주기능사 일정</div>
            <Schedule/>
    </div>

    )
}