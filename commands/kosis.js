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