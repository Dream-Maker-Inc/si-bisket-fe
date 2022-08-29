import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { PersonRounded } from '@mui/icons-material'
import { css } from '@emotion/react'
import { CardProfile } from '@/common/components/CardProfile'

const TitleContainer = () => (
  <Stack css={style.titleContainer}>
    <img
      src='https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='
      alt='bisket'
      width={100}
    />
    <Stack>
      <Typography variant='h4' color='white'>
        Collection Name Of Collection
      </Typography>
      <Typography variant='body1' color='white'>
        4 NFTs
      </Typography>
      <Chip icon={<PersonRounded />} label='@USERNAME' css={style.username} />
    </Stack>
  </Stack>
)

const CardItem = () => (
  <Card css={style.card}>
    <CardContent style={{ padding: 0 }}>
      <img
        width={250}
        height={300}
        src='https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='
        alt=''
      />
      <Stack p={2} pt={0}>
        <CardProfile avatar={<PersonRounded />} text='@ARTISTDA' />
        <Typography variant='caption' color='#666' fontWeight='bold' mt={1}>
          Buy Now
        </Typography>
        <Typography variant='subtitle1' fontWeight='bold'>
          1,000,000 WON
        </Typography>
      </Stack>
    </CardContent>
  </Card>
)

const CardContainer = () => (
  <Stack
    direction='row'
    alignItems='center'
    justifyContent='center'
    mr={3}
    gap={1}
    flex={1}
  >
    <CardItem />
    <CardItem />
    <CardItem />
  </Stack>
)

export const CuratedArticle = () => (
  <Stack css={style.wrapper}>
    <TitleContainer />
    <CardContainer />
  </Stack>
)

const style = {
  wrapper: css`
    margin-bottom: 20px;
    flex-direction: row;
    background-color: rgb(0, 100, 0);
    border-radius: 12px;
  `,
  titleContainer: css`
    width: 350px;
    padding: 40px;
    justify-content: space-between;
  `,
  username: css`
    width: fit-content;
    height: 40px;
    margin-top: 16px;
    border-radius: 30px;
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
  `,
  card: css`
    width: 250px;
    margin: 40px 10px;
    border-radius: 16px;
  `,
}
