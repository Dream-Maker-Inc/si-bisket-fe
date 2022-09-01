import { Button, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { ProfileChip } from '@/common/components/ProfileChip'
import { MediaQueries } from '@/common/themes/Limit'
import { getTypoSizePx } from '@/common/themes/Typography'

const CaptionContainer = () => (
  <Stack css={style.captionRoot}>
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
  <Stack css={style.buyRoot}>
    <Typography variant='subtitle2' fontWeight='bold'>
      Buy Now
    </Typography>
    <Typography variant='h3' fontWeight='bold' mt={0.75}>
      1,000,000 WON
    </Typography>
  </Stack>
)

export const CollectionInformation = () => (
  <Stack css={style.root}>
    <Typography variant='h1' fontWeight='bold' css={style.title}>
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
  root: css`
    justify-content: center;
    margin-left: 92px;

    @media (${MediaQueries.xl}) {
      width: 100%;
      padding: 26px;
      margin-left: 0;
    }
  `,
  captionRoot: css`
    flex-direction: row;
    margin-top: 40px;

    @media (${MediaQueries.xl}) {
      margin-top: 20px;
    }
  `,
  buyRoot: css`
    margin-top: 32px;

    @media (${MediaQueries.xl}) {
      margin-top: 22px;
    }
  `,
  title: css`
    @media (${MediaQueries.xxl}) {
      font-size: ${getTypoSizePx('h2')};
    }

    @media (${MediaQueries.xl}) {
      margin-top: 31px;
      font-size: 44px;
    }
  `,
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

    @media (${MediaQueries.xl}) {
      width: 100%;
      margin-top: 16px;
    }
  `,
}
