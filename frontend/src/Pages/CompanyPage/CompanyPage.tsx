import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';

interface Props {}

const CompanyPage = (props: Props) => {
  //https:localhost:3000/
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      console.log(result?.data);
      setCompany(result?.data);
    }
    getProfileInit();
  }, [])
  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

          <Sidebar />

          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.name} />
            <Tile title="Industry" subTitle={company.finnhubIndustry} />
            <Tile title="Country" subTitle={company.country} />
            <Tile title="Market Cap" subTitle={company.marketCapitalization.toString()} />
            <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>
              {company.name} is a {company.country}-based company operating in the {company.finnhubIndustry} industry.
              {company.marketCapitalization
                ? ` It has a market capitalization of ${company.marketCapitalization}.`
                : ""}
              {" "}The company provides products and services globally.
              {company.weburl ? ` More details can be found at ${company.weburl}.` : ""}
            </p>
          </CompanyDashboard>

        </div>
      ) : (
        <div>Company not found!</div>
      )}
    </>
  )
}

export default CompanyPage