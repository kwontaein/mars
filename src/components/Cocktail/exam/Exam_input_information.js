import "./Exam_input_information.scss";
import PropTypes from "prop-types";
import React, { useState } from "react";
import CocktailA from "./Cocktail_A";
import CocktailB from "./Cocktail_B";
import CocktailC from "./Cocktail_C";


function Exam_inforamtion({ exam_type }) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  //한 자리수 일 경우 앞에 0을 붙여주는 format
  var monthformat = ("00" + month.toString()).slice(-2);
  var dayformat = ("00" + day.toString()).slice(-2);

  var yearslice1 = year.toString().slice(2, 3);
  var yearslice2 = year.toString().slice(3, 4);
  var monthslice1 = monthformat.slice(0, 1);
  var monthslice2 = monthformat.toString().slice(1, 2);
  var dayslice1 = dayformat.toString().slice(0, 1);
  var dayslice2 = dayformat.toString().slice(1, 2);

  const [NextButton, setNextButton] = useState(false);
  const [InputName, setInputName] = useState("");


  function toggleNextButton(){
    if(InputName==="" ){
      window.alert("작성란에 성명을 기입해주세요.")
      return;
    }else{
    setNextButton(true);
    }
  }

  return (
    <div>
      {NextButton === false ? (
        <div className="Exam_Guide_container">
          <img
            id="Guide_Exam_Mars_logo"
            src="./Main_cocktail/exam_img/Guide_Exam_Mars_logo.png"
          />
          <img
            id="exam_guide_background"
            src="./Main_cocktail/exam_img/exam_Guide_img.png"
          />
          <p id="guide_exam_type"> ({exam_type}형)</p>
          <div className="Guide_input_name">
            <div id="guide_name_txt">성명</div>
            <div>
              <input type="text" placeholder="성명입력" onChange={(e) => setInputName(e.target.value)} maxLength='4'/>
            </div>
          </div>

          <div className="Guide_Date">
            <div id="guide_date_txt">응시 날짜</div>
            <div id="guide_date_items">{yearslice1}</div>
            <div id="guide_date_items">{yearslice2}</div>
            <div id="guide_date_items">{monthslice1}</div>
            <div id="guide_date_items">{monthslice2}</div>
            <div id="guide_date_items">{dayslice1}</div>
            <div id="guide_date_items">{dayslice2}</div>
          </div>

          <button id="exam_input_next_btn" onClick={toggleNextButton}>확인</button>
        </div>
      ) : exam_type === "A" ? (
        <CocktailA name={InputName}/>
      ) : exam_type === "B" ? (
        <CocktailB name={InputName} />
      ) : exam_type === "C" ? (
        <CocktailC name={InputName} />
      ) : null}
    </div>
  );


}

export default Exam_inforamtion;
