import { css } from '@emotion/react'

export const EditCollection = () => <div css={st.blur}> Edit Collection</div>

const st = {
  root: css`
    color: white;
    width: 175px;
    height: 48px;
    background-repeat: no-repeat;
    background-size: cover;
  `,
  blur: css`
    width: fit-content;
    height: 48px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px 36px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(30px);
    border-radius: 10px;
    color: white;
    font-weight: 600;
    transition: 0.5s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `,
}
