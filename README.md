# Economic Indicator Download CLI

## Usage

### Installation

```bash
# npm install eidc

git clone https://github.com/Seungwoo321/eidc.git
npm i -g ./eidc

```

### Configurations

- KOSIS와 ECOS는 API키를 발급받고 환경구성을 진행해주세요.
- OECD는 API키가 필요하지 않습니다.

```bash
eidc configure [kosis|oecd]
```

### Base

```bash
$ eidc
Usage: eidc <command> [options]

Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  configure [options] <source>
  oecd [options]
  ecos [options]
  help [command]                display help for command

  Run eidc <command> --help for detailed usage of given command.
```

### Download from OECD

```bash
eidc oecd [options]
```

- OECD의 선행지수 순환변동치

```bash
eidc oecd --data-url "https://sdmx.oecd.org/public/rest/data/OECD.SDD.STES,DSD_STES@DF_CLI,4.0/KOR.M.LI...AA...H?startPeriod=2023-11&dimensionAtObservation=AllDimensions&detail=DataOnly&format=jsondata"
```

### Download from KOSIS

KOSIS API 호출에서 파라메터 방식으로 데이터를 호출하는 `/Param/statisticsParameterData.do`을 제공합니다.

```bash
eidc kosis [options]
```

- 기간조회는 방법1 또는 방법2 중에서 한가지만 선택해야 됩니다.

---------------------
옵션 | 기본값 | 필수| 설명|
----|------|----|----|
orgId| 없음| 예||
tblId| 없음| 예||
itmId| 없음| 예||
prdSe| 없음| 예||
newEstPrdCnt||예|기간조회 방법1. 최신자료 기준 조회시 최근 수록 시점 개수|
prdInterval||예|기간조회 방법1. 최신자료 기준 조회시 최근 수록 시점 간격|
startPrdDe||예|기간조회 방법2. 시점 기준 조회시 시작 수록 시점|
endPrdDe||예|기간조회 방법2. 시점 기준 조회시 종료 수록 시점|
objL1| 없음| 예||
objL2| 없음| 아니오||
objL3| 없음| 아니오||
objL4| 없음| 아니오||
objL5| 없음| 아니오||
objL6| 없음| 아니오||
objL7| 없음| 아니오||
objL8| 없음| 아니오||

#### KOSIS Real Case

- TODO

<!-- ```bash

``` -->

### Download from ECOS

ECOS API에서 `StatisticSearch` 서비스를 제공합니다

```bash
eidc ecos [options]
```

---------------------
옵션 | 기본값 | 필수| 설명|
----|------|----|----|
serviceName|StatisticSearch|N|기본값|
language|kr|N|기본값|
startCount|1|N|기본값|
endCount|1|N|기본값|
statCode|Y|||
period|M|N|기본값|
searchStartDate||Y||
searchEndDate||Y||
itemCode1||Y||
itemCode2||N||
itemCode3||N||
itemCode4||N||

#### ECOS Real Case

- 시장금리 (일별 / 월,분기,년)

```bash
# 시장금리 국고채 (1년) 일별
eidc ecos --statCode "817Y002" --itemCode1 "010190000" --period "D" --searchStartDate "20240101" --searchEndDate "20240201" --endCount "30"

# 시장금리 국고채 (3년) 일별
eidc ecos --statCode "817Y002" --itemCode1 "010200000" --period "D" --searchStartDate "20240101" --searchEndDate "20240201" --endCount "30"

# 시장금리 국고채 (10년) 일별
eidc ecos --statCode "817Y002" --itemCode1 "010210000" --period "D" --searchStartDate "20240101" --searchEndDate "20240201" --endCount "30"

# 시장금리 국고채 (1년) 월별
eidc ecos --statCode "721Y001" --itemCode1 "5030000" --period "M" --searchStartDate "202401" --searchEndDate "202402"

# 시장금리 국고채 (3년) 월별
eidc ecos --statCode "721Y001" --itemCode1 "5020000" --period "M" --searchStartDate "202401" --searchEndDate "202402"

# 시장금리 국고채 (10년) 월별
eidc ecos --statCode "721Y001" --itemCode1 "5050000" --period "M" --searchStartDate "202401" --searchEndDate "202402"

# 회사채수익률 (AA-) 월
eidc ecos --statCode "721Y001" --itemCode1 "7020000" --period "M" --searchStartDate "202401" --searchEndDate "202402"
```

- 기준금리 (한국은행 기준금리 및 여수신금리)

```bash
# 한국은행 기준금리
## 월
eidc ecos --statCode "722Y001" --itemCode1 "0101000" --period "M" --searchStartDate "202401" --searchEndDate "202402"
## 일
eidc ecos --statCode "722Y001" --itemCode1 "0101000" --period "D" --searchStartDate "20240101" --searchEndDate "20240201" --endCount "31"
```

- 경제성장률 (분기지표)

