module.exports = (options) => {
    const metricInfo = {
        CCI: {
            orgId: '101',
            tblId: 'DT_1C8015',
            itmId: 'T1',
            objL1: 'B03',
        },
        CLI: {
            orgId: '101',
            tblId: 'DT_1C8015',
            itmId: 'T1',
            objL1: 'A03'
        },
        LCI: {
            orgId: '101',
            tblId: 'DT_1C8016',
            itmId: 'T1',
            objL1: 'A01',
        },
        KOSPI: {
            orgId: '343',
            tblId: 'DT_343_2010_S0029',
            itmId: '13103792816T1',
            objL1: '13102792816A.01'
        },
        CPI_YoY: {
            orgId: '101',
            tblId: 'DT_1J22042',
            itmId: 'T03',
            objL1: '0'
        },
        KOSPI_MarketCap: {
            orgId: '343',
            tblId: 'DT_343_2010_S0013',
            itmId: '13103792750T1',
            objL1: '13102792750A.05'
        },
        RGDP_QoQ_SA: {
            orgId: '301',
            tblId: 'DT_200Y002',
            itmId: '13103134475999',
            objL1: '13102134475ACC_ITEM.10111'
        },
        RGDP_YoY: {
            orgId: '301',
            tblId: 'DT_200Y002',
            itmId: '13103134475999',
            objL1: '13102134475ACC_ITEM.10211'
        },
        GDP_D_YoY: {
            orgId: '301',
            tblId: 'DT_200Y002',
            itmId: '13103134475999',
            objL1: '13102134475ACC_ITEM.301'
        },
        NGDP_KRW: {
            orgId: '301',
            tblId: 'DT_200Y002',
            itmId: '13103134475999',
            objL1: '13102134475ACC_ITEM.301'
        },
        NGDP_USD: {
            orgId: '301',
            tblId: 'DT_200Y001',
            itmId: '13103134474999',
            objL1: '13102134474ACC_ITEM.1010101'
        },
        RGDP: {
            orgId: '301',
            tblId: 'DT_200Y001',
            itmId: '13103134474999',
            objL1: '13102134474ACC_ITEM.20101'
        },
        GDP_D: {
            orgId: '301',
            tblId: 'DT_200Y001',
            itmId: '13103134474999',
            objL1: '13102134474ACC_ITEM.90103'
        },
        GDP_D_P: {
            orgId: '301',
            tblId: 'DT_200Y001',
            itmId: '13103134474999',
            objL1: '13102134474ACC_ITEM.9010301'
        }
    }

    const fullOptions = {
        ...metricInfo[options.name]
    }

    return fullOptions
}