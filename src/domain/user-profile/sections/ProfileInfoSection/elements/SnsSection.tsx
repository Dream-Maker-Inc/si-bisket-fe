import { css } from '@emotion/react'

type SnsSectionProps = {
  snsList: { sns: string; img: string; href: string }[]
}

export const SnsSection = ({ snsList }: SnsSectionProps) => {
  return (
    <div css={style.snsWrapper}>
      {snsList.map((it, index) => (
        <a css={style.sns} key={index} href={it.href}>
          <img css={style.snsImg} src={it.img} alt={it.sns} />
        </a>
      ))}
    </div>
  )
}

const style = {
  snsWrapper: css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 20px;
  `,
  sns: css`
    width: 36px;
    aspect-ratio: 1;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
    cursor: pointer;

    &:hover {
      border: 1px solid black;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
    }
  `,
  snsImg: css`
    margin-right: -1px;
  `,
}
