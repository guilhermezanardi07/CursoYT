import React, { useState } from 'react'

type Props = {}

const Search : React.FC<Props> = (props: Props) => {
    const [search, setSearch] = useState<string>("");
  return (
    <div>Search</div>
  )
};

export default Search;