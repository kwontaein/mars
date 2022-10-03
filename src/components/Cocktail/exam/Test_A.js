
import { useState } from 'react';
import "./Cocktail_Test.scss";


function App() {
   let quest =  ['1. 레드와인용 포도 품종이 아닌것은?', 
                             '2. 과일이나 곡류를 발효시켜 증류한 스프릿츠(Spirits)에 감미와 천연 추출물 등을 첨가한 것은?',
                             '3. 이탈리아 와인에 대한 설명으로 틀린 것은?',
                             '4. 리큐르 중 D.O.M. 글자가 표기되어 있는 것은?',
                             '5. 맥주의 제조과정 중 발효가 끝난 후 숙성시킬 때의 온도로 가장 적합한 것은?',
                             '6. 밀(Wheat)을 주원료로 만든 맥주는?',
                             '7. 리큐르(Liqueur)의 여왕이라고 불리며 프랑스의 수도원의 이름을 가지고 있는 것은?',
                             '8. 맥주 제조 시 호프(Hop)를 사용하는 가장 주된 이유는?',
                             '9. 다음 중 호크 와인(Hock Wine)이란?',
                             '10. 다음 중 Bitter가 아닌 것은?',
                             '11. 구매부서의 기능이 아닌 것은?',
                             '12. Pousse Cafe를 만드는 재료 중 가장 나중에 따르는 것은?',
                             '13. Manhattan 조주 시 사용하는 기물은?',
                             '14. 바텐더의 칵테일용 가니쉬 재료 손질에 관한 설명 중 가장 거리가 먼 것은?',
                             '15. Gin &Tonic에 알맞은 Glass와 장식은?',
                             '16. Classic Bar의 특징과 가장 거리가 먼 것은?',
                             '17. 위스키가 기주로 쓰이지 않는 칵테일은?',
                             '18. “5월 5일에는 이미 예약이 다 되어 있습니다.”의 표현은?',
                             '19. 다음 문장 중 틀린 것은?',
                             '20. 아래 문장의 의미는? The line is busy, I can"t put you through',
];
  let explain = ['리슬링 : 화이트 와인 포도 품종',
                 '혼성주 : 증류주나 양조주에 감미를 더한 알코올 음료',
                 '이탈리아 와인 등급체계는 3등급이다.',
                 'Beneddictine = D.O.M.',
                 '맥주는 차갑게해야 효소작용이 일어나지 않으므로 1번',
                 '호가든 : 밀맥주',
                 '샤르트뢰즈라는 프랑스 수도원이 있다.',
                 'Hop : 맥주의 쓴맛과 풍부한 향 부여, 미생물 증식을 억제시킴',
                 '독일 라인가우 지역의 호크하임이라는 마을 이름에서 유래됨',
                 'Bitter = 식전주 , 갈리아노 는 달콤한 술로 식후주에 적합하다.',
                 '판매는 바텐더가 합니다.',
                 '그레나딘시럽-> 그린크림드-> 브랜디',
                 '맨해튼(manhattan)은 stir 기법을 사용하므로 mixing glass가 필요하다',
                 '딸기가 틀렸습니다.',
                 'Highball Glass - Lemon Slice',
                 '바텐딩 기술을 선보이지 않습니다.',
                 '블랙 러시안 = 커피 리큐어와 보드카를 사용해서 만드는 칵테일이다',
                 '2번 입니다.',
                 '2번 짐좀들어드릴까요? = 물음표가 빠졌습니다.',
                 'line busy = 통화가 바쁩니다. = 통화중.'

                ];

  var ans1 =             ['리슬링(Riesling)', 
                          '양조주(Fermented Liquor)',
                          '거의 전 지역에서 와인이 생산된다.',
                          'Sloe gin',
                          '-1~3℃',
                          '산미구엘(San Miguel)',
                          '드람부이(Drambuie)',
                          '잡냄새 제거',
                          '독일 라인산 화이트 와인',
                          'Angostura',
                          '검수',
                          'Brandy',
                          '셰이커(Shaker)',
                          '레몬 슬라이스는 미리 손질하여 밀폐용기에 넣어서 준비한다.',
                          'Collins Glass - Pineapple Slice',
                          '서비스의 중점을 정중함과 편안함에 둔다.',
                          '뉴욕(New York)',
                          'We look forward to seeing you on May 5th.',
                          'Are you in a hurry?',
                          '통화 중이므로 바꿔 드릴 수 없습니다.',
];
var ans2 =             ['메를로(Merlot)', 
                          '증류주(Distilled Liquor)',
                          '지명도가 높은 와인산지로는 피에몬테, 토스카나, 베네토 등이 있다.',
                          'Kahlua.',
                          '8~10℃',
                          '호가든(Hoegaarden)',
                          '샤르트뢰즈(Chartreuse)',
                          '단백질 등 질소화합물 제거',
                          '프랑스 버건디산 화이트 와인',
                          'Campari',
                          '저장',
                          'Grenadine',
                          '믹싱 글라스(Mixing Glass)',
                          '오렌지 슬라이스는 미리 손질하여 밀폐용기에 넣어서 준비한다.',
                          'Cocktail Glass - Olive',
                          '소규모 라이브 음악을 제공한다.',
                          '로브 로이(Rob Roy)',
                          'We are fully booked on May 5th.',
                          'May I help With you your baggage',
                          '고장이므로 바꿔 드릴 수 없습니다.',
];
var ans3 =             ['삐노누아(Pinot Noir)', 
                          '혼성주(Liqueur)',
                          '이탈리아 와인 등급체계는 5등급이다.',
                          'Kummel',
                          '12~14℃',
                          '람빅(Lambic)',
                          '베네딕틴(Benedictine)',
                          '맥주색깔의 강화',
                          '스페인 호크하임엘산 레드 와인',
                          'Galliano',
                          '불출',
                          'Creme de Menthe(White)',
                          '전기 블렌더(Blender)',
                          '레몬 껍질은 미리 손질하여 밀폐용기에 넣어서 준비한다',
                          'Cordial Glass - Orange Slice',
                          '고객에게 화려한 바텐딩 기술을 선보인다.',
                          '블랙 러시안(Black Russian)',
                          'We are available on May 5th.',
                          'Will you pay in cash or with a credit card?',
                          '외출 중이므로 바꿔 드릴 수 없습니다.',
                         
];

var ans4 =             ['카베르네 소비뇽(Cabernet Sauvignon)', 
                          '아쿠아비트(Aquavit)',
                          '네비올로, 산지오베제, 바르베라, 돌체토 포도 품종은 레드와인용으로 사용된다.',
                          'Benedictine',
                          '16~20℃',
                          '포스터스(Foster"s)',
                          '체리브랜디(Cherry Brandy)',
                          '맥즙의 살균',
                          '이탈리아 피에몬테산 레드 와인',
                          'Amer Picon',
                          '판매',
                          'Creme de Cassis',
                          '주스 믹서(Juice Mixer)',
                          '딸기는 미리 꼭지를 제거한 후 깨끗하게 세척하여 밀폐용기에 넣어서 준비한다.',
                          'Highball Glass - Lemon Slice',
                          '칵테일 조주 시 정확한 용량과 방법으로 제공한다.',
                          '맨하탄(Manhattan)',
                          'I will check availability on May 5th.',
                          'What is the most famous in Seoul?',
                          '아무도 없으므로 바꿔 드릴 수 없습니다.',
                          
];
var [Num,Numch] = useState(0);

var [sc,scch] = useState(0);
function add1(e){
  Numch(Num+1);

  var id = (e.target.value);
  switch(Num){
    case 0:                 // 1번 문제
      if(Num==0 && id== 1)
      scch(sc+5);
      console.log(sc);
    break;
    case 1:                 // 2번 
      if(Num==1 && id== 3)
      scch(sc+5);
    break;
    case 2:                 // 3번 
      if(Num==2 && id== 3)
      scch(sc+5);
    break;
    case 3:                 // 4번 
      if(Num==3 && id== 4)
      scch(sc+5);
    break;
    case 4:                 // 5번 
      if(Num==4 && id== 1)
      scch(sc+5);
    break;
    case 5:                 // 6번 
      if(Num==5 && id== 2)
      scch(sc+5);
    break;
    case 6:                 // 7번 
      if(Num==6 && id== 2)
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
      if(Num==10 && id== 4)
      scch(sc+5);
      console.log(sc);
    break;
    case 11:                 // 12번 
      if(Num==11 && id== 1)
      scch(sc+5);
    break;
    case 12:                 // 13번 
      if(Num==12 && id== 2)
      scch(sc+5);
    break;
    case 13:                 // 14번 
      if(Num==13 && id== 4)
      scch(sc+5);
    break;
    case 14:                 // 15번 
      if(Num==14 && id== 4)
      scch(sc+5);
    break;
    case 15:                 // 16번 
      if(Num==15 && id== 3)
      scch(sc+5);
    break;
    case 16:                 // 17번 
      if(Num==16 && id== 3)
      scch(sc+5);
    break;
    case 17:                 // 18번 
      if(Num==17 && id== 2)
      scch(sc+5);
    break;
    case 18:                 // 19번 
      if(Num==18 && id== 2)
      scch(sc+5);
    break;
    case 19:                 // 20번 
      if(Num==19 && id== 1)
      scch(sc+5);
    break;
  }
}


  return (
    <div>
      <div id="exam_top_txt">테스트 모드 문제 A</div>
    {Num <= 19 ? 
      <div className="Exan_Test_container">
      <header className="Exam_header">
        <div id="Exam_header_text"> {quest[Num]}</div>

      <div id='Test_Exam_scroe'> 현재 점수 : {sc}</div> 

       <p><button onClick={add1} value={1} >1</button> {ans1[Num]}</p>
       
       <p><button onClick={add1} value={2}>2 </button> {ans2[Num]}</p>
       
       <p><button onClick={add1} value={3}>3 </button> {ans3[Num]}</p>
      
       <p><button onClick={add1} value={4}>4 </button> {ans4[Num]}</p>

      <div id="Commentary">해설 : {explain[Num]}</div>
      </header>
    </div>
    : <div id="end_score"> 모든 문제를 푸셨습니다. 총점 : {sc}점</div>}
    </div>
  );
}

export default App;
