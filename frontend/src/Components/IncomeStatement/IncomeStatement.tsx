import React, { useEffect, useState } from 'react'
import { CompanyIncomeStatement } from '../../company';
import { useOutletContext } from 'react-router';
import { getIncomeStatement } from '../../api';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';
import { formatLargeMonetaryNumber, formatRatio } from '../../Helpers/NumberFormatting';

type Props = {}

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.endDate,
  },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.report.ic.find(i => i.concept === "us-gaap_RevenueFromContractWithCustomerExcludingAssessedTax")?.value),
  },
  {
    label: "Cost Of Revenue",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.report.ic.find(i => i.concept === "us-gaap_CostOfGoodsAndServicesSold")?.value),
  },
  {
    label: "Gross Profit",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.report.ic.find(i => i.concept === "us-gaap_GrossProfit")?.value),
  },
  {
    label: "Research & Development",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.report.ic.find(i => i.concept === "us-gaap_ResearchAndDevelopmentExpense")?.value),
  },
  {
    label: "Selling & Marketing",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.report.ic.find(i => i.concept === "us-gaap_SellingAndMarketingExpense")?.value),
  },
  {
    label: "General & Administrative",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.report.ic.find(i => i.concept === "us-gaap_GeneralAndAdministrativeExpense")?.value),
  },
  {
    label: "Operating Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.report.ic.find(i => i.concept === "us-gaap_OperatingIncomeLoss")?.value),
  },
  {
    label: "Non-Operating Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.report.ic.find(i => i.concept === "us-gaap_NonoperatingIncomeExpense")?.value),
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.report.ic.find(i => i.concept === "us-gaap_NetIncomeLoss")?.value),
  },
];

const IncomeStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [incomeStatement, setIncomeStatement] =
     useState<CompanyIncomeStatement[]>();
     useEffect(() => {
         const incomeStatementFetch = async () => {
             const result = await getIncomeStatement(ticker);
             setIncomeStatement(result!.data.data);
         };
         incomeStatementFetch();
     }, []);
  return (
    <>
        {incomeStatement ? (
            <>
                <Table config={configs} data={incomeStatement} />
            </> 
            ) : (
                <Spinner />
            )}
    </>
  )
}

export default IncomeStatement