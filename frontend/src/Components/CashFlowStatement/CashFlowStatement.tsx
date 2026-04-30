import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router';
import { getCashflowStatement } from '../../api';
import Table from '../Table/Table';

type Props = {}

const findValue = (cf: any[], ...concepts: string[]) => {
  for (const concept of concepts) {
    const found = cf.find(i => i.concept === concept);
    if (found?.value !== undefined && found.value !== null) return found.value;
  }
  return undefined;
};

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.endDate,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      findValue(company.report.cf,
        "us-gaap_NetCashProvidedByUsedInOperatingActivities",
        "us-gaap_NetCashProvidedByUsedInOperatingActivitiesContinuingOperations"
      ),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      findValue(company.report.cf,
        "us-gaap_NetCashProvidedByUsedInInvestingActivities",
        "us-gaap_NetCashProvidedByUsedInInvestingActivitiesContinuingOperations"
      ),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      findValue(company.report.cf,
        "us-gaap_NetCashProvidedByUsedInFinancingActivities",
        "us-gaap_NetCashProvidedByUsedInFinancingActivitiesContinuingOperations"
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      findValue(company.report.cf,
        "us-gaap_CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseIncludingExchangeRateEffect",
        "us-gaap_CashAndCashEquivalentsPeriodIncreaseDecrease"
      ),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      findValue(company.report.cf,
        "us-gaap_PaymentsToAcquirePropertyPlantAndEquipment"
      ),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      findValue(company.report.cf,
        "us-gaap_ProceedsFromIssuanceOfCommonStock"
      ),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => {
      const operating = findValue(company.report.cf,
        "us-gaap_NetCashProvidedByUsedInOperatingActivities",
        "us-gaap_NetCashProvidedByUsedInOperatingActivitiesContinuingOperations"
      );
      const capex = findValue(company.report.cf,
        "us-gaap_PaymentsToAcquirePropertyPlantAndEquipment"
      );
      if (operating === undefined || capex === undefined) return undefined;
      return operating - capex;
    },
  },
];

const CashFlowStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashflowData, setCashflow] = useState<CompanyCashFlow[]>();
    useEffect(() => {
        const fetchCashFlow = async () => {
            const result = await getCashflowStatement(ticker!);
            setCashflow(result!.data.data);
        }
        fetchCashFlow();
    }, []);
  return (
    <>
        {cashflowData ? (
            <Table config={config} data={cashflowData} />
        ) : (
            <h1>No results!</h1>
        )}
    </>
  )
}

export default CashFlowStatement