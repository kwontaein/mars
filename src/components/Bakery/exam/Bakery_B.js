import "./Bakery_Test.scss";
import { useState } from "react";
import TestResult from "../../Cocktail/exam/Test_Result"


export default function CocktailB({name}) {
  let quest =  [ '1. 내부에 팬이 부착되어 열풍을 강제 순환시키면서 굽는 타입으로 굽기의 편차가 극히 적은 오븐은?',
                  '2. 정형한 식빵 반죽을 팬에 넣을 때 이음매의 위치는 어느쪽이 가장 좋은가?',
                  '3. 식빵 반죽을 분할할 때 처음에 분할한 반죽과 나중에 분할한 반죽은 숙성도의 차이가 크므로 단시간 내에 분할해야한다. 몇분 이내로 완료하는 것이 좋은가?',
                  '4. 2차 발효시 상대습도가 부족할 때 일어나는 현상은?',
                  '5. 일반적인 스펀지 도우법으로 식빵을 만들 때 도우의 가장 적당한 온도는?',
                  '6. 건포도 식빵, 옥수수 식빵, 야채 식빵을 만들 때 건포도, 옥수수, 야채는 믹싱의 어느 단계에 넣는 것이 좋은가?',
                  '7. 밀가루온도 25℃, 실내온도 24℃, 수돗물 온도 20℃, 결과 온도 30℃, 희망온도27℃, 마찰계수 24일 때 사용할 물 온도는?',
                  '8. 노무비를 절감하는 방법으로 바람직하지 않은 것은?',
                  '9. 냉동반죽에 사용되는 재료와 제품의 특성에 대한 설명 중 틀린 것은?',
                  '10. 패리노그래프와 관계가 적은 것은?',
                  '11. 다음 중 점도계가 아닌 것은?',
                  '12. 단백질 분해 효소는?',
                  '13. 이스트푸드의 구성성분 중 칼슘염의 주요 기능은?',
                  '14. 우유 단백질의 응고에 관여하지 않는 것은?',
                  '15. 커스터드 크림에서 계란의 주요역할은',
                  '16. 제조현장에서 제빵용 이스트를 저장하는 현실적인 온도로 적당한 것은?',
                  '17. 다음 중 지방분해 효소는?',
                  '18. 강력분의 특성으로 틀린 것은?',
                  '19. 다음 중 글레이즈(glaze) 사용시 적합한 것은?',
                  '20. 제빵에서 설탕의 기능으로 틀린 것은?'
              
];
  var ans1 =     ['터널오븐',
                  '위',
                  '2~7분',
                  '질긴 껍질',
                  '17℃',
                  '최종 단계 후',
                  '2℃',
                  '표준화',
                  '일반 제품보다 산화제 사용량을 증가시킨다.',
                  '흡수율 측정',
                  '비스코아밀로그래프(Viscoamylograph)',
                  '치마아제',
                  '이스트 성장에 필요하다',
                  '산',
                  '영양가',
                  '-18℃ 이하',
                  '리파아제',
                  '중력분에 비해 단백질 함량이 높다',
                  '15℃',
                  '이스트의 영양분이 됨'

];
var ans2 =     ['컨벡션오븐',
                  '아래',
                  '8~13분',
                  '흰 반점',
                  '27℃',
                  '최종 단계 후',
                  '6℃',
                  '단순화',
                  '저율배합인 프랑스빵이 가장 유리하다.',
                  '믹싱시단 측정',
                  '익스텐소그래프(Extensograph)',
                  '말타아제',
                  '반죽에 탄성을 준다.',
                  '레닌',
                  '결합제',
                  '-1~5℃',
                  '프로테아제',
                  '박력분에 비해 글루텐 함량이 적다.',
                  '25℃',
                  '껍질색을 나게 함'
];
var ans3 =     ['밴드오븐',
                  '좌측',
                  '15~20분',
                  '터짐',
                  '37℃',
                  '발전 단계 후', 
                  '8℃',
                  '설비 휴무',
                  '유화제를 사용하는 것이 좋다.',
                  '믹싱 내구성 측정',
                  '맥미카엘(MacMichael) 점도계',
                  '프로테아제',
                  '오븐 팽창이 커진다.',
                  '가열',
                  '팽창제',
                  '20℃',
                  '치마아제',
                  '박력분에 비해 점탄성이 크다',
                  '35℃',
                  '향을 향상시킴.'

];
var ans4 =     [  '래크오븐',
                    '우측',
                    '25~30분',
                    '단단한 표피',
                    '47℃',
                    '렛 다운 단계 후', 
                    '17℃',
                    '공정시간 단축',
                    '밀가루는 단백질 양과 질이 좋은 것을 사용한다.',
                    '호화특성 측정',
                    '브룩필드(Brookfield) 점도계',
                    '인버타이제',
                    '물 조절제 역할을 한다.',
                    '리피아제',
                    '저장성',
                    '35℃ 이상',
                    '말티아제',
                    '경질소맥을 원료로 한다.',
                    '45℃',
                    '노화를 촉진시킴.'

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
      if(Num==1 && id== 2)
      scch(sc+5);
    break;
    case 2:                 // 3번 
      if(Num==2 && id== 3)
      scch(sc+5);
    break;
    case 3:                 // 4번 
      if(Num==3 && id== 3)
      scch(sc+5);
    break;
    case 4:                 // 5번 
      if(Num==4 && id== 2)
      scch(sc+5);
    break;
    case 5:                 // 6번 
      if(Num==5 && id== 1)
      scch(sc+5);
    break;
    case 6:                 // 7번 
      if(Num==6 && id== 3)
      scch(sc+5);
    break;
    case 7:                 // 8번 
      if(Num==7 && id== 3)
      scch(sc+5);
    break;
    case 8:                 // 9번 
      if(Num==8 && id== 2)
      scch(sc+5);
    break;
    case 9:                 // 10번 
      if(Num==9 && id== 4)
      scch(sc+5);
    break;
    case 10:                 // 11번 문제
    if(Num==10 && id== 2)
    scch(sc+5);
    console.log(sc);
  break;
  case 11:                 // 12번 
    if(Num==11 && id== 3)
    scch(sc+5);
  break;
  case 12:                 // 13번 
    if(Num==12 && id== 4)
    scch(sc+5);
  break;
  case 13:                 // 14번 
    if(Num==13 && id== 4)
    scch(sc+5);
  break;
  case 14:                 // 15번 
    if(Num==14 && id== 2)
    scch(sc+5);
  break;
  case 15:                 // 16번 
    if(Num==15 && id== 2)
    scch(sc+5);
  break;
  case 16:                 // 17번 
    if(Num==16 && id== 1)
    scch(sc+5);
  break;
  case 17:                 // 18번 
    if(Num==17 && id== 2)
    scch(sc+5);
  break;
  case 18:                 // 19번 
    if(Num==18 && id== 4)
    scch(sc+5);
  break;
  case 19:                 // 20번 
    if(Num==19 && id== 4)
    scch(sc+5);
  break;
    
    if(sc>=60) {
      
    }

    else{

      
    }
  }
}

  return (
    <div>

    <div id="exam_top_txt">모의시험 테스트 문제 B</div>
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
