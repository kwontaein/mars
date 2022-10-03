import "./Bakery_Test.scss"
import { useState } from 'react';
import TestResult from "../../Cocktail/exam/Test_Result"



export default function CocktailC({name}) {
  let quest =  [ '1. 불란서 빵의 2차 발효실 습도로 가장 적합한 것은?',
                  '2. 일반적으로 이스트 도넛의 가장 적당한 튀김온도는?',
                  '3. 다음 중 팬닝에 대한 설명으로 틀린 것은?',
                  '4. 액체발효법(액종법)에 대한 설명으로 옳은 것은?',
                  '5. 다음 중 반족 발효에 영향을 주지 않는 재료는?',
                  '6. 제빵 시 성형(make-up)의 범위에 들어가지 않는 것은?',
                  '7. 스펀지 도우법으로 반죽을 만들 때 스펀지 반죽온도로 적정한 것은?',
                  '8. 반죽의 신장성에 대한 저항을 측정하는 방법은?',
                  '9. 완제품 50g짜리 식빵 100개를 만들려고 한다. 발효손실 2%, 굽기손실 12%,총배합률 180%일 때 이 반죽의 분할 당시 반죽 무게는?',
                  '10. 믹싱의 효과로 거리가 먼 것 은?',
                  '11. 제품을 생산하는데 생산 원가요소는?',
                  '12. 빵의 제품평가에서 브레이크와 슈레드 부족현상의 이유가 아닌 것은?',
                  '13. 빵의 노화를 지연시키는 경우가 아닌 것은?',
                  '14. 냉동반죽 제품의 장점이 아닌 것은?',
                  '15. 식빵의 포장에 가장 적합한 온도는?',
                  '16. 팽창제에 대한 설명중 틀린 것은?',
                  '17. 일반적으로 유화 쇼트닝은 모노글리세드니가 얼마나 함유된 것이 좋은가?',
                  '18. 글루텐을 형성하는 단백질은?',
                  '19. 밀가루와 밀의 현탁액을 일정한 온도로 균일하게 상승시킬 때 일어나는 정도의 변화를 계속적으로 자동기록 하는 장치는?',
                  '20. 유당에 대한 설명으로 틀린 것은?'
              
];
  
  var ans1 =     ['65~70%',
                  '100~115℃',
                  '반죽의 이음매가 틀의 바닥으로 놓이게 한다.',
                  '균일한 제품생산이 어렵다.',
                  '쇼트닝',
                  '둥글리기',
                  '24℃',
                  '믹소그래프',
                  '4.68kg',
                  '원료의 균일한 분산',
                  '재료비, 노무비, 경비',
                  '발효시간이 짧거나 길었다.',
                  '저장온도를 -18℃ 이하로 유지한다.',
                  '계획생산이 가능하다.',
                  '20~24℃',
                  '가스를 발생시키는 물질이다.',
                  '1~3%',
                  '알부민, 글리아딘',
                  '아밀로그래프(Amylograph)',
                  '우유에 함유된 당으로 입상형, 분말형, 미분말형 등이 있다.'

];
var ans2 =     ['75~80%',
                  '150~165℃',
                  '철판의 온도를 60℃로 맞춘다.',
                  '발효 손실에 따른 생산손실을 줄일 수 있다.',
                  '설탕',
                  '분할',
                  '27℃',
                  '익스텐소그래프',
                  '5.68kg',
                  '반죽의 글루텐 형성',
                  '재료비, 용역비, 감가상각비',
                  '21~35℃에서 보관한다.',
                  '21~35℃에서 보관한다.',
                  '인당 생산량이 증가한다.',
                  '25~29℃',
                  '반죽을 부풀게 한다.',
                  '4~5%',
                  '알부민, 글로불린',
                  '모세관 점도계(Capillary viscometer)',
                  '감미도는 설탕 100에 대하여 16 정도이다.'
];
var ans3 =     ['80~85%',
                  '180~195℃',
                  '반죽은 적정 분할량을 넣는다.',
                  '공간 확보와 설비비가 많이 든다.',
                  '이스트',
                  '정형', 
                  '26℃',
                  '레오그래프',
                  '6.68kg',
                  '이물질 제거',
                  '판매비, 노동비, 월급',
                  '고율배합으로 한다.',
                  '고율배합으로 한다.',
                  '이스트의 사용량이 감소된다.',
                  '30~34℃',
                  '제품에 부드러운 조직을 부여해 준다.',
                  '6~9%',
                  '글루테닌, 글리아딘',
                  '피서 점도계(Fisher viscometer)',
                  '환원당으로 아미노산의 존재 시 갈변반응을 일으킨다.'

];
var ans4 =     [  '85~90%',
                    '230~245℃',
                    '비용적의 단위는 cm^3/g이다.',
                    '한번에 많은 양을 발효시킬 수 없다.',
                    '이스트푸드',
                    '2차 발효', 
                    '28℃',
                    '패리노그래프',
                    '7.68kg',
                    '반죽에 공기 혼입',
                    '광열비, 월급, 생산비',
                    '냉장고에서 보관한다.',
                    '냉장고에서 보관한다.',
                    '반죽의 저장성이 향상된다.',
                    '35~40℃',
                    '제품에 질긴 성질을 준다.',
                    '9~11%',
                    '글루테닌, 글로불린',
                    '브룩필드 점도계(Brookfield viscometer)',
                    '포도당이나 자당에 비하여 용해도가 높고 결정화가 느리다.'

];
var [Num,Numch] = useState(0);

var [sc,scch] = useState(0);
function add1(e){
  Numch(Num+1);

  var id = (e.target.value);
  switch(Num){
    case 0:                 // 1번 문제
      if(Num==0 && id== 2)
      scch(sc+5);
      console.log(sc);
    break;
    case 1:                 // 2번 
      if(Num==1 && id== 3)
      scch(sc+5);
    break;
    case 2:                 // 3번 
      if(Num==2 && id== 2)
      scch(sc+5);
    break;
    case 3:                 // 4번 
      if(Num==3 && id== 2)
      scch(sc+5);
    break;
    case 4:                 // 5번 
      if(Num==4 && id== 1)
      scch(sc+5);
    break;
    case 5:                 // 6번 
      if(Num==5 && id== 4)
      scch(sc+5);
    break;
    case 6:                 // 7번 
      if(Num==6 && id== 1)
      scch(sc+5);
    break;
    case 7:                 // 8번 
      if(Num==7 && id== 2)
      scch(sc+5);
    break;
    case 8:                 // 9번 
      if(Num==8 && id== 2)
      scch(sc+5);
    break;
    case 9:                 // 10번 
      if(Num==9 && id== 3)
      scch(sc+5);
    break;
    case 10:                 // 11번 문제
    if(Num==10 && id== 1)
    scch(sc+5);
    console.log(sc);
  break;
  case 11:                 // 12번 
    if(Num==11 && id== 4)
    scch(sc+5);
  break;
  case 12:                 // 13번 
    if(Num==12 && id== 4)
    scch(sc+5);
  break;
  case 13:                 // 14번 
    if(Num==13 && id== 3)
    scch(sc+5);
  break;
  case 14:                 // 15번 
    if(Num==14 && id== 4)
    scch(sc+5);
  break;
  case 15:                 // 16번 
    if(Num==15 && id== 4)
    scch(sc+5);
  break;
  case 16:                 // 17번 
    if(Num==16 && id== 3)
    scch(sc+5);
  break;
  case 17:                 // 18번 
    if(Num==17 && id== 3)
    scch(sc+5);
  break;
  case 18:                 // 19번 
    if(Num==18 && id== 1)
    scch(sc+5);
  break;
  case 19:                 // 20번 
    if(Num==19 && id== 4)
    scch(sc+5);
  break;
    
   
  }
}




  return (
    <div>
     <div id="exam_top_txt">모의시험 테스트 문제 C</div>
    {Num <= 19 ? 
    
      <div className="Exan_Test_container">
      <header className="Exam_header">
        <div id="Exam_header_text"> {quest[Num]}</div>

        <p id="Exam_btn_items"><button onClick={add1} value={1} >1</button> {ans1[Num]}</p>
       
       <p id="Exam_btn_items"><button onClick={add1} value={2}>2 </button> {ans2[Num]}</p>
       
       <p id="Exam_btn_items"><button onClick={add1} value={3}>3 </button> {ans3[Num]}</p>
      
       <p id="Exam_btn_items"><button onClick={add1} value={4}>4 </button> {ans4[Num]}</p>

      </header>

      
    </div>
    
  : <TestResult name={name} score={sc} mode="bakery"/>
  }
   </div>
  );
}

