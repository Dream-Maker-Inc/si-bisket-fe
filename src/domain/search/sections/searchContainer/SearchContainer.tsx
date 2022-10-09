import React, { ChangeEvent, useState } from 'react'
import { Stack, TextField, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { ResultContainer } from '@/domain/search/sections/resultContainer'

export const SearchContainer = () => {
  const [typing, setTyping] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    if (inputValue) {
      setTyping(true)
      setKeyword(inputValue)
    } else {
      setTyping(false)
    }
  }

  return (
    <Stack css={style.root}>
      <Typography variant='h3' fontWeight='bold' textAlign='center'>
        {typing ? `"${keyword}"` : 'SEARCH'}
      </Typography>

      {typing ? (
        <Typography variant='caption' textAlign='center' marginTop='4px'>
          153 Results
        </Typography>
      ) : (
        <Typography variant='caption' marginTop='4px'>
          &nbsp;
        </Typography>
      )}

      <article css={style.wrapper}>
        <TextField
          label='Search for art or artist...'
          variant='standard'
          css={style.input}
          onChange={handleInputChange}
        />
      </article>

      <ResultContainer />
    </Stack>
  )
}

const style = {
  root: css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 177px;
  `,
  wrapper: css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
  `,
  input: css`
    width: 100%;
    max-width: 1392px;
    margin-bottom: 48px;
  `,
}
