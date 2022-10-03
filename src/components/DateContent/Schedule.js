import "./Schedule1.scss";
import { useState } from "react";

export default function Schedule() {
  const [changepage1, setchagepage1] = useState(false);
  const [changepage2, setchagepage2] = useState(false);
  const [changepage3, setchagepage3] = useState(false);
  const [changepage4, setchagepage4] = useState(false);
  const [changepage, setchagepage] = useState(true);

  function toggle_Exam_Date() {
    setchagepage(true);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(false);
  }

  function toggle_Exam_Date1() {
    setchagepage(false);
    setchagepage1(true);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(false);
  }

  function toggle_Exam_Date2() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(true);
    setchagepage3(false);
    setchagepage4(false);
  }
  function toggle_Exam_Date3() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(true);
    setchagepage4(false);
  }
  function toggle_Exam_Date4() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(true);
  }

  return (
    <div className="schedule">
      <div className="exam_schedule">
        <h2>조주기능사 시험일정</h2>
      </div>
      <div id="section_outer">
        <div className="section_inner">
          <div className="list_lang_box">
            <ul>
              <li className="tab2" onClick={toggle_Exam_Date}>
                <span
                  id="menua"
                  style={{
                    borderBottom:
                      changepage === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage === true ? "550" : "100",
                  }}
                  className="menu_a"
                >
                  필기면제검정
                </span>
              </li>
              <li className="tab2" onClick={toggle_Exam_Date1}>
                <span
                  id="menub"
                  style={{
                    borderBottom:
                      changepage1 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage1 === true ? "550" : "100",
                  }}
                  className="menu_b"
                >
                  1회
                </span>
              </li>
              <li className="tab2" onClick={toggle_Exam_Date2}>
                <span
                  id="menuc"
                  style={{
                    borderBottom:
                      changepage2 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage2 === true ? "550" : "100",
                  }}
                  className="menu_c"
                >
                  2회
                </span>
              </li>
              <li className="tab2" onClick={toggle_Exam_Date3}>
                <span
                  id="menud"
                  style={{
                    borderBottom:
                      changepage3 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage3 === true ? "550" : "100",
                  }}
                  className="menu_d"
                >
                  3회
                </span>
              </li>
              <li className="tab2" onClick={toggle_Exam_Date4}>
                <span
                  id="menue"
                  style={{
                    borderBottom:
                      changepage4 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage4 === true ? "550" : "100",
                  }}
                  className="menu_e"
                >
                  4회
                </span>
              </li>
            </ul>
          </div>
        </div>

        {changepage === true ? (
          <div id="zero" className="schedule_area">
            <div className="n">
              <h4>2022 정기 기능사 산업별 맞춤형 고교등 필기면제검정</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">구분</th>
                      <th className="period">기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.05.10.(화) ~ 2022.05.13.(금)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.06.20.(월) ~ 2022.07.01(금)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.07.22.(금) ~ 2022.09.21.(수)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {changepage1 === true ? (
          <div id="a" className="first">
            <div className="n">
              <h4>2022 정기 기능사 1회</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">구분</th>
                      <th className="period">기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>필기시험 원서접수</td>
                      <td className="td2">2022.01.04.(화) ~ 2022.01.07.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.01.23.(일) ~ 2022.01.29(토)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.02.29.(수)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.02.15.(화) ~ 2022.02.18.(금)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.03.20.(일) ~ 2022.04.08(금)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.04.15.(금) ~ 2022.06.14.(화)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {changepage2 === true ? (
          <div id="b" className="second">
            <div className="n">
              <h4>2022 정기 기능사 2회</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">구분</th>
                      <th className="period">기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>필기시험 원서접수</td>
                      <td className="td2">2022.03.07.(월) ~ 2022.03.11.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.03.27.(일) ~ 2022.04.02(토)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.04.13.(수)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.04.29.(화) ~ 2022.04.29.(금)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.05.29.(일) ~ 2022.06.17(금)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.06.24.(금) ~ 2022.08.23.(화)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {changepage3 === true ? (
          <div id="c" className="third">
            <div className="n">
              <h4>2022 정기 기능사 3회</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">구분</th>
                      <th className="period">기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>필기시험 원서접수</td>
                      <td className="td2">2022.05.24.(화) ~ 2022.05.27.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.06.12.(일) ~ 2022.06.18(토)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.06.29.(수)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.07.11.(월) ~ 2022.07.14.(목)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.08.14.(일) ~ 2022.09.02(금)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.09.08.(목) ~ 2022.11.07.(월)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {changepage4 === true ? (
          <div id="d" className="fourth">
            <div className="n">
              <h4>2022 정기 기능사 4회</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">구분</th>
                      <th className="period">기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>필기시험 원서접수</td>
                      <td className="td2">2022.08.02.(화) ~ 2022.08.05.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.08.28.(월) ~ 2022.09.03(토)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.09.21.(수)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.09.16.(월) ~ 2022.09.29.(목)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.11.06.(일) ~ 2022.11.25(금)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.12.02.(금) ~ 2022.02.01.(수)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
