import { Colors } from '@/common/themes/Color'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'

export const TagsArticle = () => {
  return (
    <div css={style.root}>
      <Typography fontSize={'24px'} fontWeight={'bold'} lineHeight={1}>
        Tags
      </Typography>
      <div css={style.hr}></div>
      <div css={style.container}>
        <Tag name='#redhat' />
        <Tag name='vvid' /> <Tag name='architecture' /> <Tag name='dark' />{' '}
        <Tag name='#redhat' />
        <Tag name='vvid' /> <Tag name='architecture' /> <Tag name='dark' />{' '}
        <Tag name='#redhat' /> <Tag name='animation' />
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
  `,
  hr: css`
    width: 100%;
    height: 1px;
    background-color: ${Colors.ThinGrey};
    margin: 15.5px 0;
  `,
  container: css`
    width: 100%;
  `,
  tag: css`
    padding: 13px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    object-fit: contain;
    display: inline-block;
    margin-right: 12px;
    margin-bottom: 16px;
    border-radius: 23px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
    border: solid 1px ${Colors.ThinGrey};
    background-color: white;
  `,
  tagText: css`
    font-size: 20px;
  `,
}

type TagProps = {
  name: string
}

const Tag = ({ name }: TagProps) => {
  return (
    <div css={style.tag}>
      <Typography
        color='black'
        fontWeight={300}
        lineHeight={1}
        css={style.tagText}
      >
        {name}
      </Typography>
    </div>
  )
}
