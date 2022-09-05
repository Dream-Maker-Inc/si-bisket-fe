import { Stack, Typography } from '@mui/material'
import { ProfileChip } from '@/common/components/ProfileChip'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'

export const TitleInformation = () => {
  const { isTablet } = useCustomMediaQuery()

  return (
    <Stack css={style.root}>
      <div>
        <Typography variant='h4' css={style.title}>
          Collection Name Of Collection
        </Typography>
        <Typography variant='body1' css={style.count}>
          4 NFTs
        </Typography>
      </div>
      {isTablet ? (
        <div></div>
      ) : (
        <ProfileChip image='/main/profile.png' text='@USERNAME' hoverEvent />
      )}
    </Stack>
  )
}

const style = {
  root: css`
    @media (${MediaQueries.xxl}) {
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 24px;
    }

    @media (${MediaQueries.md}) {
      flex-direction: column;
      gap: 10px;
      height: 100px;
    }
  `,
  title: css`
    color: white;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    @media (${MediaQueries.xxl}) {
      font-size: 34px;
    }

    @media (${MediaQueries.xxl}) {
      font-size: 24px;
    }
  `,
  count: css`
    display: flex;
    align-items: center;
    color: white;
    margin-top: 4px;
    margin-bottom: 24px;

    @media (${MediaQueries.xxl}) {
      margin-top: 8px;
      margin-bottom: 0;
    }

    @media (${MediaQueries.xl}) {
      margin-top: 6px;
    }
  `,
}
