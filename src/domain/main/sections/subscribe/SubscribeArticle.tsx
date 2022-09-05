import { Button } from '@mui/material'
import { css } from '@emotion/react'

export const SubscribeArticle = () => (
  <article>
    <div css={style.divider}></div>
    <Button css={style.button}>콜렉팅 시작하기</Button>
  </article>
)

const style = {
  divider: css`
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: black;
  `,
  button: css`
    position: absolute;
    top: 0;
    left: 50%;
    padding: 18px 46px;
    background-color: black;
    border-radius: 40px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    transform: translateX(-50%) translateY(-50%);
    transition: 0.3s;

    &:hover {
      background-color: black;
      transform: translateX(-50%) translateY(-55%);
      transition: 0.3s;
    }
  `,
}
