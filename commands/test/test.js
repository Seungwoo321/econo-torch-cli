import { kosis, ecos, oecd } from "eidl";

const KOSIS_API_KEY = '';

kosis.getIndicatorData({
    apiKey: KOSIS_API_KEY,
    orgId: '101',
    tblId: 'DT_1C8015',
    itmId: 'T1',
    objL1: 'B03',
    startPrdDe: '202301',
    endPrdDe: '202302'
}).then(data => {
    console.log(data)
})

/** KOSIS 동행지수 순환변동치 (CCI) */
kosis.getIndicatorData({
    apiKey: KOSIS_API_KEY,
    orgId: '101',
    tblId: 'DT_1C8015',
    itmId: 'T1',
    objL1: 'B03',
    startPrdDe: '202301',
    endPrdDe: '202302'
}).then(data => {
    console.log(data)
})

kosis.getIndicatorLatestData({
    apiKey: KOSIS_API_KEY,
    orgId: '101',
    tblId: 'DT_1C8015',
    itmId: 'T1',
    objL1: 'B03',
}).then(data => {
    console.log(data)
})

/** KOSIS 선행지수 순환변동치 (CLI) */
kosisService.getIndicatorData({
    orgId: '101',
    tblId: 'DT_1C8015',
    itmId: 'T1',
    objL1: 'A03'
}).then(data => {
    console.log(data)
})

/** KOSIS 선행종합지수 (LCI) */
kosisService.getIndicatorData({
    orgId: '101',
    tblId: 'DT_1C8016',
    itmId: 'T1',
    objL1: 'A01',
    // newEstPrdCnt: '10'
}).then(data => {
    console.log(data)
})

/** KOSIS 코스피 지수 */
kosisService.getIndicatorData({
    orgId: '343',
    tblId: 'DT_343_2010_S0029',
    itmId: '13103792816T1',
    objL1: '13102792816A.01'
}).then(data => {
    console.log(data)
})

/** KOSIS 코스피 지수 */
kosisService.getIndicatorData({
    orgId: '343',
    tblId: 'DT_343_2010_S0029',
    itmId: '13103792816T1',
    objL1: '13102792816A.01'
}).then(data => {
    console.log(data)
})

/** KOSIS 월별 소비자 물가 등락률 전년 동월비 (%) */
kosisService.getIndicatorData({
    orgId: '101',
    tblId: 'DT_1J22042',
    itmId: 'T03',
    objL1: '0'
}).then(data => {
    console.log(data)
})

/** KOSIS 코스피 시가총액 */
kosisService.getIndicatorData({
    orgId: '343',
    tblId: 'DT_343_2010_S0013',
    itmId: '13103792750T1',
    objL1: '13102792750A.05'
}).then(data => {
    console.log(data)
})

/** KOSIS 경제 성장률(GDP)(실질, 계절조정, 전기비) */
kosisService.getIndicatorData({
    orgId: '301',
    tblId: 'DT_200Y002',
    itmId: '13103134475999',
    objL1: '13102134475ACC_ITEM.10111'
}).then(data => {
    console.log(data)
})

/** KOSIS 경제 성장률(GDP)(실질, 원계열, 전년동기비) */
kosisService.getIndicatorData({
    orgId: '301',
    tblId: 'DT_200Y002',
    itmId: '13103134475999',
    objL1: '13102134475ACC_ITEM.10211'
}).then(data => {
    console.log(data)
})



/** KOSIS 국내총생산(명목,원화표시) (십억원) */
kosisService.getIndicatorData({
    orgId: '301',
    tblId: 'DT_200Y001',
    itmId: '13103134474999',
    objL1: '13102134474ACC_ITEM.10101'
}).then(data => {
    console.log(data)
})

/** KOSIS 국내총생산(명목,달러표시) (억달러) */
kosisService.getIndicatorData({
    orgId: '301',
    tblId: 'DT_200Y001',
    itmId: '13103134474999',
    objL1: '13102134474ACC_ITEM.1010101'
}).then(data => {
    console.log(data)
})

/** KOSIS 경제 성장률 (실질)(%) */
kosisService.getIndicatorData({
    orgId: '301',
    tblId: 'DT_200Y001',
    itmId: '13103134474999',
    objL1: '13102134474ACC_ITEM.20101'
}).then(data => {
    console.log(data)
})

/** KOSIS GDP 디플레이터 (2015=100) */
kosisService.getIndicatorData({
    orgId: '301',
    tblId: 'DT_200Y001',
    itmId: '13103134474999',
    objL1: '13102134474ACC_ITEM.90103'
}).then(data => {
    console.log(data)
})
/** KOSIS GDP 디플레이터 등락률 (원계열, 전년동기비) */
kosisService.getIndicatorData({
    orgId: '301',
    tblId: 'DT_200Y002',
    itmId: '13103134475999',
    objL1: '13102134475ACC_ITEM.301'
}).then(data => {
    console.log(data)
})

/** KOSIS GDP 디플레이터 (2015=100) (등락률) (%) */
kosisService.getIndicatorData({
    orgId: '301',
    tblId: 'DT_200Y001',
    itmId: '13103134474999',
    objL1: '13102134474ACC_ITEM.9010301'
}).then(data => {
    console.log(data)
})

/** ECOS 시장금리 국고채 (1년) 일별 */
ecosService.getIndicatorData({
    statCode: '817Y002',
    startCount: '1',
    endCount: '31',
    period: 'D',
    searchStartDate: '20240101',
    searchEndDate: '20240131',
    itemCode: '010190000'
}).then(data => {
    console.log(data)
})