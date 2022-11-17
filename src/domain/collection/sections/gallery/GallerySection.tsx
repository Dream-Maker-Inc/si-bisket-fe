import { ImageCard } from '@/common/components/card/ImageCard'
import { Colors } from '@/common/themes/Color'
import { css } from '@emotion/react'
import CheckIcon from '@mui/icons-material/Check'
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { MediaQueries } from '@/common/themes/Limit'

export const GallerySection = () => {
  return (
    <div css={style.root}>
      <div css={style.select}>
        <FilterSelect />
      </div>

      <div css={style.container}>
        <div css={style.row}>
          <ImageCard />
          <ImageCard />
        </div>
        <div css={style.row}>
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    max-width: 1446px;
    margin: 0 auto;
    padding: 0 23px;
    padding-top: 68px;
    padding-bottom: 200px;

    @media ${MediaQueries.md} {
      height: 2096px;
      padding-top: 32px;
      padding-bottom: 160px;
    }
  `,
  select: css`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 16px;

    @media ${MediaQueries.xl} {
      margin-bottom: 12px;
    }
  `,
  box: css`
    border-radius: 18px;
    border: solid 1px ${Colors.BannerBg};

    background-color: white;

    & .MuiSelect-select {
      min-height: unset;
      height: unset;
      padding: 8px 20px;
    }

    & fieldset {
      border: none;
    }
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    gap: 24px;

    @media ${MediaQueries.xl} {
      flex-direction: column;
      height: fit-content;
      gap: 28px;
    }
  `,

  row: css`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 24px;

    @media ${MediaQueries.xl} {
      align-items: center;
      justify-content: center;
      height: fit-content;
    }

    @media ${MediaQueries.md} {
      flex-direction: column;
      gap: 28px;
    }
  `,
  item: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  check: css`
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
}

const FilterSelect = () => {
  const [value, setValue] = useState('높은 가격순')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <Box css={style.box} sx={{ width: 153 }}>
      <FormControl fullWidth>
        <Select
          defaultValue={value}
          onChange={handleChange}
          renderValue={selected => {
            return selected
          }}
        >
          <MenuItem value={'높은 가격순'}>
            <Item text='높은 가격순' checkedValue={value} />
          </MenuItem>
          <MenuItem value={'낮은 가격순'}>
            <Item text='낮은 가격순' checkedValue={value} />
          </MenuItem>
          <MenuItem value={'최신순'}>
            <Item text='최신순' checkedValue={value} />
          </MenuItem>
          <MenuItem value={'오래된 순'}>
            <Item text='오래된 순' checkedValue={value} />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

type ItemProps = {
  text: string
  checkedValue: string
}
const Item = ({ text, checkedValue }: ItemProps) => {
  const isMatched = text === checkedValue
  return (
    <div css={style.item}>
      <div css={style.check}>
        {isMatched ? <CheckIcon fontSize='small' /> : null}
      </div>
      <Typography fontWeight={600} variant='subtitle2'>
        {text}
      </Typography>
    </div>
  )
}
