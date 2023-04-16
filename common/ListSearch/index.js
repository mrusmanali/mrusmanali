import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { InputAdornment, TextField } from "@mui/material";

import styles from './styles.module.scss';

function ListSearch({onSearch}) {
  const [search, setSearch] = useState('');

  const onKeyUpHandle = (event) => {
    if(event.keyCode === 13) onSearch(search);
  }

  const onChangeInput = (event) => {
    let value = event.target.value;
    setSearch(value);
  }

  return (
    <div className={styles.listsearch}>
      <TextField 
        size="small"
        label="Search"
        variant="outlined"
        onKeyUp={onKeyUpHandle}
        onChange={onChangeInput}
        className={styles.listsearch_input}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconSearch size={20} stroke={1.5} />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
}

export default ListSearch;
