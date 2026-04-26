import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent } from 'react'

interface Props {}

const Search : React.FC<Props> = (props: Props) => {
  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e)} />
    </div>
  );
};

export default Search;