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
  const models = ['높은 가격순', '낮은 가격순', '최신순', '오래된 순']
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
          MenuProps={{
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
          }}
        >
          {models.map((it, index) => (
            <MenuItem key={index} value={it} css={style.menuItem}>
              <Item text={it} checkedValue={value} />
            </MenuItem>
          ))}
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
      <Typography className='item-text' fontWeight={600} variant='subtitle2'>
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

  menuItem: css`
    width: 166px;
    border-radius: 16px;
    &.Mui-selected {
      background-color: white !important;
    }
    &:hover {
      background-color: white !important;
    }
  `,

  item: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      .item-text {
        font-weight: bold;
      }
    }
  `,
  check: css`
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
}
