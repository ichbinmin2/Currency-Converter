<h1 align="middle">2022 원티드 프리온보딩 프론트엔드 코스 기업과제</br>
- 와이어바알리/레드브릭 </h1>
<p align="middle">⚡️ React와 currencylayer API로 구현하는 환율 전환기 어플리케이션</p>
<p align="middle">
<img width="929" alt="image" src="https://user-images.githubusercontent.com/53133662/177027227-c8da508b-34a8-4adb-b0c4-864799063b50.png">
</p>

<br />

## 🔎 프로젝트 소개 ( [Demo](https://onbasic-currency-converter.herokuapp.com) )

**currencylayer API를 이용한 환율 전환기 어플리케이션을 구현했습니다.**

currencylayer API를 이용하여 **Select Box** 환율 전환기 어플리케이션 입니다. open API를 이용하여 세 개(한국/일본/필리핀)의 나라의 실시간 환율 데이터를 받아와 자동으로 계산할 수 있도록 했습니다. 또한, 공통된 계산 기능 및 콤마 처리 등을 찾아서 다른 팀의 환율 구현기에 적용할 수 있도록 utils 를 최대한 이용하였고, 공공 API를 배포할 시에 발생하는 CORS error 이슈를 프록시 서버를 히로쿠로 배포하여 해당 서버에 API를 받아오는 방식으로 배포를 처리했습니다.  

<br />

## 📚 기술 스택

| React.js |   SCSS   | 
| :--------: |  :-----: |
|  <img src="https://user-images.githubusercontent.com/21965795/176630651-1248191d-432c-45ac-b876-9e5ff54e36f9.png" width="100px" > |  <img src="https://user-images.githubusercontent.com/53133662/177027346-d634e99c-68b0-4c2d-8bd2-5aa35123580c.png"  width="100px"/>|

<br />


## 프로젝트 구조 설명

````bash
src
├── App.css
├── App.js
├── App.test.js
├── components
│   ├── index.js
│   └── secondconverter
│       ├── Contents.jsx
│       ├── Contents.scss
│       ├── Header.jsx
│       ├── Header.scss
│       ├── Selectbox.jsx
│       ├── Selectbox.scss
│       ├── Tab.jsx
│       ├── Tab.scss
│       └── optionObject.js
├── hooks
│   └── useData.js
├── index.css
├── index.js
├── pages
│   ├── FirstConverter.jsx
│   ├── FirstConverter.scss
│   ├── Main.jsx
│   ├── Main.scss
│   ├── SecondConverter.jsx
│   └── SecondConverter.scss
├── styles
│   ├── _colors.scss
│   └── _mixin.scss
└── utils
    ├── api.js
    ├── comma.js
    ├── constants.js
    └── date.js
````

<br/>

## 📌 프로젝트 과정 및 이슈 처리를 담은 회고

### [**프로젝트 회고 보러가기!**](https://velog.io/@ichbinmin2/원티드-프리온보딩-프론트엔드-과정-1차-과제-환율-계산기)

<br/>

## ✅ 과제 주요 구현 내용(민지연)

**Select Box 전환기**

