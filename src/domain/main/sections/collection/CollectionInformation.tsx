import { Button, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'
import { getTypoSizePx } from '@/common/themes/Typography'
import { InformationCaption } from '@/domain/main/sections/collection/information/InformationCaption'
import { InformationBuy } from '@/domain/main/sections/collection/information/InformationBuy'

export const CollectionInformation = () => (
  <Stack css={style.root}>
    <Typography variant='h1' css={style.title}>
      The Fall Of An Angelthe Fall Of An Angel
    </Typography>

    <InformationCaption />
    <InformationBuy />

    <Button variant='contained' css={style.button}>
      View NFT
    </Button>
  </Stack>
)

const style = {
  root: css`
    justify-content: center;
    margin-left: 92px;

    @media ${MediaQueries.xl} {
      width: 100%;
      padding: 26px;
      margin-left: 0;
    }
  `,
  title: css`
    font-weight: bold;

    @media ${MediaQueries.xxl} {
      font-size: ${getTypoSizePx('h2')};
    }

    @media ${MediaQueries.xl} {
      margin-top: 31px;
      font-size: 44px;
    }
    @media ${MediaQueries.md} {
      margin-top: 10px;
      font-size: ${getTypoSizePx('h3')};
    }
  `,
  button: css`
    width: 414px;
    height: 60px;
    margin-top: 32px;
    border-radius: 10px;
    font-size: 18px;
    transition: 0.2s;
    background-color: black;

    &:hover {
      transform: translateY(-3%);
      transition: 0.2s;
    }

    @media ${MediaQueries.xl} {
      width: 100%;
    }

    @media ${MediaQueries.md} {
      width: 100%;
      margin-top: 20px;
    }
  `,
}
