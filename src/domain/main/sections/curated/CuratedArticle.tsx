import { Stack } from '@mui/material'
import { css } from '@emotion/react'
import {
  CardContainer,
  TitleContainer,
} from '@/domain/main/sections/curated/card'
import { MediaQueries } from '@/common/themes/Limit'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import { ProfileChip } from '@/common/components/ProfileChip'

export const CuratedArticle = () => {
  const { isTablet } = useCustomMediaQuery()

  return (
    <article css={style.root}>
      <img
        css={style.image}
        src='/main/curated-background.png'
        alt=''
        width={1392}
        height={524}
      />
      <Stack css={style.container}>
        <TitleContainer />
        {isTablet && (
          <div style={{ marginBottom: 16, marginLeft: 26 }}>
            <ProfileChip
              image='/main/profile.png'
              text='@USERNAME'
              hoverEvent
            />
          </div>
        )}
        <CardContainer />
      </Stack>
    </article>
  )
}

const style = {
  root: css`
    position: relative;
    height: 524px;
    margin-bottom: 24px;
    overflow: hidden;
    border-radius: 20px;

    @media (${MediaQueries.xxl}) {
      height: 616px;
    }

    @media (${MediaQueries.xl}) {
      border-radius: 0;
      height: 616px;
    }

    @media (${MediaQueries.md}) {
      height: 682px;
    }
  `,
  image: css`
    position: absolute;
    filter: brightness(50%);

    @media (${MediaQueries.xxl}) {
      width: 100%;
      height: 616px;
    }

    @media (${MediaQueries.md}) {
      width: 100%;
      height: 682px;
    }
  `,
  container: css`
    position: absolute;
    margin-bottom: 24px;
    flex-direction: row;
    border-radius: 20px;

    @media (${MediaQueries.xxl}) {
      width: 100%;
      flex-direction: column;
    }
  `,
}
