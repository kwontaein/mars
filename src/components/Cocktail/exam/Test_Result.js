import { useState } from "react";
import "./Test_Result.scss";
export default function TestResult({ name, score, mode }) {
  // // 프로퍼티 타입 지정
  // Main.propTypes = {
  //     name: PropTypes.string
  //   }

  //   // 프로퍼티 기본값 지정
  //   Main.defaultProps = {
  //     name: '디폴트'
  //   }

  return (
    <div className="Test_Result_Container">
        console.log({score})
      <div className="Result_content_container">
        <div className="Result_top_text">모의테스트 결과</div>
        <div id="result_top_text1">
          {mode === "cocktail"
            ? "조주기능사"
            : mode === "bakery"
            ? "제과 · 제빵기능사"
            : null}
        </div>
        <img
          id="result_top_line"
          src="./Main_cocktail/Test_Result/top_line.png"
          alt="top_line"
        />
        <img
          id="result_video_picture"
          src={
            mode === "cocktail"
              ? "./Main_cocktail/Test_Result/result_video_picture.png"
              : mode === "bakery"
              ? "./Main_cocktail/Test_Result/result_video_picture2.png"
              : null
          }
          alt="result_video_picture"
        />
        { score  >= 60 ? (
          <img
            id="stamp_img"
            src="./Main_cocktail/Test_Result/pass_img.png"
            alt="stamp_img"
          />
        ) : (
          <img
            id="stamp_img"
            src="./Main_cocktail/Test_Result/fail_img.png"
            alt="stamp_img"
          />
        )}
        <div
          id="final_score"
          style={{ color:  score  >= 60 ? "blue" : "red" }}
        >
          총점 : {score}점
        </div>
        <div id="result_bottom_text">
          {name}님의{" "}
          <a>
            {mode === "cocktail"
              ? "'조주기능사'"
              : mode === "bakery"
              ? "'제과 · 제빵기능사'"
              : null}
          </a>{" "}
          모의시험 테스트는{" "}
          <span style={{ color:  score  >= 60 ? "blue" : "red" }}>
            { score  >= 60 ? "합격" : "불합격"}
          </span>
          입니다
        </div>
      </div>
    </div>
  );
}
