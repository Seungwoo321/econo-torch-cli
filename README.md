# Economic Indicator Download CLI

## Usage

### 환경구성

- KOSIS와 ECOS는 API키를 발급받고 환경구성을 진행해주세요.
- OECD는 API키가 필요하지 않습니다.

```bash
eidc [kosis][ecos] configure
```

### KOSIS 다운로

KOSIS API 호출에서 파라메터 방식으로 데이터를 호출하는 `/Param/statisticsParameterData.do`을 제공합니다.

```bash
eidc kosis [options]
```

- 기간조회는 방법1 또는 방법2 중에서 한가지만 선택해야 됩니다.

---------------------
옵션 | 기본값 | 필수| 설명
----|------|----|----
orgId| 없음| 예|
tblId| 없음| 예|
itmId| 없음| 예|
prdSe| 없음| 예|
newEstPrdCnt||예|기간조회 방법1. 최신자료 기준 조회시 최근 수록 시점 개수
prdInterval||예|기간조회 방법1. 최신자료 기준 조회시 최근 수록 시점 간격
startPrdDe||예|기간조회 방법2. 시점 기준 조회시 시작 수록 시점
endPrdDe||예|기간조회 방법2. 시점 기준 조회시 종료 수록 시점
objL1| 없음| 예|
objL2| 없음| 아니오|
objL3| 없음| 아니오|
objL4| 없음| 아니오|
objL5| 없음| 아니오|
objL6| 없음| 아니오|
objL7| 없음| 아니오|
objL8| 없음| 아니오|

### ECOS 다운로드

ECOS API에서 `StatisticSearch` 서비스를 제공합니다

```bash
eidc ecos [options]
```

---------------------
옵션 | 기본값 | 필수| 설명
----|------|----|----
serviceName
language
startCount
endCount
stateCode
period
searchStartDate
searchEndDate
itemCode1
itemCode2
itemCode3
itemCode4

### OECD 다운로드

<!-- ---------------------
지표명   | 지표코드 |
---------|----------|
동행지수 순환변동치 | CCI|
선행지수 순환변동치 | CLI|
선행종합지수 | LCI|
코스피 지수 | KOSPI|
월별 소비자 물가 등락률 전년 동월비 (%) | CPI_YoY|
코스피 시가총액 | KOSPI_MarketCap |
경제 성장률(GDP)(실질, 계절조정, 전기비) | RGDP_QoQ_SA|
경제 성장률(GDP)(실질, 원계열, 전년동기비) | RGDP_YoY |
GDP 디플레이터 등락률 (원계열, 전년동기비) | GDP_D_YoY |
국내총생산(명목,원화표시) (십억원) | NGDP_KRW | -->