import {
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { css } from '@emotion/react'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'
import { Colors } from '@/common/themes/Color'

export const FilterSelect = () => {
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

const style = {
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
