import { Stack, Typography } from '@mui/material'
import { CardProfile } from '@/common/components/CardProfile'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'
import { useState } from 'react'
import { CardItemHover } from '@/domain/main/sections/curated/card/CardItemHover'

export const CardItem = () => {
  const [hover, setHover] = useState(false)

  const handleHoverChange = () => setHover(true)
  const handleNoHoverChange = () => setHover(false)

  return (
    <Stack
      css={style.card}
      onMouseEnter={handleHoverChange}
      onMouseLeave={handleNoHoverChange}
    >
      <Stack css={style.container}>
        <div css={style.imageWrapper}>
          <div css={style.image} />
          {hover && <CardItemHover />}
        </div>
        <Stack pl={3}>
          <CardProfile avatar='/main/profile.png' text='@ARTISTDA' />
          <Typography variant='caption' color='#666' fontWeight='bold'>
            Buy Now
          </Typography>
          <Typography variant='subtitle1' fontWeight='bold' mt={0.25} mb={2.25}>
            1,000,000 WON
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

const style = {
  card: css`
    background-color: white;
    border-radius: 16px;
    border: none;
    cursor: pointer;

    @media (${MediaQueries.md}) {
      width: 100%;
      scroll-snap-align: start;
      scroll-snap-stop: normal;
    }
  `,
  container: css`
    padding: 0;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `,
  imageWrapper: css`
    position: relative;
    width: 310px;
    height: 316px;

    @media (${MediaQueries.xl}) {
      object-fit: contain;
    }
  `,
  image: css`
    position: absolute;
    width: 310px;
    height: 316px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-position: center;
    background-image: url('/main/curated-list-thumbnail.png');

    @media (${MediaQueries.xl}) {
      width: 100%;
    }

    @media (${MediaQueries.md}) {
      width: 100%;
    }
  `,
}
