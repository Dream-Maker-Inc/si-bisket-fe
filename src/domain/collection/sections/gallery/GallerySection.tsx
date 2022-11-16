import { ImageCard } from '@/common/components/card/ImageCard'
import { Colors } from '@/common/themes/Color'
import { css } from '@emotion/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CheckIcon from '@mui/icons-material/Check'
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
import { useState } from 'react'
import { CustomSelect } from '@/common/components/CustomSelect'
import { MediaQueries } from '@/common/themes/Limit'

export const GallerySection = () => {
  return (
    <div css={style.root}>
      <div css={style.select}>
        <FilterSelect />
      </div>

      <div css={style.container}>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
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

    @media ${MediaQueries.xl} {
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
    gap: 24px;

    @media ${MediaQueries.xl} {
      flex-direction: column;
      align-items: center;
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
  const [value, setValue] = useState()

  return (
    <Box css={style.box} sx={{ width: 153 }}>
      <FormControl fullWidth>
        <Select defaultValue={1}>
          <MenuItem value={1}>
            <Item text='높은 가격순' />
          </MenuItem>
          <MenuItem value={2}>
            <Item text='낮은 가격순' />
          </MenuItem>
          <MenuItem value={3}>
            <Item text='최신순' />
          </MenuItem>
          <MenuItem value={3}>
            <Item text='오래된 순' />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

type ItemProps = {
  text: string
}
const Item = ({ text }: ItemProps) => {
  return (
    <div css={style.item}>
      <div css={style.check}>
        <CheckIcon fontSize='small' />
      </div>
      <Typography fontWeight={600} variant='subtitle2'>
        {text}
      </Typography>
    </div>
  )
}
