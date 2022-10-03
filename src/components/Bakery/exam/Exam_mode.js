import "./Exam_mode.scss";
import { useState } from "react";
import Exam_inforamtion from "./Exam_input_information"
import Test_A from "./Test_A";
import Test_B from "./Test_B";
import Test_C from "./Test_C";

export default function ExamMode({ Exam_type }) {
  const [Mode_choice, setMode_choice] = useState("");
  const [Exam_mode, setExam_mode] = useState("");

  function Exam_Mode_page() {
    setMode_choice("Exam");
    setExam_mode(Exam_type);
  }

  function Test_Mode_page() {
    setMode_choice("Test");
    setExam_mode(Exam_type);
  }

  return (
    <div>
      {console.log(Exam_type + "형 선택")}
      {Mode_choice === "" ? (
        <div className="Mode_choice_container">
          <img
            id="Mode_choice_img"
            src="./Main_cocktail/exam_img/Mode_choice.png"
          />
          <p>모드를 선택해 주세요</p>
          <div className="Button_choice_container">
            <button id="Mode_choice_A" onClick={Exam_Mode_page}>
              시험모드
            </button>
            <button id="Mode_choice_B" onClick={Test_Mode_page}>
              연습모드
            </button>
          </div>
        </div>
      ) : Mode_choice === "Exam" ? (
        <Exam_inforamtion exam_type={Exam_mode} />
      ) : Mode_choice === "Test" ? 
        (
            Exam_mode ==="A" ? <Test_A/> :  Exam_mode ==="B" ? <Test_B/> :Exam_mode ==="C" ? <Test_C/>: null
        )
        : null}

    </div>
  );
}
