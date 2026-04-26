import React, { SyntheticEvent } from 'react'
import "./Card.css";
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props) => {
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
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.displaySymbol}/>
    </div>
  )
}

export default Card