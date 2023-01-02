import { css } from '@emotion/react'
import { Button, Typography } from '@mui/material'

type EtcSectionProps = {
  copyButtonProps: { address: string; onClick: () => void }
  syncButtonProps: { onClick: () => void }
}

export const EtcSection = ({
  copyButtonProps,
  syncButtonProps,
}: EtcSectionProps) => {
  return (
    <div css={style.etcWrapper}>
      <Button
        css={style.etc}
        sx={{ gap: '4px' }}
        onClick={copyButtonProps.onClick}
      >
        <div className={'text'} css={style.copyTextWrapper}>
          {copyButtonProps.address}
        </div>
        <img
          className={'icon'}
          src={'/user-profile/icon-copy.svg'}
          alt='copy'
        />
        <img
          className={'icon-white'}
          src={'/user-profile/icon-copy-white.svg'}
          alt='copy'
        />
      </Button>
      <Button
        css={style.etc}
        sx={{ gap: '8px' }}
        onClick={syncButtonProps.onClick}
      >
        <Typography className={'text'} css={style.etcText}>
          Sync
        </Typography>
        <img
          className={'icon'}
          src={'/user-profile/icon-sync.svg'}
          alt='sync'
        />
        <img
          className={'icon-white'}
          src={'/user-profile/icon-sync-white.svg'}
          alt='sync'
        />
      </Button>
    </div>
  )
}

const style = {
  etcWrapper: css`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
  `,
  etc: css`
    width: 132px;
    height: 48px;
    border-radius: 10px;
    border: solid 1px #e6e6e6;
    display: flex;
    align-items: center;
    .icon {
      display: block;
    }
    .icon-white {
      display: none;
    }

    &:hover {
      border: solid 1px black;
      background-color: black;
      .icon {
        display: none;
      }
      .icon-white {
        display: block;
      }
      .text {
        color: white;
      }
    }
  `,
  copyTextWrapper: css`
    width: 78px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  etcText: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.32px;
  `,
}
