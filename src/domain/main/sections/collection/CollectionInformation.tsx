import { Button, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { ProfileChip } from '@/common/components/ProfileChip'

const CaptionContainer = () => (
  <Stack direction='row' mt={5}>
    <Stack>
      <Typography variant='subtitle2' mb={1.5} fontWeight='bold'>
        Created by
      </Typography>
      <ProfileChip image='/main/profile.png' text='@ARTISTDA' />
    </Stack>
    <Stack ml={5}>
      <Typography variant='subtitle2' mb={1.5} fontWeight='bold'>
        Collection
      </Typography>
      <ProfileChip image='/main/profile.png' text='COLLECTION NAME' />
    </Stack>
  </Stack>
)

const BuyContainer = () => (
  <Stack mt={4}>
    <Typography variant='subtitle2' fontWeight='bold'>
      Buy Now
    </Typography>
    <Typography variant='h3' fontWeight='bold' mt={0.75}>
      1,000,000 WON
    </Typography>
  </Stack>
)

export const CollectionInformation = () => (
  <Stack justifyContent='center' ml={11.5}>
    <Typography variant='h1' fontWeight='bold'>
      The Fall Of An Angelthe Fall Of An Angel
    </Typography>

    <CaptionContainer />
    <BuyContainer />

    <Button variant='contained' color='primary' css={style.button}>
      View Nft
    </Button>
  </Stack>
)

const style = {
  button: css`
    width: fit-content;
    min-width: 414px;
    height: 60px;
    margin-top: 32px;
    border-radius: 10px;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
      transform: translateY(-3%);
      transition: 0.2s;
    }
  `,
}
