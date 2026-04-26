import { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

    const onClick = async (e: SyntheticEvent) => {
        const result = await searchCompanies(search);
    };
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList />
    </div>
  );
}

export default App;
