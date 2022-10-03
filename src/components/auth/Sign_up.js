import { useState } from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sign_up.scss";
import Choice from "../Startpage/Choice";
import Sign from "./Sign";

export default function Sign_Up() {

  

  const navigate = useNavigate();
  //PW 숨기기/보기
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  //현재 페이지 상태 
  const [Current_page,setCurrent_page] =useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("올바른 이메일 형식이 아닙니다!"),
    name: Yup.string()
      .min(2, "닉네임은 최소 2자리 이상입니다")
      .max(8, "닉네임은 최대 8자리입니다!")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "닉네임에 특수문자가 포함되면 안됩니다!"
      ),
    pw: Yup.string()
      .min(6, "비밀번호는 최소 6자리 이상입니다")
      .max(16, "비밀번호는 최대 16자리입니다!")
      .matches(
        /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
        "특수문자를 포함해야 합니다!"
      ),
    pw2: Yup.string()
      .oneOf([Yup.ref("pw"), null], "비밀번호가 일치하지 않습니다!")
  });

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  };

  const submit = async (values) => {
    const { name, pw, email } = values;
    
      await axios.post("/register", {//axios를 통해 spring으로 post
        name,
        pw,
        email,
      }).then(function (response) { 
        console.log(response.data.statusMessage);
        const msg = response.data.statusMessage;
        window.alert(msg, {
            position: "top-center",
            autoClose: 2000
          });
        if(msg === "회원가입 성공") {
          navigate("/Sign_page");
        }else{
          return false;
          }
        }
      );
    };


    function repage_Chose(){
      setCurrent_page("Chose_page")
    }
    function repage_Sign_in(){
      setCurrent_page("Sign_in")
    }

    return (<div>

      {Current_page ==="" ?
      <Formik //formik를 통한 데이터 전달
        initialValues={{
          name: "",
          pw: "",
          pw2: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={submit}
        validateOnMount={true}
      >
        {({ values, handleSubmit, handleChange, errors }) => (
          <div className="Sign_container">
            <form onSubmit={handleSubmit} autoComplete="off">
                <img id="Mars_logo2" src="./main_logo.png" onClick={repage_Chose}></img>
              <img id="sign_background_img" src="./Sign_img/Sign_background.png"></img>
              <div id="background_top_text">
                여러분의 자격시험 능력을 지금 시험해보세요
              </div>
              <div className="Sign_up_content_container">
   
                  <img id="sign_up_close_button" src="./Sign_img/back_img.png" onClick={repage_Chose}></img>
            
                <div className="Sign_up_content">
                  <div id="sign_up_text">회원가입</div>
                  <div className="Sign_up_top_text">
                    <div id="sign_up_input_text2">
                      사용하실 계정 정보를 입력해 주세요
                    </div>
                  </div>
                  <div id="sign_up_text_input_content">
                    <div id="sign_up_input_text">닉네임</div>
                    <input
                      type="text"
                      id="name"
                      onChange={handleChange}
                      required
                      placeholder="닉네임 입력"
                    ></input>
                    <div className="error-message">
                      {errors.name}
                    </div>
                  </div>
                  <div id="sign_up_text_input_content">
                    <div id="sign_up_input_text">이메일</div>
                    <input
                      type="text"
                      id="email"
                      onChange={handleChange}
                      required
                      placeholder="이메일 입력"
                    ></input>
                    <div className="error-message">
                      {errors.email}
                    </div>
                  </div>
                  <div id="sign_up_text_input_content">
                    <div className="Sign_up_same_line">
                      <div id="sign_up_input_text">비밀번호</div>
                      <label on onClick={togglePassword}>
                        {isRevealPassword ? (
                          <img id="sign_up_input_blind" src="./Sign_img/killeyes.png"></img>
                        ) : (
                          <img id="sign_up_input_blind2" src="./Sign_img/eyes.png"></img>
                        )}
                        <div id="sign_up_input_blind_text">
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
                    <div id="sign_up_text_input_content2">
                      <div id="sign_up_input_text">비밀번호 확인</div>
                      <input
                        type={isRevealPassword ? "text" : "password"}
                        id="pw2"
                        onChange={handleChange}
                        required
                        placeholder="비밀번호 확인"
                      ></input>
                      <div className="error-message">
                        {errors.pw2}
                      </div>
                    </div>
                  </div>

                  <button id="sign_up_button" name="Sign_up">
                    회원가입
                  </button>

                  <div className="Sign_up_bottom_text">
                    <div id="sign_up_input_text3">
                      계정이 있으십니까? <a onClick={repage_Sign_in}>로그인</a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
      :Current_page==="Chose_page" ? <Choice/> : Current_page ==="Sign_in" ? <Sign/> : null}
      </div>
    );
  }
