import { css } from '@emotion/react'
import { AppBar, IconButton, TextField, Toolbar } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const handleSearchTextChange = (v: string) => {
    setSearchText(v)
  }
  return (
    <AppBar position='fixed' css={style.root}>
      <Toolbar css={style.toolbar}>
        <TextField
          value={searchText}
          onChange={e => handleSearchTextChange(e.target.value)}
          placeholder={'Adam Smith'}
          inputProps={{}}
        />
        <IconButton>
          <Image
            width='70px'
            height='70px'
            src='/collection/ic-close.svg'
            alt='close'
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

const style = {
  root: css`
    width: 100%;
    height: 80px;
  `,
  toolbar: css`
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
  `,
}
