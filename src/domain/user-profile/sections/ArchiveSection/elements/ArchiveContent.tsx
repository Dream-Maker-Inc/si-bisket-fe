import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { useState } from 'react'
import { CreateButton } from './buttons/CreateButton'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import { MediaQueries } from '@/common/themes/Limit'
import { SlideTitleThumbnail } from './SlideTitleThumbnail'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

type ArchiveContentProps = {
  isCreator: boolean
}
export const ArchiveContent = ({ isCreator }: ArchiveContentProps) => {
  return <div css={style.root(isCreator)}>{isCreator && <Collections />}</div>
}

const style = {
  root: (isCreator: boolean) => css`
    width: 100%;
    padding-top: ${isCreator ? '40px' : '0px'};
    padding-bottom: 20px;
    @media ${MediaQueries.xs} {
      padding-bottom: 42px;
    }
  `,
  container: css`
    width: 100%;
  `,
  wrapper: css`
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 17px;
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
    line-height: 1.17;
    letter-spacing: -0.48px;
  `,
  swiper: css`
    width: 100%;
    position: relative;
  `,
  slide: css`
    width: 100%;
    max-width: 448px;
    max-height: 359px;
    min-height: 205px;
    aspect-ratio: 1/0.797;
    display: flex;
    flex-direction: column;
    @media ${MediaQueries.sm} {
      height: 241px;
      aspect-ratio: unset;
    }
  `,
  imageWrapper: css`
    width: 100%;
    max-height: 282px;
    min-height: 162px;
    aspect-ratio: 1/0.63;
    border-radius: 10px;
    overflow: none;
    @media ${MediaQueries.x} {
      max-height: 237px;
      aspect-ratio: 1/0.628;
    }
    @media ${MediaQueries.sm} {
      height: 190px;
    }
  `,
  image: css`
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `,
  content: css`
    width: 100%;
    flex: 1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.07);
    position: relative;
  `,
  collectionNameWrppaer: css`
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 16px;
    position: absolute;
    bottom: 1.04vw;
    left: 1.04vw;
    @media ${MediaQueries.x} {
      bottom: 1.99vw;
      left: 1.99vw;
    }
    @media ${MediaQueries.sm} {
      bottom: 3.61vw;
      left: 3.61vw;
    }
  `,
  collectionName: css`
    font-size: 20px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -0.4px;
    padding-bottom: 12px;
    @media ${MediaQueries.xl} {
      font-size: 1.45vw;
    }
    @media ${MediaQueries.x} {
      font-size: 16px;
      padding-bottom: 11px;
    }

    @media ${MediaQueries.sm} {
      font-size: 15px;
      padding-bottom: 7px;
    }
  `,
  swiperButton: css`
    width: 106%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    z-index: 2;

    @media ${MediaQueries.sm} {
      width: 100%;
    }
  `,
  button: css`
    cursor: pointer;
  `,
}

const Collections = () => {
  const { isMedium, isSmall } = useCustomMediaQuery()

  const [swiper, setSwiper] = useState<SwiperCore>()
  const slideNext = () => swiper?.slideNext()
  const slidePrev = () => swiper?.slidePrev()

  const onSlideNext = () => {
    slideNext()
  }
  const onSlidePrev = () => {
    slidePrev()
  }

  const models = [
    {
      slideImg: '/user-profile/swiper/img-card-sample.jpg',
      profileImg: '/user-collection/thumbnailSquare.png',
      profileName: 'Collection Name',
    },
    {
      slideImg: '/user-profile/swiper/img-card-sample.jpg',
      profileImg: '/user-collection/thumbnailSquare.png',
      profileName: 'Collection Name',
    },
    {
      slideImg: '/user-profile/swiper/img-card-sample.jpg',
      profileImg: '/user-collection/thumbnailSquare.png',
      profileName: 'Collection Name',
    },
  ]

  return (
    <div css={style.container}>
      <div css={style.wrapper}>
        <Typography css={style.title}>Collections</Typography>
        <CreateButton />
      </div>
      <div css={style.swiper}>
        <div css={style.swiperButton}>
          <SlidePrevButton onClick={onSlidePrev} />
          <SlideNextButton onClick={onSlideNext} />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={isSmall ? 23 : isMedium ? 20 : 24}
          slidesPerView={isSmall ? 1.1 : isMedium ? 2.1 : 3}
          onSwiper={swiper => {
            setSwiper(swiper)
          }}
        >
          {models.map((it, index) => (
            <SwiperSlide key={index}>
              <div css={style.slide}>
                <div css={style.imageWrapper}>
                  <img css={style.image} src={it.slideImg} alt='img' />
                </div>
                <div css={style.content}>
                  <div css={style.collectionNameWrppaer}>
                    <SlideTitleThumbnail img={it.profileImg} />
                    <Typography css={style.collectionName}>
                      {it.profileName}
                    </Typography>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
type SlideButtonProps = {
  onClick: () => void
}

const SlidePrevButton = ({ onClick }: SlideButtonProps) => {
  return (
    <div css={style.button} onClick={onClick}>
      <img src='/user-profile/swiper/icon-prev.svg' />
    </div>
  )
}

const SlideNextButton = ({ onClick }: SlideButtonProps) => {
  return (
    <div css={style.button} onClick={onClick}>
      <img src='/user-profile/swiper/icon-next.svg' />
    </div>
  )
}
