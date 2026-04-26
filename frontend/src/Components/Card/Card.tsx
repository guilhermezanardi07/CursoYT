import React from 'react'
import "./Card.css";
import { CompanySearch } from '../../company';

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({ id, searchResult }: Props) => {
  return (
    <div className="card">
      <img alt="company logo" />
        <div className="details">
            <h2>{searchResult.description} ({searchResult.displaySymbol})</h2>
            <p>{searchResult.type}</p>
        </div>
        <p className="info">
          {searchResult.symbol}
        </p>
    </div>
  )
}

export default Card