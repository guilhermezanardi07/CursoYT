import React, { ChangeEvent, useState, MouseEvent } from 'react'

type Props = {}

const Search : React.FC<Props> = (props: Props) => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};

  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => console.log(e)} />
    </div>
  );
};

export default Search;