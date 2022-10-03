import { Link } from "react-router-dom";

import { useState } from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sign.scss";
import Main from "../Cocktail/main/Main";
import Main2 from "../Bakery/main/Main";
import Choice from "../Startpage/Choice"
import Sign_Up from "./Sign_up";

export default function Sign() {

  const[Name,setName] =useState(undefined);
  const [Current_page,setCurrent_page] =useState("");

  const navigate = useNavigate();
  //PW 숨기기/보기
  const [isRevealPassword, setIsRevealPassword] = useState(false);

  //Id, Pw
  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email("올바른 이메일 형식이 아닙니다!")
    .required("아이디를 입력하세요"),
    pw: Yup.string()
      .required("비밀번호를 입력하세요"),
  });

  const postLogin = async (values) => {
    const {pw, email} = values;
    await axios.post("/login", {//axios를 통해 spring으로 post
        email,
        pw,
    }).then(function (response) {//response로 모든걸 가져옴
            const lmsg = response.data.name;
            console.log(response.data.name);
            const lmsg2 = response.data.statusMessage;
            console.log(response.data.statusMessage);
            if( lmsg2 !== undefined && lmsg2 !== 'undefined')  {
                window.alert(lmsg2);
                return false;
            } else {
                window.alert(lmsg + "님 어서오세요!", {
                    position: "top-center",
                    autoClose: 2000
                });
                setCurrent_page("Chose_page");
                setName(lmsg);
            }
        }
    );
};

function repage_Chose(){
  setCurrent_page("Chose_page")
}
function repage_Sign_up(){
  setCurrent_page("Sign_up")
}

  

  return (
    <div>
      {Current_page==="" ? 
    <Formik //formik를 통한 데이터 전달
      initialValues={{
        email: "",
        pw: "",
      }}
      validationSchema={validationSchema}
      onSubmit={postLogin}
      validateOnMount={true}
    >
      {({values, handleSubmit, handleChange, errors}) => (
        <div className="Sign_container">
          <form onSubmit={handleSubmit} autoComplete="off">
            
              <img id="Mars_logo2" src="./main_logo.png" onClick={repage_Chose}></img>
            
            <img id="Sign_background_img" src="./Sign_img/Sign_background.png"></img>
            <div id="background_top_txt">
              여러분의 자격시험 능력을 지금 시험해보세요
            </div>
            <div className="Sign_content_container">
                <img id="close_button" src="./Sign_img/back_img.png" onClick={repage_Chose}></img>
              <div className="Sign_in_content">
                <div id="sign_in_text">로그인</div>
                <div id="text_input_content">
                  <div id="input_text">Email</div>
                  <input
                    type="text"
                    id="email"
                    onChange={handleChange}
                    required
                    placeholder="Email 입력"
                  ></input>
                  <div className="error-message">
                    {errors.email}
                  </div>
                </div>
                <div id="text_input_content">
                  <div className="same_line">
                    <div id="input_text">비밀번호</div>
                    <label on onClick={togglePassword}>
                      {isRevealPassword ? (
                        <img id="input_blind" src="./Sign_img/killeyes.png"></img>
                      ) : (
                        <img id="input_blind2" src="./Sign_img/eyes.png"></img>
                      )}
                      <div id="input_blind_text">
                        {isRevealPassword ? "숨기기" : "보기"}
                      </div>
                    </label>
                  </div>
                  <input
                    type={isRevealPassword ? "text" : "password"}
                    id="pw"
                    onChange={handleChange}
                    required
                    placeholder="비밀번호 입력"
                  ></input>
                  <div className="error-message">
                    {errors.pw}
                  </div>
                </div>
                <button id="login_button" name="login">
                  로그인
                </button>
                <div className="bottom_text">
                  <div id="input_text2">
                    계정을 가지고있지 않습니까? <a onClick={repage_Sign_up}>회원가입</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>)}
    </Formik>
  : Current_page ==="Chose_page" ? <Choice name ={Name}/> : Current_page ==="Sign_up" ?<Sign_Up/> : null}
  </div>
  );
}