![ezgif com-gif-maker - 2022-07-03T152845 645](https://user-images.githubusercontent.com/53133662/177027911-b980e2d3-7bb6-4dae-885e-67eeeb2931a7.gif)

✓ currencylayer API 데이터를 실시간으로 활용

✓ select 에서 option 값(수취국가) 선택하여 저장하고, option 값(수취국가)수취국가에 따라 하단 환율값 변동 구현

✓ Submit을 누르면 수취금액이 KRW, JPY, PHP 중 하나로 계산, 결과값 출력

✓ utils 활용해 환율과 수취금액 소숫점 2째자리까지, 3자리 이상 되면 콤마(,) 처리

✓ 조건식에 따른 input 값이 올바르지 않을 경우 “송금액이 바르지 않습니다"라는 에러 메시지를 alert 창으로 띄우도록 처리

✓ 수취금액을 입력하지 않거나, 0보다 작은 금액이거나 10,000 USD보다 큰 금액, 혹은 바른 숫자가 아니라면 “송금액이 바르지 않습니다"라는 에러 메시지를 alert 창으로 띄우도록 처리

✓ proxy 서버(cors-anywher)를 기반으로 한 Heroku 배포

<br/>

## ✍🏻 추가 리팩토링 : [CORS ERRO 이슈 처리 (update : 2/11)](https://velog.io/@ichbinmin2/원티드-프리온보딩-프론트엔드-과정-1차-과제-환율-계산기)

첫번째 과제를 배포하지 못한 게 계속 마음에 걸렸던 터라 시간적 여유가 생기자마자 혼자서라도 배포를 시도 해보기로 했다. 이전에 Heroku로 배포를 해본 상태였기 때문에 [(세번째 과제 회고 보러가기)](https://velog.io/@ichbinmin2/원티드-프리온보딩-프론트엔드-과정-3차-과제-견적-요청-페이지) 동일한 방식으로 배포를 하면 될 것이라 생각하고 바로 배포를 진행하게 되었다. 

#### ☑️ 이슈 확인 
       
Heroku로 배포를 하던 중 나는 이런 에러 메세지를 마주하게 된다 🚨

```
'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.

```

그간 currencylayer API로 데이터를 받아오고 있었기 때문에 공공 API와 같은 교차 URL을 호출할 때 경험하게 되는 CORS 에러가 발생한 것 같았다. 에러를 해결해보겠다고 검색했다가 어느 답변에서는 프록시 서버를 직접 구축해야 한다는 이야기도 있었기에 약간 겁을 먹기도 했다. 간단한 프로젝트인데 프록시 서버를 직접 구축해야 한다니..?! 그러던 중에 CORS Anywhere와 Heroku를 이용하면 간단하게 프록시 서버를 구축할 수 있다는 또 다른 온라인 사수님들의 조언을 듣고 그래 바로 이 방법이다! 싶어서 여러 레퍼런스를 참고하여 배포를 진행하게 되었다.

#### ☑️ 어떻게 해결했을까?   

> **CORS Anywhere**는 프록시 된 요청에 CORS 헤더를 추가하는 NodeJS 프록시다. MIT 라이선스로 자유롭게 사용할 수 있으며, whitelist, blacklist, rate limit 등의 다양한 설정도 간단하게 할 수 있는 장점이 있다.

#### CORS Anywhere Repository Fork

**CORS Anywhere** 를 이용해서 프록시 서버를 구축하기 전, 가장 첫번째로 해야할 일은 cors-anywhere의 Repository 로 이동하여 Fork를 해주는 일이었다. 바로 해당 [Git Repository](https://github.com/Rob--W/cors-anywhere) 로 이동하여 내 계정으로 Fork를 해주었다. 

![](https://images.velog.io/images/ichbinmin2/post/9ad0b425-4394-4784-ac3c-e5bd9546ca98/image.png)

#### Heroku 설정하기

이제 NodeJS 프록시 배포를 위한 Heroku 설정이 필요하다. Heroku에 가입되어 있지 않다면, 미리 가입을 해준다. (혹시 Heroku에 가입하는 방법이 궁금하다면 이 분의 [레퍼런스](https://velog.io/@ansfls/Heroku로-간단하게-웹-사이트-배포하기) 를 참고하자.) 나는 이미 Heroku에 가입이 된 상태였기 때문에 로그인을 한 뒤 Create new app 을 눌러 새로운 app을 생성해주었다.

![](https://images.velog.io/images/ichbinmin2/post/3a36d048-5af0-4ad4-9b9a-e895a3175145/image.png)![](https://images.velog.io/images/ichbinmin2/post/26653b76-e094-407c-bebf-d3a61b157011/image.png)

#### Heroku app과 Github repository 연결 및 배포하기

생성한 app 페이지로 이동하여 Deployment method 섹션에서 나의 Github 계정과 연동시켜준다. 그리고 Fork 해주었던 cors-anywhere의 Repository를 연결해주었다.

![](https://images.velog.io/images/ichbinmin2/post/db3c97b3-d2e3-4ecb-9c5a-b829a761513b/image.png)

Repository의 연결이 완료된 후, 이 Repository 의 master branch 를 선택해서 Deploy Branch으로 최종 배포를 진행해주었다.

![](https://images.velog.io/images/ichbinmin2/post/2ffb02c7-6341-4b8c-b7f7-9c246f4e075d/image.png)

드디어 heroku 의 서브도메인이 생성되고 최종적으로 나만의 CORS proxy 서버가 만들어졌다. 👏  이제 Open app 버튼을 눌러 deploy 된 사이트가 제대로 배포가 되었는지 확인해주었다.

![](https://images.velog.io/images/ichbinmin2/post/2e46fe88-a1b5-4135-bcdf-77abf4d6723f/image.png)

성공적으로 배포가 되었음을 알 수 있었다. 튜토리얼에 따르면, 이제 마지막으로 프록시 서버 주소(`https://sixted-proxy-cors-anywhere.herokuapp.com`)에 호출하고자 했던 API URL만 붙여주면 프록시 서버와 연결하는 과정은 모두 완료한 것이나 다름 없었다. (거의 다왔다!) 

> ex) 만약 https://first.sample.com을 호출하고 싶으면 아래처럼 호출하면 된다. 
```
https://sixted-proxy-cors-anywhere.herokuapp.com/https://first.sample.com
```

이제 API 를 호출해주었던 `getApi` 로직으로 이동해서 URL을 수정해주기로 했다.

#### 주소 수정하기

```js
import axios from "axios";

export const getApi = async () => {
  const proxyAddress =
    "https://sixted-proxy-cors-anywhere.herokuapp.com/" +
    "http://api.currencylayer.com/live?access_key=" +
    process.env.REACT_APP_CURRENCYLAYER_API_KEY;

  const response = await axios.get(proxyAddress, {
    mode: "cors",
  });

  return response.data;
};
 
```    

이전에 호출하고자 했던 API 주소 앞에, 배포한 proxy 주소(`https://sixted-proxy-cors-anywhere.herokuapp.com`)를 붙여주었다. 참고로 API key는 환경변수 (`.env`)로 지정하여 사용하였다. 마지막으로 axios의 `get()`을 이용해서 주소를 받아오고, axios의 `mode`는 `"cors"`로 설정해서 `response`에 넣어줄 수 있도록 했다.

#### 프로젝트 repo를 heroku 배포하기

드디어 프로젝트의 배포만 남았다! 앞서 진행한 이전과 동일한 방식으로 새로운 app을 만들고 → Github 계정과 연동하고 → 우리의 프로젝트 repo를 연결한 뒤 → main branch를 deploy 해주었다. 

이렇게 cors-anywhere를 이용하여 간단하게 proxy 서버를 구축하고, cors 에러 없이 성공적으로 배포를 완료할 수 있었다. 

</br>

## 👯‍♀️ 팀 Repo 링크 가기

["On-Basic" Repo 바로가기](https://github.com/On-Basic/Currency-Converter)

<br />


## 🖥 설치 및 시작하는 법

**프로젝트 클론**

```
$ git clone https://github.com/On-Basic/currency-converter.git
```

**패키지 설치**

```
$ npm install
```

**서버 실행**

```
$ npm start
```
