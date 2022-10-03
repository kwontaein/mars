
import { useState } from 'react';
import "./Cocktail_Test.scss";


function App() {
   let quest =  [
                             '1. 발포성 와인의 이름이 잘못 연결된 것은?',
                             '2. 식후 주(After Dinner Drink)로 가장 적합한 것은?',
                             '3. 리큐르 중 D.O.M. 글자가 표기되어 있는 것은?',
                             '4. 슬로우 진(Sloe Gin)의 설명 중 옳은 것은?',
                             '5. 콘 위스키(Corn Whiskey)란?',
                             '6. 일반적으로 단식 증류기(Pot Still)로 증류하는 것은?',
                             '7. 알코올성 음료를 의미하는 용어가 아닌 것은?',
                             '8. 비알코올성 음료의 분류방법에 해당되지 않는 것은?',
                             '9. 다음 중 럼에 대한 설명이 아닌 것은?',
                             '10. 탄산음료 중 뒷맛이 쌉쌀한 맛이 남는 음료는?',
                             '11. 셰이킹(Shaking) 기법에 대한 설명으로 틀린 것은?',
                             '12. 주장의 종류로 가장 거리가 먼 것은?',
                             '13. 다음 중 달걀이 들어가는 칵테일은?',
                             '14. 다음 중 휘젓기(Stirring) 기법으로 만드는 칵테일이 아닌 것은?',
                             '15. 다음 칵테일 중 Floating 기법으로 만들지 않는 것은?',
                             '16. 와인에 대한 Corkage의 설명으로 가장 거리가 먼 것은?',
                             '17. 주장(Bar)에서 기물의 취급방법으로 적합하지 않은 것은?',
                             '18. Which one is the spirit made from agave?',
                             '19. “a glossary of basic wine terms”의 연결로 틀린 것은?',
                             '20. 다음 ( )에 들어갈 단어로 가장 적합한 것은? (      ) goes well with dessert.',
                            
];
let explain =  ['포르투갈 - 에스푸만테(Espumante)',
                '코냑 - 높은 알코올 도수와 진한 향기와 풍미 때문에 식후주가 어울린다.',
                ' Beneddictine = D.O.M.',
                '슬로우 진은 리큐르(혼성주)',
                '원료의 80% 이상 옥수수를 사용한 것',
                '단식 증류기 : 헤비럼(Heavy rum, Dark rum)',
                '진저엘(Ginger Ale)은 탄산음료에 속한다.',
                '분류방법 = 청량음료, 영양음료, 기호음료',
                '럼은 당밀 발효액을 증류한 증류주이다.',
                '토닉 워터에는 쓴 맛이 있는 퀴닌이 들어있다.',
                '코블러 셰이커의 결합 순서는 Body-Stainer-Cap',
                'Snack(스낵) = 과자',
                '밀리네어에는 달걀이 들어갑니다.',
                'Gimlet 칵테일은 라임주스와 설탕, 드라이 진이 들어가는 기법',
                '블랙 러시안은 스터 기법으로 만드는 칵테일',
                '1,2,3번은 맞는말입니다.',
                '은기물은 은기물 전용 세척액에 오래담가두면 안된다.',
                '= 다음 중 아바레로 만드는 spirit을 고르시오, Agave 선인장은 테킬라의 주재료',
                ' ',
                'Ice Wine은 자연동결로 인해 농축된 포도를 언상태로 압착해 만든 디저트 와인'


];
  var ans1 =             [
                          '스페인 - 카바(Cava)',
                          '코냑(Cognac)',
                          'Sloe Gin',
                          '증류주의 일종이며, 진(Gin)의 종류이다.',
                          '원료의 50% 이상 옥수수를 사용한 것',
                          'Kentucky Straight Bourbon Whiskey',
                          'Hard Drink',
                          '청량음료',
                          '럼의 주재료는 사탕수수이다.',
                          '칼린스 믹서',
                          
                         
                          '셰이커에 얼음을 충분히 넣어 빠른 시간 안에 잘 섞이고 차게 한다.',
                          'Cocktail Bar',
                          'Millionaire',
                          'Manhattan',
                          'B&B',
                          '업장의 와인이 아닌 개인이 따로 가져온 와인을 마시고자 할 때 적용된다.',
                          '금이 간 접시나 글라스는 규정에 따라 폐기한다.',
                         
                   
                          'Tequila',
                          'Balance :  the portion of the wines odor derived from the grape variety and fermentation.',
                          'Ice Wine',
                         
];
var ans2 =             [ '독일 - 젝트(Sekt)',
                          '드라이 셰리 와인(Dry Sherry Wine)',
                          'Kahlua',
                          '보드카(Vodka)에 그레나딘 시럽을 첨가한 것이다.',
                          '원료에 옥수수 50%, 호밀 50%가 섞인 것',
                          'Grain Whisky',
                          'Liquor',
                          '영양음료',
                          '럼은 서인도제도를 통치하는 유럽의 식민정책 중 삼각무역에 사용되었다.',
                          '토닉 워터',
                          
                          '셰이커에 재료를 순서대로 Cap을 Strainer에 씌운 다음 Body에 덮는다.',
                          'Members Club Bar',
                          'Black Russian',
                          'Martini',
                          'Pousse Cafe',
                          '와인을 마시기 위해 이용되는 글라스, 직원 서비스 등에 대한 요금이 포함된다.',
                          '은기물은 은기물 전용 세척액에 오래 담가두어야 한다.',


                          'Rum',
                          'Nose : the total odor of wine composed of aroma, bouquet, and other factors.',
                          'Red Wine',
                          
];
var ans3 =        [
                          '이탈리아 - 스푸만테(Spumante)',
                          '드라이 진(Dry Gin)',
                          'Kummel',
                          '아주 천천히 분위기 있게 먹는 칵테일이다.',
                          '원료의 80% 이상 옥수수를 사용한 것',
                          'Dark Rum',
                          'Ginger Ale',
                          '발포성음료',
                          '럼은 사탕을 첨가하여 만든 리큐르이다.',
                          '진저엘',
                        
                          
                          '잘 섞이지 않는 재료들을 셰이커에 넣어 세차게 흔들어 섞는 조주기법이다.',
                          'Snack Bar',
                          'Brandy Alexander',
                          'Gibson',
                          'B-52',
                          '주로 업소가 보유하고 있지 않은 와인을 시음할 때 많이 작용된다.',
                          '크리스탈 글라스는 가능한 손으로 세척한다.',
                          
                         
                          'Vodka',
                          'Body : the weight or fullness of wine on palate.',
                          'Vermouth',
                         
];

var ans4 =       [
                          '포르투갈 - 도세(Doce)',
                          '베르무트(Vermouth)',
                          'Benedictine',
                          '진(Gin)에 야생자두(Sloe Berry)의 성분을 첨가한 것이다.',
                          '원료의 40% 이상 옥수수를 사용한 것',
                          'Aquavit',
                          'Spirits',
                          '기호음료',
                          '럼의 향, 맛에 따라 라이트 럼, 미디엄 럼, 헤비 럼으로 분류된다.',
                          '콜라',
                         
                          
                          '계란, 우유, 크림, 당분이 많은 리큐르 등으로 칵테일을 만들 때 많이 사용된다.',
                          'Pub Bar',
                          'Daiquiri',
                          'Gimlet',
                          'Black Russian',
                          '코르크로 밀봉되어 있는 와인을 서비스하는 경우에 적용되며, 스크류캡을 사용한 와인은 부과되지 않는다.',
                          '식기는 같은 종류별로 보관하며 너무 많이 쌓아두지 않는다.',
                          
                         
                          'Gin',
                          'Dry : a tasting term to denote the absence of sweetness in wine.',
                          'Dry Sherry',
];
var [Num,Numch] = useState(0);

var [sc,scch] = useState(0);
function add1(e){
  Numch(Num+1);

  var id = (e.target.value);
  switch(Num){
    case 0:                 // 1번 문제
      if(Num==0 && id== 4)
      scch(sc+5);
      console.log(sc);
    break;
    case 1:                 // 2번 
      if(Num==1 && id== 1)
      scch(sc+5);
    break;
    case 2:                 // 3번 
      if(Num==2 && id== 4)
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
      if(Num==7 && id== 3)
      scch(sc+5);
    break;
    case 8:                 // 9번 
      if(Num==8 && id== 3)
      scch(sc+5);
    break;
    case 9:                 // 10번 
      if(Num==9 && id== 2)
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
      if(Num==12 && id== 1)
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
      if(Num==15 && id== 4)
      scch(sc+5);
    break;
    case 16:                 // 17번 
      if(Num==16 && id== 2)
      scch(sc+5);
    break;
    case 17:                 // 18번 
      if(Num==17 && id== 1)
      scch(sc+5);
    break;
    case 18:                 // 19번 
      if(Num==18 && id== 1)
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
      <div id="exam_top_txt">테스트 모드 문제 B</div>
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
