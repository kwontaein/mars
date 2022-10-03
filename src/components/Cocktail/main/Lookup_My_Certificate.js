import { useState } from "react";
import "./Lookup_My_Certificate.scss";
import Certificate from "./Certificate";
import axios from "axios";


export default function LookupCertificate() {
  const [Search_id, setSerach_id] = useState("");
  const [Nextpage, setNextpage] = useState(false);
  const [Backpage, setBackpage] = useState(false);

  const submit = async () => {
    await axios.post("/web/license", {//axios를 통해 spring으로 post
      name: Search_id
    }).then(function (response) {
      window.alert("조회 성공", {
        position: "top-center",
        autoClose: 2000
      });
      setTimeout(() => {
        setNextpage(true);
      }, 0);
    }
    )
      //실패 시 catch 실행
        .catch(function (error) {
          window.alert("아이디 및 성함을 확인해주세요.", {
            position: "top-center",
          });
        });

  };

  function Goto_back() {//뒤로
    setBackpage(true);
  }

  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  //한 자리수 일 경우 앞에 0을 붙여주는 format
  var monthformat = ("00" + month.toString()).slice(-2);
  var dayformat = ("00" + day.toString()).slice(-2);

  return (
    <div>{
      Backpage === false ?
        (Nextpage === false ? (
          <div className="Lookup_Container">
            <div className="Lookup_content_container">
              <div className="Lookup_top_text">내 자격증 확인</div>
              <div id="lookup_id_name">아이디 또는 닉네임 입력</div>
              <input
                type="text"
                id="lookup_input_id"
                onChange={(e) => setSerach_id(e.target.value)}
                required
                placeholder="아이디 또는 닉네임 입력"
              ></input>
              <div className="Lookup_button_line">
                <button id="search_btn" onClick={submit}>확인</button>
                <button id="cancle_btn" onClick={Goto_back} >취소</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="Lookup_Container">
            <div className="Lookup_content_container">
              <div className="Lookup_top_text">조주기능사</div>
              <img
                id="user_profile_img"
                src="./Main_cocktail/Lookup_Certificate/user_profile_img.png"
                alt="user_profile_img"
              />
              <div id="lookup_mid_text">VWS <a>조주기능사</a> 자격증을</div>
              <div id="lookup_mid_text">취득하였음을 증명합니다.</div>
              <div id="lookup_Date">{year}.{monthformat}.{dayformat}</div>
              <button id="lookup_close_btn" onClick={Goto_back}>닫기</button>
            </div>
          </div>
        ))
        : <Certificate />}
    </div>
  );
}
