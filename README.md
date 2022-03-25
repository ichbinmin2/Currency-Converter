# ✔️ 원티드 프리 온보딩 - Currency Exchange Converter

## 와이어바알리/레드브릭

<img width="250" alt="redbrick" src="https://user-images.githubusercontent.com/53133662/153596609-11c076d4-934b-43b3-b002-b0652f2ddd64.png">
<img width="250" alt="redbrick" src="https://user-images.githubusercontent.com/53133662/153596614-d770c2d9-e4f4-4c53-b3bf-e73efacb8e5c.png">


## 프로젝트 소개

currencylayer API를 활용하여 Select Box 전환기와 Tab Select 전환기, 두 종류의 환율 전환기를 각각 동작하도록 구현하는 것을 목표로 하는 프로젝트입니다.

## 팀원 소개

🏃‍♂️ [민지연](https://github.com/ichbinmin2), [박서윤](https://github.com/seoyuuun)(팀장) : 1번 Select Box Converter 구현 <br/>
🏃‍♀️ [박서영](https://github.com/ongddree), [양다혜](https://github.com/dahye-program) : 2번 Tab Select Converter 구현

## 배포 주소

[배포 사이트 바로가기](https://onbasic-currency-converter.herokuapp.com/)

## 기능별 영상

### 1. Select Box 전환기 (민지연, 박서윤)

<br/>
실시간으로 currencylayer API data를 받아온 뒤 select 된 option 값(나라)에 따른 환율값 실시간 변동 구현
<br/>
utils 활용해 환율과 수취금액 소숫점 2째자리까지, 3자리 이상 되면 콤마(,) 처리
<br/>
<br/>
<img src="https://user-images.githubusercontent.com/53133662/151083076-0cad58cc-a165-47fb-a38b-8590f1ab2813.gif">
<br/>
<br/>
조건식에 따른 input 값이 올바르지 않을 경우 “송금액이 바르지 않습니다"라는 에러 메시지를 alert 창으로 띄우도록 처리
<br/>
<br/>
<img src="https://user-images.githubusercontent.com/53133662/151083796-51247a9a-ecad-45f0-b104-4d31f15719bb.png">
<br/>

### 2. Tab Select 전환기 (박서영, 양다혜)

<br/>
1000 이상 입력할 경우 자동적으로 '1,000'과 같이 변경
<br/>
<br/>
<img src ="https://user-images.githubusercontent.com/58350897/151088039-12fa6431-ffc7-49e7-8040-3505100a00e4.gif">
<br/>
<br/>
탭 메뉴 클릭 시 환율 타이틀 및 기준일 정보 동기화 변경 <br/>
(양국 간 환율 정보 API 연결에 실패해 탭 메뉴 클릭시 USD/국가 정보 동기화로 축소 구현)
<br/>
<br/>
<img src="https://user-images.githubusercontent.com/93420227/151109528-1030c300-c30c-4515-ab3e-338f184cae0f.gif">
<br/>
<br/>
드롭다운 메뉴 선택할 경우, 탭 title을 선택한 값을 제외하고 메뉴 자동 생성
<br/>
<br/>
<img src="https://user-images.githubusercontent.com/93420227/151110103-8163c0b4-1cec-4493-9b77-f52ca9a7dca4.gif">
<br/>

## 과제 구현 목록

### 1. Select Box 전환기 (민지연, 박서윤)

☑️ currencylayer API 데이터를 실시간으로 활용

☑️ select box에서 option 값 선택해 저장

☑️ 수취국가에 따라 하단 환율값 변동

☑️ 송금액 input창에 조건에 부합하지 않는 값 입력 시, 팝업창 출력

☑️ Submit을 누르면 수취금액이 KRW, JPY, PHP 중 하나로 계산, 결과값 출력

☑️ utils 활용해 환율과 수취금액 소숫점 2째자리까지, 3자리 이상 되면 콤마(,) 처리

☑️ 수취금액을 입력하지 않거나, 0보다 작은 금액이거나 10,000 USD보다 큰 금액, 혹은 바른 숫자가 아니라면 “송금액이 바르지 않습니다"라는 에러 메시지를 alert 창으로 띄우도록 처리

☑️ proxy 서버(cors-anywher)를 기반으로 한 Heroku 배포

<br/>

### 2. Tab Select 전환기 (박서영, 양다혜)

☑️ 유저값 input창에 숫자만 입력 가능

☑️ 유저값 input창에 1000 이상을 입력할 경우 자동적으로 “1,000”와 같이 변경

☑️ 드롭다운 메뉴를 선택할 경우, 탭 title을 선택한 값을 제외하고 “USD”로 생성

☑️ 사용자의 수치 입력 혹은 드롭다운 메뉴를 이용한 통화 변경시 변경될 환율 타이틀, 기준일 정보 동기화 변경

<br/>

## 프로젝트 구조 설명

````bash
├── node_modules
├── .github
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── componentName
│   ├── costants
│   ├── hooks
│   ├── pages
│   ├── styles
│   └── utils
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md```


````

<br/>

## 과제 후기

### 🙋‍♀️ 민지연 [프로젝트 회고](https://velog.io/@ichbinmin2/원티드-프리온보딩-프론트엔드-과정-1차-과제-환율-계산기)

<br/>

## 설치 및 시작하는 법

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
