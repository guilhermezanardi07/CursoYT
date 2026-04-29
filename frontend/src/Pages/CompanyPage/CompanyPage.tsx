import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';

interface Props {}

const CompanyPage = (props: Props) => {
  //https:localhost:3000/
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data);
    }
    getProfileInit();
  }, [])
  return (
    <>
      {company ? (
        <div>{company.name}</div>
      ) : (
        <div>Company not found!</div>
      )}
    </>
  )
}

export default CompanyPage