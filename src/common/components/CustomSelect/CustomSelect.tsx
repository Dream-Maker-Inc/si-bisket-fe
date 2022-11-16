import { css } from '@emotion/react'

import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'

export const CustomSelect = () => {
  const models = [
    { value: '높은 가격순' },
    { value: '낮은 가격순' },
    { value: '최신순' },
    { value: '오래된 순' },
  ]

  const [value, setValue] = useState(models[0].value)
  const [open, setOpen] = useState(false)

  const handleOpenChange = () => {
    setOpen(!open)
  }

  const feeObjectTransform = (it: any): string => {
    return it.value
  }

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return (
    <div ref={wrapperRef} css={style.addressFieldWrapper}>
      <TextField
        value={value}
        onChange={e => setValue(e.target.value)}
        fullWidth
        multiline
        maxRows={4}
        margin='dense'
        css={style.textfield(open)}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position='start'>
              <Typography fontSize='14px' lineHeight='21px' color='#A3A3B5'>
                Network Fee:
              </Typography>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              {!open ? (
                <IconButton onClick={handleOpenChange} sx={{ padding: '0px' }}>
                  <img src='/img/icon-arrow-down-gray.svg' alt='img' />
                </IconButton>
              ) : (
                <IconButton onClick={handleOpenChange} sx={{ padding: '0px' }}>
                  <img src='/img/icon-arrow-up.svg' alt='img' />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />

      <div css={style.addressList(open)}>
        {models.map(
          (it, index) =>
            open && (
              <Button
                key={index}
                css={style.row}
                onClick={() => handleOpenChange()}
              >
                <Typography fontSize='14px' lineHeight='21px'>
                  {it.value}
                </Typography>
              </Button>
            ),
        )}
      </div>
    </div>
  )
}

const style = {
  addressFieldWrapper: css`
    width: 100%;
    position: relative;
  `,

  addressList: (isOpen: boolean) => css`
    width: 100%;
    height: '85.67px';
    display: ${isOpen ? 'block' : 'none'};
    border-right: 1px solid #0059ff;
    border-left: 1px solid #0059ff;
    border-bottom: 1px solid #0059ff;
    background-color: #191920;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    position: absolute;
    z-index: 99;
    overflow-y: scroll;
    overflow: overlay;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #e7e8f3;
      border-right: 6px transparent solid;
      background-clip: padding-box;
      border-radius: 0px;
    }
    ::-webkit-scrollbar-track {
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: transparent;
    }
  `,

  textfield: (isOpen: boolean) => css`
    width: 100%;
    height: 48px;
    text-align: end;
    & .MuiOutlinedInput-root {
      border-radius: 30px;
      border: 1px solid #646486;
      height: 48px;
      border-top-left-radius: ${isOpen ? '24px' : '30px'};
      border-top-right-radius: ${isOpen ? '24px' : '30px'};
      border-bottom-left-radius: ${isOpen ? '0px' : '30px'};
      border-bottom-right-radius: ${isOpen ? '0px' : '30px'};
      border: 1px solid ${isOpen ? '#0059ff' : 'unset'};
      padding: 14px 16px;
    }
    textarea {
      text-align: end;
      font-size: 14px;
    }
  `,

  row: css`
    width: 100%;
    height: '42.83px';
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    border-radius: 0px;
    &:hover {
      background-color: #32323d;
    }
  `,
}
