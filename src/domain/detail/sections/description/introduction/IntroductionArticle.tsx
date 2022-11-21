import { Colors } from '@/common/themes/Color'
import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import { Chip } from './components/chip'
import { FavoriteChip } from './components/FavoriteChip'
import { ShareChip } from './components/shareChip'

export const IntroductionArticle = () => {
  const [isFollwed, setIsFollwed] = useState(false)
  const handleSetIsFollwed = () => {
    setIsFollwed(!isFollwed)
  }
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
        <Typography
          variant='subtitle2'
          color={Colors.DarkGrey}
          fontStyle='italic'
        >
          {'The Name of Collections'}
        </Typography>
      </div>
      <Typography fontWeight={'bold'} lineHeight={1.2} css={style.description}>
        {'The Name of Artwork'}
      </Typography>
      <div css={style.chipContainer}>
        <FavoriteChip
          iconSrc={'/detail/description/ic-heart.svg'}
          hoverIconSrc={'/detail/description/ic-heart-hover.svg'}
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
          hoverIconSrc={'/detail/description/ic-share-hover.svg'}
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
            {'Created by  '}
            <span css={style.span}>{'@artistname'}</span>
          </Typography>
        </div>
      </div>
      <div css={style.buttonSection(isFollwed)}>
        <Button
          variant='outlined'
          css={style.button(isFollwed)}
          onClick={handleSetIsFollwed}
        >
          {isFollwed ? 'Following' : 'Follow'}
        </Button>
        <div css={style.wrapper}>
          <div css={style.center}>
            <Typography fontWeight={'bold'} css={style.number}>
              {'102'}
            </Typography>
            <Typography
              variant='subtitle2'
              color={Colors.MediumDarkGrey}
              fontWeight={600}
              lineHeight={1.13}
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
              color={Colors.MediumDarkGrey}
              fontWeight={600}
              lineHeight={1.13}
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
  title: css`
    font-size: 56px;
    line-height: 1;

    @media ${MediaQueries.xl} {
      font-size: 44px;
    }

    @media ${MediaQueries.md} {
      font-size: 36px;
    }
  `,
  description: css`
    font-size: 56px;
    margin-bottom: 32px;

    @media ${MediaQueries.xl} {
      font-size: 44px;
    }

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
    align-self: flex-end;

    @media ${MediaQueries.xl} {
      align-self: center;
    }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    text-align: center;
  `,
  buttonSection: (isFollwed: boolean) => css`
    display: flex;
    align-items: center;
    gap: ${isFollwed ? '18px' : '40px'};

    @media ${MediaQueries.md} {
      flex-direction: column-reverse;
      gap: 24px;
    }
  `,

  button: (isFollwed: boolean) => css`
    width: ${isFollwed ? '118px' : '96px'};
    height: 35px;
    font-weight: 600;
    background-color: ${isFollwed ? 'black' : 'transperent'};
    color: ${isFollwed ? 'white' : 'black'};
    border: 1px solid black;
    border-radius: 18px;
    margin-top: 26px;

    &:hover {
      background-color: ${isFollwed ? 'black' : 'transperent'};
      border: 2px solid black;
    }

    @media ${MediaQueries.md} {
      width: ${isFollwed ? '102px' : '80px'};
      height: 36px;
      margin-top: unset;
    }
  `,
}
