import { Stack } from '@mui/material'
import { css } from '@emotion/react'
import { CollectionInformation } from '@/domain/main/sections/collection/CollectionInformation'
import { MediaQueries } from '@/common/themes/Limit'

export const CollectionSection = () => (
  <Stack direction='row' css={style.root} component='section'>
    <img src='/main/thumbnail-main.png' css={style.image} />

    <CollectionInformation />
  </Stack>
)

const style = {
  root: css`
    width: 100%;
    max-width: 1400px;
    margin: 180px auto 0;

    @media ${MediaQueries.xxl} {
      max-width: 1076px;
    }

    @media ${MediaQueries.xl} {
      flex-direction: column;
      align-items: center;
    }
  `,
  image: css`
    max-width: 650px;
    max-height: 500px;
    object-fit: contain;

    @media ${MediaQueries.xxl} {
      max-width: 450px;
    }

    @media ${MediaQueries.xl} {
      max-width: 445px;
    }

    @media ${MediaQueries.md} {
      width: 100%;
    }
  `,
}
