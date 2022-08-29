import { Button, Chip, Stack, Typography } from '@mui/material'
import { PersonRounded } from '@mui/icons-material'
import { css } from '@emotion/react'

const CaptionContainer = () => (
  <Stack direction='row' mt={5}>
    <Stack>
      <Typography variant='caption' mb={1} fontWeight='bold'>
        Created by
      </Typography>
      <Chip
        icon={<PersonRounded />}
        label='@ARTISTDA'
        variant='filled'
        css={style.chip}
      ></Chip>
    </Stack>
    <Stack ml={5}>
      <Typography variant='caption' mb={1} fontWeight='bold'>
        Collection
      </Typography>
      <Chip
        icon={<PersonRounded />}
        label='COLLECTION NAME'
        variant='filled'
        css={style.chip}
      ></Chip>
    </Stack>
  </Stack>
)

const BuyContainer = () => (
  <Stack mt={5}>
    <Typography variant='caption' fontWeight='bold'>
      Buy Now
    </Typography>
    <Typography variant='h3' fontWeight='bold'>
      1,000,000 WON
    </Typography>
  </Stack>
)

export const CollectionInformation = () => (
  <Stack justifyContent='center' ml={5}>
    <Typography variant='h1' fontWeight='bold'>
      The Fall Of An Angelthe Fall Of An Angel
    </Typography>

    <CaptionContainer />
    <BuyContainer />

    <Button variant='contained' color='primary' css={style.button}>
      View NFT
    </Button>
  </Stack>
)

const style = {
  chip: css`
    background-color: white;
  `,
  button: css`
    width: 400px;
    height: 46px;
    margin-top: 20px;
    border-radius: 8px;
  `,
}
