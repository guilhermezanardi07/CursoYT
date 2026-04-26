import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent, FormEvent } from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
};

const Search : React.FC<Props> = (props: Props) => {
  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e)} />
    </div>
  );
};

export default Search;