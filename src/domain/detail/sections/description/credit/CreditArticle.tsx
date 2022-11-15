import { Colors } from '@/common/themes/Color'
import { css } from '@emotion/react'
import { Button, Typography } from '@mui/material'

export const CreditArticle = () => {
  return (
    <div css={style.root}>
      <div css={style.box}>
        <div css={style.title}>
          <Typography
            variant='subtitle2'
            color={Colors.DarkGrey}
            fontWeight={300}
            mb='4px'
          >
            {'Lowest price'}
          </Typography>
          <Typography variant='h3' fontWeight='bold' lineHeight={1}>
            {'1,000,000 WON'}
          </Typography>
        </div>
        <div css={style.container}>
          <div css={style.row}>
            <Typography
              variant='subtitle2'
              color={Colors.DarkGrey}
              fontWeight={500}
            >
              {'부가세 포함'}
            </Typography>
            <Typography
              variant='subtitle2'
              color={Colors.DarkGrey}
              fontWeight={300}
            >
              {'Editions: 5'}
            </Typography>
          </div>
          <div css={style.row}>
            <Typography
              variant='subtitle2'
              color={Colors.DarkGrey}
              fontWeight={500}
            >
              {'국민카드, 현대카드 제외 결제 가능'}
            </Typography>
            <Typography
              variant='subtitle2'
              color={Colors.DarkGrey}
              fontWeight={300}
            >
              {'Chain: '}
              <span css={style.span}>Polygon</span>
            </Typography>
          </div>
        </div>
        <Button
          variant='contained'
          fullWidth
          css={style.button}
          onClick={() => alert('click')}
        >
          {'View NFT'}
        </Button>
      </div>
      <div css={style.ownerSection}>
        <Typography variant='subtitle2' fontWeight={600}>
          {'Owned by'}
        </Typography>
        <div css={style.owner}>
          <div css={style.round}></div>
          <Typography variant='caption' fontWeight='bold'>
            {'Art_Owner'}
          </Typography>
        </div>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  box: css`
    width: 100%;
    padding: 24px;
    flex: 1;
    border-radius: 20px;
    border: solid 1px ${Colors.LightGray};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  title: css``,
  container: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
  row: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  span: css`
    font-weight: 500;
  `,

  button: css`
    height: 60px;
    padding: 0px;
    font-size: 19px;
  `,

  ownerSection: css`
    display: flex;
    align-items: center;
    gap: 16px;
    align-self: flex-end;
  `,

  owner: css`
    width: 140px;
    height: 50px;
    border-radius: 25px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `,

  round: css`
    width: 36px;
    aspect-ratio: 1;
    background-color: ${Colors.HeightlightGreen};
    border: 1px solid ${Colors.HeightlightGreen};
    border-radius: 24px;
  `,
}
