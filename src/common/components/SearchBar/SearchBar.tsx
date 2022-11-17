import { css } from '@emotion/react'
import {
  AppBar,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

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
          css={style.field}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
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
    background-color: transparent;
  `,
  toolbar: css`
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  field: css`
    & .MuiOutlinedInput-root {
      height: 50px;
      & fieldset {
        border-radius: 36px;
        border-color: white;
      }
      &:hover fieldset {
        border-color: white;
      }
      &.Mui-focused fieldset {
        border-color: white;
      }
    }

    & input {
      color: white;
    }

    & input::placeholder {
      font-size: 16px;
      color: white;
    }
  `,
}
