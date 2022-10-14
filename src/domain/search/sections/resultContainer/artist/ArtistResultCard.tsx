import { Button, Divider, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { ArtistResultCardProfile } from '@/domain/search/sections/resultContainer/artist/ArtistResultCardProfile'
import { MediaQueries } from '@/common/themes/Limit'

export const ArtistResultCard = () => {
  return (
    <Stack css={style.card}>
      <Stack css={style.container}>
        <Stack>
          <ArtistResultCardProfile
            avatar='/main/profile.png'
            text='Long Display Name'
            caption='@artist_Name'
          />

          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            mt={3}
          >
            <Button css={style.followButton}>Follow</Button>

            <Stack alignItems='center'>
              <Typography fontSize='20px' fontWeight='bold'>
                3
              </Typography>
              <Typography fontSize='14px' color='#767676'>
                Collections
              </Typography>
            </Stack>

            <Stack alignItems='center'>
              <Typography fontSize='20px' fontWeight='bold'>
                34
              </Typography>
              <Typography fontSize='14px' color='#767676'>
                Followers
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ marginTop: '10px' }} />

        <Stack
          css={style.cardImages}
          direction='row'
          justifyContent='space-between'
        >
          <img src='/main/curated-list-thumbnail.png' css={style.image} />
          <img src='/main/curated-list-thumbnail.png' css={style.image} />
          <img src='/main/curated-list-thumbnail.png' css={style.image} />
        </Stack>
      </Stack>
    </Stack>
  )
}

const style = {
  card: css`
    width: 100%;
    max-width: 348px;
    padding: 32px;
    background-color: white;
    border-radius: 10px;
    border: solid 1px #ddd;
    cursor: pointer;

    @media ${MediaQueries.xxl} {
      width: 416px;
    }
  `,
  container: css`
    padding: 0;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `,
  followButton: css`
    height: 31px;
    padding: 6px 12px;
    border: 1px solid black;
    border-radius: 30px;
    font-weight: bold;
  `,
  cardImages: css`
    @media ${MediaQueries.xl} {
      gap: 24px;
    }
  `,
  image: css`
    width: 80px;
    height: 80px;
    margin-top: 10px;

    @media ${MediaQueries.xl} {
      width: 80px;
      height: 80px;
    }
  `,
}
