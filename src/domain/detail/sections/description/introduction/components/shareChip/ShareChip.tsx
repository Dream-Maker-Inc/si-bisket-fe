import { Colors } from '@/common/themes/Color'
import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { Button, Popover, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

type ShareChipProps = {
  iconSrc: string
  hoverIconSrc: string
  text: string
  count: string
}

export const ShareChip = ({
  iconSrc,
  hoverIconSrc,
  text,
  count,
}: ShareChipProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  return (
    <div css={style.chip}>
      <Button css={style.button} onClick={handleClick}>
        <img className='ic-share' src={iconSrc} alt='icon' css={style.icon} />
        <img
          className='ic-share-hover'
          src={hoverIconSrc}
          alt='icon'
          css={style.icon}
        />
        <div css={style.chipTextWrapper}>
          <Typography fontWeight={600} variant='caption' css={style.text}>
            {text}
          </Typography>
          <Typography fontWeight={600} variant='caption'>
            {count}
          </Typography>
        </div>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        css={style.popover}
      >
        <div css={style.inner}>
          <div css={style.row}>
            <div css={style.asset}>
              <Image
                width='17px'
                height='9px'
                src={'/detail/description/ic-link.svg'}
                alt='icon'
              />
            </div>
            <Typography css={style.hover}>{'Copy Link'}</Typography>
          </div>
          <div css={style.row}>
            <div css={style.asset}>
              <Image
                width='19px'
                height='16px'
                src={'/detail/description/ic-twitter.svg'}
                alt='icon'
              />
            </div>
            <Typography css={style.hover}>{'Twitter'}</Typography>
          </div>
        </div>
      </Popover>
    </div>
  )
}

const style = {
  root: css`
    position: relative;
  `,
  chip: css`
    width: 125px;
    height: 40px;

    @media ${MediaQueries.md} {
      display: flex;
      align-items: center;
      justify-content: start;
      width: unset;
    }
  `,
  button: css`
    width: fit-content;
    height: 100%;
    min-width: unset !important;
    min-height: unset !important;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 4px;
    font-weight: 300;

    & .ic-share {
      display: block;
    }
    & .ic-share-hover {
      display: none;
    }

    &:hover {
      box-shadow: none;
      background-color: none;
      border: none;

      .text {
        font-weight: 'bold';
      }

      .ic-share {
        display: none;
      }
      .ic-share-hover {
        display: block;
      }
    }
    @media ${MediaQueries.md} {
      justify-content: center;
    }
  `,
  icon: css`
    width: 18px;
    aspect-ratio: 1;
  `,
  chipTextWrapper: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  popover: css`
    border: 1px solid red;

    & .MuiPaper-root {
      border-radius: 7px;
      box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.06);
      border: solid 1px ${Colors.ThinGrey};
    }
  `,
  inner: css`
    width: 123px;
    height: 69px;
    display: flex;
    flex-direction: column;
    padding: 6px;
  `,

  row: css`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  asset: css`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  hover: css`
    font-weight: 300;
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  `,

  text: css`
    &:hover {
      font-weight: 'bold';
    }
  `,
}
