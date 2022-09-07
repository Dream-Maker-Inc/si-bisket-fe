import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'
import { data } from '@/domain/main/sections/column/data'

export const ColumnContent = () => (
  <Stack css={style.root}>
    <img src='/main/column-image.jpg' alt='' css={style.image} />
    <Stack css={style.subroot}>
      {data.map((item, idx) => (
        <Stack key={idx} sx={{ marginTop: '30px' }}>
          <Stack direction='row' css={style.wrapper}>
            <Typography css={style.number}>0{+idx + 1}</Typography>
            <Typography fontSize={24} css={style.title} fontWeight='bold'>
              {item.title}
            </Typography>
          </Stack>
          <div css={style.divider}></div>
          <Typography variant='subtitle2' css={style.content}>
            {item.content}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Stack>
)

const style = {
  root: css`
    flex-direction: row;
    margin-top: 52px;

    @media ${MediaQueries.xl} {
      flex-direction: column;
      margin-top: 32px;
    }

    @media ${MediaQueries.md} {
      flex-direction: column;
      margin-top: 24px;
    }
  `,
  subroot: css`
    margin-left: 146px;

    @media ${MediaQueries.xxl} {
      margin-left: 71px;
    }

    @media ${MediaQueries.xl} {
      margin-left: 0;
    }
  `,
  image: css`
    width: 562px;
    height: 618px;
    border-radius: 20px;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.16);

    @media ${MediaQueries.xxl} {
      width: 475px;
      height: 522px;
    }

    @media ${MediaQueries.xl} {
      margin: auto auto 30px;
    }

    @media ${MediaQueries.md} {
      width: 100%;
      height: fit-content;
    }
  `,
  divider: css`
    width: 100%;
    height: 1px;
    margin: 20px 0;
    background-color: #ddd;
  `,
  container: css`
    margin-top: 50px;
  `,
  wrapper: css`
    @media ${MediaQueries.xxl} {
      justify-content: space-between;
    }
  `,
  number: css`
    width: 230px;
    font-size: 24px;

    @media ${MediaQueries.xxl} {
      width: auto;
    }
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
  `,
  content: css`
    margin-left: 230px;
    word-break: break-all;
    text-align: justify;
    font-weight: 400;
    color: #404040;

    @media ${MediaQueries.xxl} {
      margin-left: 0;
    }
  `,
}
