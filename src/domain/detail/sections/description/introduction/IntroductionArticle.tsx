import { Colors } from '@/common/themes/Color'
import { css } from '@emotion/react'
import { Button, Typography } from '@mui/material'
import { Chip } from './components/chip'
import { ShareChip } from './components/shareChip'

export const IntroductionArticle = () => {
  return (
    <div css={style.root}>
      <div css={style.captionWrapper}>
        <Typography
          variant='subtitle2'
          color={Colors.DarkGrey}
          fontWeight={300}
        >
          {'Collection'}
        </Typography>
        <Typography variant='subtitle2' color={Colors.DarkGrey}>
          {'The Name of Collections'}
        </Typography>
      </div>
      <Typography
        fontWeight={'bold'}
        lineHeight={1.2}
        css={style.description}
        mb={3}
      >
        {'The Title of Artwork'}
      </Typography>
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
        <ShareChip
          iconSrc={'/detail/description/ic-share.svg'}
          text={'Share'}
          count={''}
        />
      </div>
      <div>
        <div css={style.imageSection}>
          <img
            src={'/detail/description/image-nft.png'}
            alt='img'
            css={style.image}
          />
          <div css={style.box}>
            <Typography color={Colors.DarkGrey} fontWeight={300}>
              {'Created by '}
              <span css={style.span}>{'@artistname'}</span>
            </Typography>
            <div css={style.wrapper}>
              <div css={style.center}>
                <Typography fontWeight={'bold'} css={style.number}>
                  {'102'}
                </Typography>
                <Typography
                  variant='subtitle2'
                  color={Colors.DarkGrey}
                  fontWeight={600}
                >
                  {'Following'}
                </Typography>
              </div>
              <div css={style.center}>
                <Typography fontWeight={'bold'} css={style.number}>
                  {'102'}
                </Typography>
                <Typography
                  variant='subtitle2'
                  color={Colors.DarkGrey}
                  fontWeight={600}
                >
                  {'Followers'}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        variant='outlined'
        css={style.button}
        onClick={() => alert('click')}
      >
        Follow
      </Button>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    margin: 0 auto;
  `,
  captionWrapper: css`
    display: flex;
    gap: 6px;
  `,

  description: css`
    font-size: 56px;
  `,
  chipContainer: css`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    border-bottom: 1px solid ${Colors.ThinGrey};
  `,

  imageSection: css`
    display: flex;
    gap: 56px;
  `,
  box: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  span: css`
    color: black;
    font-weight: 600;
  `,
  wrapper: css`
    display: flex;
    gap: 28px;
  `,
  number: css`
    font-size: 24px;
  `,
  image: css`
    width: 100px;
    aspect-ratio: 1/1;
  `,
  center: css`
    text-align: center;
  `,

  button: css`
    width: 96px;
    height: 36px;
    font-weight: 600;
    color: black;
    border-radius: 18px;
    margin-top: 26px;
  `,
}
