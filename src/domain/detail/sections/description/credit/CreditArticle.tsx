import { Colors } from '@/common/themes/Color'
import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'

export const CreditArticle = () => {
  return (
    <div css={style.root}>
      <div css={style.box}>
        <div>
          <Typography
            variant='subtitle2'
            color={Colors.DarkGrey}
            fontWeight={300}
            mb='4px'
          >
            {'Lowest price'}
          </Typography>
          <Typography fontWeight='bold' lineHeight={1} css={style.title}>
            {'1,000,000 WON'}
          </Typography>
        </div>
        <div css={style.container}>
          <div css={style.leftColumn}>
            <Typography
              variant='subtitle2'
              color={Colors.DarkGrey}
              lineHeight={'18px'}
            >
              {'부가세 포함'}
            </Typography>
            <Typography
              variant='subtitle2'
              color={Colors.DarkGrey}
              lineHeight={'18px'}
            >
              {'국민카드, 현대카드 제외 결제 가능'}
            </Typography>
          </div>
          <div css={style.rightColumn}>
            <Typography
              variant='subtitle2'
              color={Colors.DarkGrey}
              lineHeight={'18px'}
            >
              {'Editions: 5'}
            </Typography>
            <div css={style.chain}>
              <Typography
                variant='subtitle2'
                color={Colors.DarkGrey}
                lineHeight={'18px'}
              >
                {'Chain: '}
              </Typography>
              <Image
                width='18px'
                height='16px'
                src={'/detail/description/ic-poligon.png'}
                alt=''
              />
            </div>
          </div>
        </div>
        <Button
          variant='contained'
          fullWidth
          sx={{ borderRadius: '10px' }}
          css={style.button}
          onClick={() => alert('click')}
        >
          {'Buy'}
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
    gap: 32px;

    @media ${MediaQueries.md} {
      gap: 20px;
    }
  `,

  title: css`
    font-size: 36px;
    @media ${MediaQueries.xl} {
      font-size: 24px;
    }
  `,

  container: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media ${MediaQueries.md} {
      flex-direction: column;
      gap: 4px;
    }
  `,
  leftColumn: css`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 6px;

    @media ${MediaQueries.xl} {
      gap: 4px;
    }
  `,
  rightColumn: css`
    width: 162px;
    margin-right: 60px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 6px;

    @media ${MediaQueries.xl} {
    }

    @media ${MediaQueries.md} {
      width: unset;
      margin-right: 0px;
      gap: 4px;
    }
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
  chain: css`
    display: flex;
    align-items: center;
    gap: 6px;
  `,
}
