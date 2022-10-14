import { ChangeEvent, useState } from 'react'
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { css } from '@emotion/react'
import { ResultContainer } from '@/domain/search/sections/resultContainer'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import { CustomAppbar } from '@/common/components/Appbar'
import { ClearRounded, Search } from '@mui/icons-material'
import { MediaQueries } from '@/common/themes/Limit'

export const SearchContainer = () => {
  const [typing, setTyping] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')
  const { isWebNormal } = useCustomMediaQuery()

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
      {isWebNormal ? (
        <Stack css={style.tabletSearchContainer}>
          <Stack flexGrow={1}>
            <OutlinedInput
              css={style.tabletSearchInput}
              startAdornment={
                <InputAdornment position={'end'}>
                  <Search sx={{ color: 'black' }} />
                </InputAdornment>
              }
            />
          </Stack>

          <IconButton css={style.closeIcon}>
            <ClearRounded sx={{ color: 'white' }} />
          </IconButton>
        </Stack>
      ) : (
        <CustomAppbar />
      )}

      <Stack css={style.searchKeyword}>
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
      </Stack>

      {!isWebNormal && (
        <article css={style.wrapper}>
          <TextField
            label='Search for art or artist...'
            variant='standard'
            css={style.input}
            onChange={handleInputChange}
          />
        </article>
      )}

      <ResultContainer />
    </Stack>
  )
}

const style = {
  root: css`
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media ${MediaQueries.xxl} {
      padding: 0 104px;
    }

    @media ${MediaQueries.md} {
      padding: 0 24px;
    }
  `,
  tabletSearchContainer: css`
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    margin-bottom: 95px;
    padding: 0 16px;
  `,
  tabletSearchInput: css`
    border-radius: 30px;
    border: 1px solid black;
    height: 50px;
  `,
  closeIcon: css`
    width: 40px;
    height: 40px;
    padding: 10px;
    color: black;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #f2f2f2;
    margin-left: 12px;
    background-color: black;

    &:hover {
      background-color: black;
    }
  `,
  searchKeyword: css`
    margin-top: 177px;

    @media ${MediaQueries.xl} {
      margin-top: 0;
    }
  `,
  wrapper: css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 107px;
  `,
  input: css`
    width: 100%;
    max-width: 1392px;
  `,
}
