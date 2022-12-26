import { css } from '@emotion/react'

export const EditCollection = () => (
  //   <div css={st.root}>
  <div css={st.blur}> Edit Collection</div>
  //   </div>
)

const st = {
  root: css`
    color: white;
    width: 175px;
    height: 48px;

    background-color: rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: cover;
    /* background-image: url('user-collection/whiteBox.png'); */
    /* 
    /* object-fit: contain; */
  `,
  blur: css`
    display: flex;
    align-items: center;
    width: fit-content;
    height: 48px;
    cursor: pointer;
    padding: 15px 36px;
    border-radius: 10px;
    backdrop-filter: blur(30px);
    border-radius: 10px;
    color: white;
    transition: 0.5s;
    &:hover {
      background-color: black;
    }
  `,
}
