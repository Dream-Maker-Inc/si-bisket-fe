import { css } from '@emotion/react'
import { Button, Typography } from '@mui/material'

export const IntroductionArticle = () => {
  return (
    <div>
      <Typography>{'The Name of Collections'}</Typography>
      <Typography>{'Description'}</Typography>
      <div css={style.chipContainer}>
        <Chip
          iconSrc={'/detail/description/ic-heart.svg'}
          text={'Favorites'}
          count={'0'}
        />
        <Chip
          iconSrc={'/detail/description/ic-eye.svg'}
          text={'Views'}
          count={'147'}
        />
        <Chip
          iconSrc={'/detail/description/ic-share.svg'}
          text={'Share'}
          count={''}
        />
      </div>
      <div css={style.container}>
        <img
          src={'/detail/description/image-nft.png'}
          alt='img'
          css={style.image}
        />
        <div css={style.box}>
          <Typography>
            {'Created by'}
            <span>{'@artistname'}</span>
          </Typography>
          <div css={style.wrapper}>
            <div css={style.center}>
              <Typography>{'102'}</Typography>
              <Typography>{'Following'}</Typography>
            </div>
            <div css={style.center}>
              <Typography>{'102'}</Typography>
              <Typography>{'Followers'}</Typography>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={() => alert('click')}>Follow</Button>
    </div>
  )
}

type ChipProps = {
  iconSrc: string
  text: string
  count: string
}

const Chip = ({ iconSrc, text, count }: ChipProps) => {
  return (
    <div css={style.chip}>
      <img src={iconSrc} alt='icon' />
      <div css={style.chipTextWrapper}>
        <Typography>{text}</Typography>
        <Typography>{count}</Typography>
      </div>
    </div>
  )
}

const style = {
  chipContainer: css`
    display: flex;
    align-items: center;
    gap: 27px;
  `,
  chip: css`
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  chipTextWrapper: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,

  container: css`
    display: flex;
  `,
  box: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  wrapper: css`
    display: flex;
  `,
  image: css`
    width: 100px;
    aspect-ratio: 1/1;
  `,
  center: css`
    text-align: center;
  `,
}
