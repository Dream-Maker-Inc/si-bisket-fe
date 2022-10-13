import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'

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
          >
            The title of artwork of butterfly of butterfly angel…
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
  `,
  image: css`
    position: absolute;
    width: 310px;
    height: 316px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-position: center;
    background-image: url('/main/curated-list-thumbnail.png');
  `,
  profileRoot: css`
    margin: 18px 0 21px;
  `,
}
