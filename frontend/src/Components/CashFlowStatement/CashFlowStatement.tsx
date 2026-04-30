import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router';
import { getCashflowStatement } from '../../api';
import Table from '../Table/Table';

type Props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.endDate,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      company.report.cf.find(i => i.concept === "us-gaap_NetCashProvidedByUsedInOperatingActivities")?.value,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.report.cf.find(i => i.concept === "us-gaap_NetCashProvidedByUsedInInvestingActivities")?.value,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.report.cf.find(i => i.concept === "us-gaap_NetCashProvidedByUsedInFinancingActivities")?.value,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      company.report.cf.find(i => i.concept === "us-gaap_CashAndCashEquivalentsAtCarryingValue")?.value,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      company.report.cf.find(i => i.concept === "us-gaap_PaymentsToAcquirePropertyPlantAndEquipment")?.value,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      company.report.cf.find(i => i.concept === "us-gaap_ProceedsFromIssuanceOfCommonStock")?.value,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      company.report.cf.find(i => i.concept === "us-gaap_FreeCashFlow")?.value,
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