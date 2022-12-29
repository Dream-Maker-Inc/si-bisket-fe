import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { useState } from 'react'

type CategorySectionProps = {
  categoryList: string[]
}
export const CategorySection = ({ categoryList }: CategorySectionProps) => {
  const [category, setCategory] = useState(categoryList[0])
  const handleCategryChange = (v: string) => {
    setCategory(v)
  }

  return (
    <div css={style.category}>
      {categoryList.map((it, index) => (
        <div
          key={index}
          css={style.item(category == it ? true : false)}
          onClick={() => handleCategryChange(it)}
        >
          <Typography css={style.text(category == it ? true : false)}>
            {it}
          </Typography>
        </div>
      ))}
    </div>
  )
}

const style = {
  category: css`
    width: 100%;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    gap: 48px;
    border-bottom: 1px solid #e6e6e6;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  item: (isClicked: boolean) => css`
    height: 32px;
    border-bottom: ${isClicked ? '1px solid black' : '1px solid transparent'};
    cursor: pointer;
  `,

  text: (isClicked: boolean) => css`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.36px;
    color: ${isClicked ? 'black' : '#d3d3d3'};
    line-height: 1;
  `,
}
