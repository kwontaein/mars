import { Link } from "react-router-dom";
import { useState } from "react";
import "./Exam.scss";
import ExamMode from "./Exam_mode";

export default function Exam() {
  const [ChoseExamA, setChoseExamA] = useState(false);
  const [ChoseExamB, setChoseExamB] = useState(false);
  const [ChoseExamC, setChoseExamC] = useState(false);
  const [hoverMouse1, sethoverMouese1] = useState(false);
  const [hoverMouse2, sethoverMouese2] = useState(false);
  const [hoverMouse3, sethoverMouese3] = useState(false);
  const [Guide_Exam, setGuide_Exam] = useState(false);
  const [Exam_type, setExam_type] = useState("");

  function Choice_ExamA() {
    setChoseExamA(true);
    setChoseExamB(false);
    setChoseExamC(false);
    setExam_type("A");
  }

  function Choice_ExamB() {
    setChoseExamA(false);
    setChoseExamB(true);
    setChoseExamC(false);
    setExam_type("B");
  }

  function Choice_ExamC() {
    setChoseExamA(false);
    setChoseExamB(false);
    setChoseExamC(true);
    setExam_type("C");
  }

  function Next_page_Exam() {
    setGuide_Exam(true);
  }

  return (
    <div className="Exam_container">
      {Exam_type === "" ? (
        /*시험 타입 미선택 시*/
        <div className="Column_flex_container">
          <img id="exam_top_line" src="./Main_cocktail/exam_img/top_line.png" />
          <div id="exam_top_mini_txt">기능사 모의 필기 시험</div>
          <div id="exam_top_txt2">조주기능사 영역</div>

          <button
            id="chose_hover_btn"
            onMouseOver={() => sethoverMouese1(true)}
            onMouseOut={() => sethoverMouese1(false)}
          >
            {hoverMouse1 === false ? (
              <img
                src="./Main_cocktail/exam_img/ExamA_btn.png"
                id="Exam_btn"
                onClick={Choice_ExamA}
              />
            ) : (
              <img
                src="./Main_cocktail/exam_img/ExamA_btn_hover.png"
                id="Exam_btn"
                onClick={Choice_ExamA}
              />
            )}
          </button>
          <button
            id="chose_hover_btn"
            onMouseOver={() => sethoverMouese2(true)}
            onMouseOut={() => sethoverMouese2(false)}
          >
            {hoverMouse2 === false ? (
              <img
                src="./Main_cocktail/exam_img/ExamB_btn.png"
                id="Exam_btn"
                onClick={Choice_ExamB}
              />
            ) : (
              <img
                src="./Main_cocktail/exam_img/ExamB_btn_hover.png"
                id="Exam_btn"
                onClick={Choice_ExamB}
              />
            )}
          </button>
          <button
            id="chose_hover_btn"
            onMouseOver={() => sethoverMouese3(true)}
            onMouseOut={() => sethoverMouese3(false)}
          >
            {hoverMouse3 === false ? (
              <img
                src="./Main_cocktail/exam_img/ExamC_btn.png"
                id="Exam_btn"
                onClick={Choice_ExamC}
              />
            ) : (
              <img
                src="./Main_cocktail/exam_img/ExamC_btn_hover.png"
                id="Exam_btn"
                onClick={Choice_ExamC}
              />
            )}
          </button>
        </div>
      ) : (
        //시험타입 선택 이후
        <ExamMode Exam_type={Exam_type} />
      )}

      {/*가이트는 꺼져있고 시험 클릭이 하나라도 ture면*/}
    </div>
  );
}
