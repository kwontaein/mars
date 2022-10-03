import "./Cocktail_Test.scss"
import { useState } from 'react';
import TestResult from "./Test_Result";


export default function CocktailC({name}) {
   let quest =  [
                             '1. 다음 중 생산지가 옳게 연결된 것은?',
                             '2. 우리나라 전통주에 대한 설명으로 틀린 것은?',
                             '3. 보드카의 설명으로 옳지 않은 것은?',
                             '4. Whisky의 재료가 아닌 것은?',
                             '5. 에스프레소의 커피추출이 빨리 되는 원인이 아닌 것은?',
                             '6. 브랜디에 대한 설명으로 가장 거리가 먼 것은?',
                             '7. 위스키의 원료에 따른 분류가 아닌 것은?',
                             '8. 국가지정 중요무형문화재로 지정받은 전통주가 아닌 것은?',
                             '9. 커피로스팅의 정도에 따라 약한 순서에서 강한 순서대로 나열한 것으로 옳은 것은?',
                             '10. 혼합물을 구성하는 각 물질의 비등점의 차이를 이용하여 만드는 술을 무엇이라 하는가?',
                             
                             '11. 주장(Bar)에서 기물의 취급방법으로 적합하지 않은 것은?',
                             '12. 다음 중 소믈리에(Sommelier)의 주요 임무는?',
                             '13. 바의 매출액 구성요소 산정방법 중 옳은 것은?',
                             '14. 바(Bar) 기물이 아닌 것은?',
                             '15. 글라스 세척 시 알맞은 세제와 세척순서로 짝지어진 것은?',
                             '16. Rum 베이스 칵테일이 아닌 것은?',
                             '17. 다음 중 보드카(Vodka)를 주재료로 사용하지 않는 칵테일은?',
                            
                             '18. 다음 중 의미가 다른 하나는?',
                             '19. Which one is the spirit made from agave?',
                             '20. Dry Gin, Egg White, and Grenadine are the main ingredients of (괄호).'
];
  var ans1 =             [
                          '비시수 - 오스트리아',
                          '증류주 제조기술은 고려시대 때 몽고에 의해 전래되었다.',
                          '슬라브 민족의 국민주로 애음되고 있다.',
                          '맥아',
                          '너무 굵은 분쇄입자',
                          '포도 또는 과실을 발효하여 증류한 술이다.',
                          '몰트 위스키',
                          '충남 면천두견주',
                          'American Roasting→German Roasting→French Roasting→Italian Roasting',
                          '발효주',
                         

                          '금이 간 접시나 글라스는 규정에 따라 폐기한다.',
                          '기물세척(Utensil Cleaning)',
                          '매출액 = 고객수 ÷ 객단가',
                          'Bar Spoon',
                          '산성세제, 더운물 - 찬물',
                          'Daiquiri',
                          'Cosmopolitan',
                          
                          'Its my treat this time',
                          'Tequila',
                          'Bloody Mary.'
];
var ans2 =             [
                          '셀처수 - 독일',
                          '탁주는 쌀 등 곡식을 주로 이용하였다.',
                          '보드카는 러시아에서만 생산된다.',
                          '보리',
                          '약한 탬핑 강도',
                          '코냑 브랜디에 처음으로 별표의 기호를 도입한 것은 1865년 헤네시(Hennessy)사에 의해서이다.',
                          '그레인 위스키',
                          '진도 홍주',
                          'German Roasting→Italian Roasting→American Roasting→French Roasting',
                          '발아주',
                          
                          '은기물은 은기물 전용 세척액에 오래 담가두어야 한다.',
                          '주류저장(Store Keeper)',
                          '고객수 = 고정고객 × 일반고객',
                          'Shaker',
                          '중성세제, 찬물 - 더운물',
                          'Cuba Libre',
                          'Kiss of Fire',
                          
                          'I"ll pick up the tab.',
                          'Rum',
                          'Eggnog'
];
var ans3 =             [
                          '에비앙수 - 그리스',
                          '탁주, 약주, 소주의 순서로 개발되었다.',
                          '보드카의 원료는 주로 보리, 밀, 호밀, 옥수수, 감자 등이 사용된다.',
                          '호밀',
                          '너무 많은 커피 사용',
                          'Brandy는 저장기간을 부호로 표시하며 그 부호가 나타내는 저장기간은 법적으로 정해져 있다.',
                          '포트스틸 위스키',
                          '서울 문배주',
                          'Italian Roasting→German Roasting→American Roasting→French Roasting',
                          '증류주',
                          
                          '크리스탈 글라스는 가능한 손으로 세척한다.',
                          '와인판매(Wine Steward)',
                          '객단가 = 매출액 ÷ 고객수',
                          'Chaser',
                          '산성세제, 찬물 - 더운물',
                          'Mai Tai',
                          'Apple Martini',
                        
                          'Let"s go Dutch.',
                          'Vodka',
                          'Tom and Jerry'
];

var ans4 =             [
                          '페리에수 - 이탈리아',
                          '청주는 쌀의 향을 얻기 위해 현미를 주로 사용한다.',
                          '보드카에 향을 입힌 보드카를 플레이버 보드카라 칭한다.',
                          '감자',
                          '높은 펌프 압력',
                          '브랜디의 증류는 와인을 2~3회 단식 증류기(Pot Still)로 증류한다.',
                          '블렌디드 위스키',
                          '경주 교동법주',
                          'French Roasting→American Roasting→Italian Roasting→German Roasting',
                          '양조주',
                          
                          '식기는 같은 종류별로 보관하며 너무 많이 쌓아두지 않는다.',
                          '칵테일조주(Cocktail Mixing)',
                          '판매가 = 기준단가 × (재료비/100)',
                          'Jigger',
                          '중성세제, 더운물 - 찬물',
                          'Stinger',
                          'Margarita',
                          
                          'It"s on me.',
                          'Gin',
                          'Pink Lady'
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
      if(Num==1 && id== 4)
      scch(sc+5);
    break;
    case 2:                 // 3번 
      if(Num==2 && id== 2)
      scch(sc+5);
    break;
    case 3:                 // 4번 
      if(Num==3 && id== 4)
      scch(sc+5);
    break;
    case 4:                 // 5번 
      if(Num==4 && id== 3)
      scch(sc+5);
    break;
    case 5:                 // 6번 
      if(Num==5 && id== 3)
      scch(sc+5);
    break;
    case 6:                 // 7번 
      if(Num==6 && id== 3)
      scch(sc+5);
    break;
    case 7:                 // 8번 
      if(Num==7 && id== 2)
      scch(sc+5);
    break;
    case 8:                 // 9번 
      if(Num==8 && id== 1)
      scch(sc+5);
    break;
    case 9:                 // 10번 
      if(Num==9 && id== 3)
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
    if(Num==12 && id== 3)
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
    if(Num==16 && id== 4)
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
    
  : <TestResult name={name} score={sc} mode="cocktail"/>
  }
   </div>
  );
}

