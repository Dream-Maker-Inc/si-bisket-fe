import { Colors } from '@/common/themes/Color'
import { MediaQueries } from '@/common/themes/Limit'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'

export const TagsArticle = () => {
  const { isMobile } = useCustomMediaQuery()
  return (
    <div css={style.root}>
      <Typography fontSize={'24px'} fontWeight={'bold'} lineHeight={1}>
        Tags
      </Typography>
      <div css={style.hr}></div>

      {isMobile ? (
        <div css={style.container}>
          <Tag name='#redhat' />
          <Tag name='#redhat' /> <Tag name='#redhat' /> <Tag name='#redhat' />{' '}
          <Tag name='#redhat' /> <Tag name='#redhat' />
        </div>
      ) : (
        <div css={style.container}>
          <Tag name='#redhat' />
          <Tag name='#redhat' /> <Tag name='#redhat' /> <Tag name='#redhat' />{' '}
          <Tag name='#redhat' /> <Tag name='#red' /> <Tag name='#redhat' />{' '}
          <Tag name='#redhat' /> <Tag name='#redhat' /> <Tag name='#redhat' />{' '}
          <Tag name='#redhat' /> <Tag name='#hat' />
        </div>
      )}
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
    text-align: center;
  `,
  tag: css`
    padding: 12px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    object-fit: contain;
    display: inline-block;
    margin-right: 6px;
    margin-bottom: 10px;
    border-radius: 23px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
    border: solid 1px ${Colors.ThinGrey};
    background-color: white;

    @media ${MediaQueries.xs} {
      padding: 8px 16px;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  `,
  tagText: css`
    font-size: 18px;
    line-height: 20px;
    @media ${MediaQueries.xs} {
      font-size: 16px;
    }
  `,
}

type TagProps = {
  name: string
}

const Tag = ({ name }: TagProps) => {
  return (
    <div css={style.tag}>
      <Typography color='black' css={style.tagText}>
        {name}
      </Typography>
    </div>
  )
}
