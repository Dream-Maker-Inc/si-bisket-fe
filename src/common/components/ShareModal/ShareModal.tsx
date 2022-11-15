import { Colors } from '@/common/themes/Color'
import { css } from '@emotion/react'
import { Popover, Typography } from '@mui/material'
import Image from 'next/image'

export const ShareModal = () => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <div css={style.root}>
        <div css={style.row}>
          <div css={style.icon}>
            <Image
              width='17px'
              height='9px'
              src={'/public/detail/description/ic-link.svg'}
              alt='icon'
            />
          </div>
          <Typography>{'Copy Link'}</Typography>
        </div>
        <div css={style.row}>
          <div css={style.icon}>
            <Image
              width='19px'
              height='16px'
              src={'/public/detail/description/ic-twitter.svg'}
              alt='icon'
            />
          </div>
          <Typography>{'Twitter'}</Typography>
        </div>
      </div>
    </Popover>
  )
}

const style = {
  root: css`
    position: absolute;
    width: 123px;
    height: 69px;
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.06);
    border: solid 1px ${Colors.ThinGrey};
    background-color: white;
  `,

  row: css`
    flex: 1;
  `,

  icon: css`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
}