```bash
# 국내총생산(GDP)(계절조정, 명목) 
eidc ecos --statCode "200Y003" --itemCode1 "1400" --period "Q" --searchStartDate "2023Q3" --searchEndDate "2023Q3"

# 국내총생산(GDP)(계절조정, 실질) 
eidc ecos --statCode "200Y004" --itemCode1 "1400" --period "Q" --searchStartDate "2023Q3" --searchEndDate "2023Q3"

# 국내총생산(GDP)(원계열, 명목)
eidc ecos --statCode "200Y005" --itemCode1 "1400" --period "Q" --searchStartDate "2023Q3" --searchEndDate "2023Q3"

# 국내총생산(GDP)(원계열, 실질)
eidc ecos --statCode "200Y006" --itemCode1 "1400" --period "Q" --searchStartDate "2023Q3" --searchEndDate "2023Q3"

# GDP디플레이터 (2015=100)
eidc ecos --statCode "200Y011" --itemCode1 "1400" --period "Q" --searchStartDate "2023Q3" --searchEndDate "2023Q3"

# 경제성장률 (실질, 계절조정, 전기비)
eidc ecos --statCode "200Y002" --itemCode1 "10111" --period "Q" --searchStartDate "2023Q3" --searchEndDate "2023Q3"

# 경제성장률 (실질, 원계열, 전년동기비)
eidc ecos --statCode "200Y002" --itemCode1 "10211" --period "Q" --searchStartDate "2023Q3" --searchEndDate "2023Q3"

# GDP 디플레이터 등락률 (원계열, 전년동기비)
eidc ecos --statCode "200Y002" --itemCode1 "301" --period "Q" --searchStartDate "2023Q3" --searchEndDate "2023Q3"
```

- 경제성장률 (연간지표)

```bash
# GDP디플레이터 (2015=100)
eidc ecos --statCode "200Y011" --itemCode1 "1400" --period "A" --searchStartDate "2022" --searchEndDate "2022"
eidc ecos --statCode "200Y001" --itemCode1 "90103" --period "A" --searchStartDate "2022" --searchEndDate "2022"

# GDP디플레이터 등락률 (%)
eidc ecos --statCode "200Y001" --itemCode1 "9010301" --period "A" --searchStartDate "2022" --searchEndDate "2022"
    
# 국내총생산(GDP)(명목, 원화표시)
eidc ecos --statCode "200Y001" --itemCode1 "10101" --period "A" --searchStartDate "2022" --searchEndDate "2022"
    
# 국내총생산(GDP)(명목, 달러표시)
eidc ecos --statCode "200Y001" --itemCode1 "1010101" --period "A" --searchStartDate "2022" --searchEndDate "2022"
    
# 국내총생산(실질성장률)
eidc ecos --statCode "200Y001" --itemCode1 "20101" --period "A" --searchStartDate "2022" --searchEndDate "2022"
```

- 환율 > 일일환율 (대원화환율)

```bash
# 원/미국달러 (매매기준율) (일별)
eidc ecos --statCode "731Y001" --itemCode1 "0000001" --period "D" --searchStartDate "20230101" --searchEndDate "20230131" --endCount 31

# 원/위안 (매매기준율) (일별)
eidc ecos --statCode "731Y001" --itemCode1 "0000053" --period "D" --searchStartDate "20230101" --searchEndDate "20230131" --endCount 31

# 원/일본엔(100엔) (일별)
eidc ecos --statCode "731Y001" --itemCode1 "0000002" --period "D" --searchStartDate "20230101" --searchEndDate "20230131" --endCount 31
```

- 환율 > 평균환율/기말환율 (대원화환율, 평균자료/말일자료)
  - 기본이 평균자료로 조회되며 통계항목코드2가 0000100이고 말일자료는 통계항목코드2가 0000200로 요청한다.

```bash

# 원/미국달러 (매매기준율) (월별)
eidc ecos --statCode "731Y004" --itemCode1 "0000001" --period "M" --searchStartDate "202401" --searchEndDate "202401"
eidc ecos --statCode "731Y004" --itemCode1 "0000001" --period "M" --searchStartDate "202401" --searchEndDate "202401" --itemCode2 "0000200"

# 원/위안 (매매기준율) (월별)
eidc ecos --statCode "731Y004" --itemCode1 "0000053" --period "M" --searchStartDate "202401" --searchEndDate "202401"
eidc ecos --statCode "731Y004" --itemCode1 "0000053" --period "M" --searchStartDate "202401" --searchEndDate "202401" --itemCode2 "0000200"

# 원/일본엔(100엔) (월별)
eidc ecos --statCode "731Y004" --itemCode1 "0000002" --period "M" --searchStartDate "202401" --searchEndDate "202401"
eidc ecos --statCode "731Y004" --itemCode1 "0000002" --period "M" --searchStartDate "202401" --searchEndDate "202401" --itemCode2 "0000200"
```

- 국제 상품 가격
- [참고](#국제상품 코드/통화단위 목록 (국제 상품 가격))

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

## Reference

### 국제상품 코드/통화단위 목록 (국제 상품 가격)

1. 에너지 - 010000
    - 원유- WTI - 010101 달러/배럴
    - 원유- Dubai - 010102 달러/배럴
    - 원유- Brent - 010103 달러/배럴
    - 천연가스 - 010201 달러/MMBtu
2. 금속 - 040000
    - 철광석 - 040205 달러/톤
    - 구리 - 040202 달러/톤
    - 알루미늄 - 040203 달러/톤
    - 니켈 - 040204 달러/톤
    - 아연 - 040201 달러/톤
    - 금 - 040101 달러/트로이온스
3. 농산물 - 020000
    - 대두 - 030201 달러/톤
    - 옥수수 - 030101 달러/톤
    - 소맥 - 030102 달러/톤
    - 원당 - 030301 센트/파운드
    - 원면 - 020101 센트/파운드
