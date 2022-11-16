import { Colors } from '@/common/themes/Color'
import { MediaQueries } from '@/common/themes/Limit'
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
      <Typography fontWeight={'bold'} lineHeight={1.2} css={style.description}>
        {'The Name of Artwork'}
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
          <Typography color={Colors.DarkGrey} fontWeight={300}>
            {'Created by '}
            <span css={style.span}>{'@artistname'}</span>
          </Typography>
        </div>
      </div>
      <div css={style.buttonSection}>
        <Button
          variant='outlined'
          css={style.button}
          onClick={() => alert('click')}
        >
          Follow
        </Button>
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
    margin-bottom: 2px;

    @media ${MediaQueries.md} {
      margin-bottom: 4px;
    }
  `,

  description: css`
    font-size: 56px;
    margin-bottom: 32px;

    @media ${MediaQueries.md} {
      font-size: 36px;
      margin-bottom: 28px;
    }
  `,
  chipContainer: css`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    border-bottom: 1px solid ${Colors.ThinGrey};
    @media ${MediaQueries.md} {
      width: 100%;
      justify-content: space-between;
      padding-bottom: 8px;
      margin-bottom: 22.5px;
    }
  `,

  imageSection: css`
    display: flex;
    align-items: center;
    padding-left: 8px;
    gap: 48px;

    @media ${MediaQueries.md} {
      flex-direction: column;
      gap: 19px;
      margin-bottom: 36px;
    }
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
    line-height: 28px;
  `,
  image: css`
    width: 80px;
    aspect-ratio: 1/1;

    @media ${MediaQueries.md} {
      width: 100px;
    }
  `,
  center: css`
    text-align: center;
  `,
  buttonSection: css`
    display: flex;
    align-items: center;
    gap: 40px;

    @media ${MediaQueries.md} {
      flex-direction: column-reverse;
      gap: 24px;
    }
  `,

  button: css`
    width: 96px;
    height: 36px;
    font-weight: 600;
    color: black;
    border-radius: 18px;
    margin-top: 26px;

    @media ${MediaQueries.md} {
      margin-top: unset;
    }
  `,
}
