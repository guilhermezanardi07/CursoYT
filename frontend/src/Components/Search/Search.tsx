import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent, FormEvent } from 'react'

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
};

const Search : React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props) => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchChange} />
      </form>
    </>
  );
};

export default Search;