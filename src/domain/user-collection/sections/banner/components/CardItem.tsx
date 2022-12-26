import { css } from '@emotion/react'
import { Stack, Typography } from '@mui/material'
import { Colors } from '@/common/themes/Color'
import { BackGround } from '../BackGround'
import { MediaQueries } from '@/common/themes/Limit'

const imageArr = [
  '/user-collection/profile2.png',
  '/user-collection/profile3.png',
  '/user-collection/profile2.png',
  '/user-collection/profile2.png',
]

const renderImages = (imgArr: string[]) => {
  return imgArr.map((_, idx) => (
    <img
      key={idx}
      src={imgArr[idx]}
      css={st.image}
      style={{ marginLeft: '-10px' }}
    />
  ))
}

export const CardItem = () => {
  return (
    <div css={st.root}>
      <div>
        <Typography css={st.title}>Owned by</Typography>
        <Stack direction='row' component='section'>
          <Typography css={st.number}>9</Typography>
          <Stack direction='row' component='section' css={st.imgContainer}>
            {renderImages(imageArr)}
          </Stack>
        </Stack>
      </div>
      <div css={st.floorPrice}>
        <Typography css={st.title}>Floor Price</Typography>
        <Typography css={st.number}>$100</Typography>
      </div>
    </div>
  )
}

const st = {
  root: css`
    background: white;
    display: inline-flex;
    padding: 28px 36px;
    border-radius: 20px;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
    transform: translate(0, 50%);
    @media ${MediaQueries.md} {
      display: flex;
      justify-content: center;
    }
    @media ${MediaQueries.xs} {
      padding: 28px 23px;
      letter-spacing: -0.36px;
    }
  `,

  title: css`
    font-weight: bold;
    font-size: 18px;
    color: ${Colors.MediumDarkGrey};
    margin-bottom: 11px;
    @media ${MediaQueries.xs} {
      font-weight: 600;
    }
  `,
  image: css`
    width: 36px;
    height: 36px;

    background-size: contain;
    border-radius: 50%;
  `,
  number: css`
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
  `,
  imgContainer: css`
    margin-left: 20px;
  `,
  floorPrice: css`
    margin-left: 36px;
  `,
}
