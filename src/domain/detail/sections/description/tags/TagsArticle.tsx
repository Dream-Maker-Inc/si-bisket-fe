import { css } from '@emotion/react'
import { Typography } from '@mui/material'

export const TagsArticle = () => {
  return (
    <div css={style.root}>
      <Typography fontSize={'24px'} fontWeight={'bold'}>
        Tags
      </Typography>
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
    max-width: 460px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  container: css`
    width: 100%;
  `,
  tag: css`
    padding: 13px 16px;
    border-radius: 36px;
    border: solid 1px black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    object-fit: contain;
    display: inline-block;
    margin-right: 12px;
    margin-bottom: 16px;
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
