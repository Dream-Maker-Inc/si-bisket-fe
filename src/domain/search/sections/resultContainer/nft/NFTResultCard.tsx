import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'

export const NFTResultCard = () => {
  return (
    <Stack css={style.card}>
      <Stack css={style.container}>
        <div css={style.imageWrapper}>
          <div css={style.image} />
        </div>
        <Stack pl={3}>
          <Stack direction='row' css={style.profileRoot}>
            <img src='/main/profile.png' alt='' width={30} height={30} />
            <Typography
              variant='subtitle2'
              ml={1}
              fontWeight='bold'
              component='span'
            >
              @ARTISTDA
            </Typography>
          </Stack>
          <Typography
            variant='subtitle1'
            fontWeight='bold'
            mt={0.25}
            mb={2.25}
            component='span'
            fontSize='20px'
            css={style.cardTitle}
          >
            The title of artwork The title of artwork The title of artwork The
            title of artwork
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
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.07);
    border: none;
    cursor: pointer;
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

    @media ${MediaQueries.xxl} {
      width: 100%;
    }

    @media ${MediaQueries.md} {
      height: 632px;
    }
  `,
  image: css`
    position: absolute;
    width: 310px;
    height: 310px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-position: center;
    background-image: url('/main/curated-list-thumbnail.png');
    background-size: cover;
    background-repeat: no-repeat;

    @media ${MediaQueries.xxl} {
      width: 100%;
    }

    @media ${MediaQueries.md} {
      height: 632px;
    }
  `,
  profileRoot: css`
    margin: 18px 0 21px;

    @media ${MediaQueries.md} {
      margin-bottom: 10px;
    }
  `,
  cardTitle: css`
    display: block;
    width: 270px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @media ${MediaQueries.md} {
      width: 500px;
    }
  `,
}
