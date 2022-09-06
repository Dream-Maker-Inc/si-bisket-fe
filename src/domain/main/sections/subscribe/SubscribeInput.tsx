import { Button, InputBase, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'
import { getTypoSizePx } from '@/common/themes/Typography'

export const SubscribeInput = () => (
  <Stack>
    <img src='/main/subscribe.png' alt='' css={style.image} />

    <Typography css={style.title}>새로운 작품을 놓치지 마세요!</Typography>

    <Stack css={style.inputRoot}>
      <InputBase css={style.input} type='email' placeholder='이메일 주소' />
      <Button css={style.button}>Subscribe</Button>
    </Stack>
  </Stack>
)

const style = {
  image: css`
    width: 254px;
    height: 314px;
    margin: 200px auto 18px;

    @media ${MediaQueries.xl} {
      margin-bottom: 12px;
    }

    @media ${MediaQueries.md} {
      width: 198px;
      height: 245px;
    }
  `,
  title: css`
    font-size: 44px;
    font-weight: bold;
    text-align: center;

    @media ${MediaQueries.xl} {
      font-size: ${getTypoSizePx('h3')};
    }

    @media ${MediaQueries.xl} {
      font-size: 24px;
    }
  `,
  inputRoot: css`
    flex-direction: row;
    margin: 60px auto 200px;

    @media ${MediaQueries.md} {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      flex-direction: column;
      margin-top: 40px;
    }
  `,
  input: css`
    width: 744px;
    padding: 19px 30px;
    border: 1px solid #ddd;
    border-radius: 40px;
    color: #767676;
    font-size: 17px;
    height: 60px;

    @media ${MediaQueries.xl} {
      width: 599px;
    }

    @media ${MediaQueries.md} {
      width: 90%;
      margin: 0 auto 16px;
    }
  `,
  button: css`
    width: 204px;
    height: 60px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    background-color: black;
    border-radius: 40px;
    transform: translateX(-30%);

    &:hover {
      color: white;
      font-weight: 800;
      background-color: black;
    }

    @media ${MediaQueries.md} {
      margin: 0 auto;
      transform: translateX(0%);
    }
  `,
}
