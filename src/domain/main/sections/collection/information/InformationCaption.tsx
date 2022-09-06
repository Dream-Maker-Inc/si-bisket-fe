import { Stack, Typography } from '@mui/material'
import { ProfileChip } from '@/common/components/ProfileChip'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'

export const InformationCaption = () => (
  <Stack css={style.root}>
    <Stack css={style.container}>
      <Typography variant='subtitle2' mb={1.5} fontWeight='bold'>
        Created by
      </Typography>
      <ProfileChip image='/main/profile.png' text='@ARTISTDA' />
    </Stack>
    <Stack css={style.secondContainer}>
      <Typography variant='subtitle2' mb={1.5} fontWeight='bold'>
        Collection
      </Typography>
      <ProfileChip image='/main/profile.png' text='COLLECTION NAME' />
    </Stack>
  </Stack>
)

const style = {
  root: css`
    flex-direction: row;
    margin-top: 40px;

    @media ${MediaQueries.xl} {
      margin-top: 20px;
    }

    @media ${MediaQueries.md} {
      flex-direction: column;
    }
  `,
  container: css`
    @media ${MediaQueries.md} {
      flex-direction: column;
    }
  `,
  secondContainer: css`
    margin-left: 40px;

    @media ${MediaQueries.md} {
      margin-top: 24px;
      margin-left: 0;
    }
  `,
}
