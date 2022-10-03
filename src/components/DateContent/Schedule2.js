import "./Schedule2.scss";

import { useState } from "react";

export default function () {
  const [changepage1, setchagepage1] = useState(false);
  const [changepage2, setchagepage2] = useState(false);
  const [changepage3, setchagepage3] = useState(false);
  const [changepage4, setchagepage4] = useState(false);
  const [changepage5, setchagepage5] = useState(false);
  const [changepage6, setchagepage6] = useState(false);
  const [changepage, setchagepage] = useState(true);

  function toggle_Exam_Date() {
    setchagepage(true);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(false);
    setchagepage5(false);
    setchagepage6(false);
  }

  function toggle_Exam_Date1() {
    setchagepage(false);
    setchagepage1(true);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(false);
    setchagepage5(false);
    setchagepage6(false);
  }

  function toggle_Exam_Date2() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(true);
    setchagepage3(false);
    setchagepage4(false);
    setchagepage5(false);
    setchagepage6(false);
  }
  function toggle_Exam_Date3() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(true);
    setchagepage4(false);
    setchagepage5(false);
    setchagepage6(false);
  }
  function toggle_Exam_Date4() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(true);
    setchagepage5(false);
    setchagepage6(false);
  }

  function toggle_Exam_Date5() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(false);
    setchagepage5(true);
    setchagepage6(false);
  }

  function toggle_Exam_Date6() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(false);
    setchagepage5(false);
    setchagepage6(true);
  }
  return (
    <div className="schedule">
      <div className="exam_schedule">
        <h2>제과기능사 시험일정</h2>
      </div>
      <div id="section_outer">
        <div className="section_inner">
          <div className="list_lang_box">
            <ul>
              <li className="tab" onClick={toggle_Exam_Date}>
                <span
                  id="menua"
                  style={{
                    borderBottom:
                      changepage === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage === true ? "550" : "100",
                  }}
                  className="menu_a"
                >
                  18회
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date1}>
                <span
                  id="menub"
                  style={{
                    borderBottom:
                      changepage1 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage1 === true ? "550" : "100",
                  }}
                  className="menu_b"
                >
                  19회
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date2}>
                <span
                  id="menuc"
                  style={{
                    borderBottom:
                      changepage2 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage2 === true ? "550" : "100",
                  }}
                  className="menu_c"
                >
                  20회
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date3}>
                <span
                  id="menud"
                  style={{
                    borderBottom:
                      changepage3 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage3 === true ? "550" : "100",
                  }}
                  className="menu_d"
                >
                  21회
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date4}>
                <span
                  id="menue"
                  style={{
                    borderBottom:
                      changepage4 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage4 === true ? "550" : "100",
                  }}
                  className="menu_e"
                >
                  22회
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date5}>
                <span
                  id="menuf"
                  style={{
                    borderBottom:
                      changepage5 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage5 === true ? "550" : "100",
                  }}
                  className="menu_f"
                >
                  23회
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date6}>
                <span
                  id="menug"
                  style={{
                    borderBottom:
                      changepage6 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage6 === true ? "550" : "100",
                  }}
                  className="menu_g"
                >
                  24회
                </span>
              </li>
            </ul>
          </div>
        </div>
        {changepage === true ? (
          <div id="zero" className="schedule_area">
            <div className="n">
              <h4>2022 정기 기능사 18회</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="200px" />
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
                      <td className="td2">2022.07.14.(목) ~ 2022.07.15.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.07.25.(월) ~ 2022.07.29(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.07.25.(월)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.09.15.(목) ~ 2022.09.16.(금)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.09.26.(월) ~ 2022.09.16(금)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.10.13.(목) ~ 2022.12.12.(월)</td>
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
              <h4>2022 정기 기능사 19회</h4>
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
                      <td className="td2">2022.07.21.(목) ~ 2022.07.22.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.08.01.(월) ~ 2022.08.05(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.08.01.(월)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.09.21.(목) ~ 2022.09.30.(금)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.10.12.(수) ~ 2022.12.22(토)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.10.27.(목) ~ 2022.12.26.(월)</td>
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
              <h4>2022 정기 기능사 20회</h4>
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
                      <td className="td2">2022.07.28.(목) ~ 2022.07.29.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.08.08.(월) ~ 2022.08.12(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.08.08.(월)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.10.13.(목) ~ 2022.10.14.(금)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.10.24.(월) ~ 2022.11.05(토)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.11.10.(목) ~ 2023.01.09.(월)</td>
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
              <h4>2022 정기 기능사 21회</h4>
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
                      <td className="td2">2022.08.04.(목) ~ 2022.08.05.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.08.16.(화) ~ 2022.08.19(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.08.16.(화)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.10.27.(목) ~ 2022.10.28.(금)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.11.12.(토) ~ 2022.11.18(금)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.11.24.(목) ~ 2022.01.23.(월)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {changepage4 == true ? (
          <div id="d" className="fourth">
            <div className="n">
              <h4>2022 정기 기능사 22회</h4>
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
                      <td className="td2">2022.08.11.(목) ~ 2022.08.12.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.08.22.(월) ~ 2022.08.26(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.08.22.(월)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.11.10.(목) ~ 2022.11.11.(금)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.11.20.(일) ~ 2022.12.02(금)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.12.08.(목) ~ 2022.02.07.(화)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {changepage5 === true ? (
          <div id="e" className="fifth">
            <div className="n">
              <h4>2022 정기 기능사 23회</h4>
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
                      <td className="td2">2022.08.25.(목) ~ 2022.08.26.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.09.05.(월) ~ 2022.09.13(화)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.09.05.(월)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.11.24.(목) ~ 2022.11.25.(금)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.12.04.(일) ~ 2022.12.10(토)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.12.15.(목) ~ 2022.02.14.(화)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}

        {changepage6 === true ? (
          <div id="f" className="sixth">
            <div className="n">
              <h4>2022 정기 기능사 24회</h4>
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
                      <td className="td2">2022.09.22.(목) ~ 2022.09.23.(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험</td>
                      <td className="td2">2022.10.04.(화) ~ 2022.10.07(금)</td>
                    </tr>
                    <tr>
                      <td>필기시험 합격자발표</td>
                      <td className="td2">2022.10.04.(화)</td>
                    </tr>
                    <tr>
                      <td>실기시험 원서접수</td>
                      <td className="td2">2022.12.08.(목) ~ 2022.12.09.(금)</td>
                    </tr>
                    <tr>
                      <td>실기시험</td>
                      <td className="td2">2022.12.17.(토) ~ 2022.12.23(금)</td>
                    </tr>
                    <tr>
                      <td>합격자발표</td>
                      <td className="td2">2022.12.29.(목) ~ 2022.02.28.(화)</td>
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
