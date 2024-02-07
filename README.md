# Economic Indicator Download CLI

## How To CLI

### Usage

```bash
eidc [source] [command] [metric] [options]
```

### source

- kospi
- ecos
- oecd

### command

- configuration
- download

### eidc [source] configure

### eidc [source] download

### metric

#### kospi

```bash
eidc kospi download CCL --priod 
```

---------------------
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
국내총생산(명목,원화표시) (십억원) | NGDP_KRW |

#### ecos

#### oecd
