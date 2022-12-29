import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { TitleThumbnail } from './TitleThumbnail'
import { useState } from 'react'
import { CreateButton } from './buttons/CreateButton'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import { MediaQueries } from '@/common/themes/Limit'
import { ConstructionOutlined } from '@mui/icons-material'

type ArchiveContentProps = {
  isCreator: boolean
}
export const ArchiveContent = ({ isCreator }: ArchiveContentProps) => {
  console.log('ArchiveContent')
  console.log(isCreator)
  return (
    <div css={style.root(isCreator)}>
      {isCreator && <Collections />}
      <CardsContent />
    </div>
  )
}

const style = {
  root: (isCreator: boolean) => css`
    width: 100%;
    padding-top: ${isCreator ? '40px' : '0px'};
    padding-bottom: 30px;
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
    height: 359px;
  `,
  imageWrapper: css`
    width: 100%;
    height: 282px;
    border-radius: 10px;
    overflow: none;
  `,
  image: css`
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `,
  content: css`
    width: 100%;
    height: 97px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.07);
  `,
  collectionNameWrppaer: css`
    display: flex;
    align-items: flex-end;
    gap: 16px;
    margin-top: -20px;
    margin-left: 20px;
  `,
  collectionName: css`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.4px;
    padding-bottom: 12px;

    @media ${MediaQueries.x} {
      font-size: 16px;
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

  return (
    <div css={style.container}>
      <div css={style.wrapper}>
        <Typography css={style.title}>Collections</Typography>
        <CreateButton />
      </div>
      <div css={style.swiper}>
        <div css={style.swiperButton}>
          <div css={style.button} onClick={onSlidePrev}>
            <img src='/user-profile/swiper/icon-prev.svg' />
          </div>
          <div css={style.button} onClick={onSlideNext}>
            <img src='/user-profile/swiper/icon-next.svg' />
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={isSmall ? 23 : isMedium ? 20 : 24}
          slidesPerView={isSmall ? 1.1 : isMedium ? 2.1 : 3}
          onSwiper={swiper => {
            setSwiper(swiper)
          }}
        >
          <SwiperSlide>
            <div css={style.slide}>
              <div css={style.imageWrapper}>
                <img
                  css={style.image}
                  src='/user-profile/swiper/img-card-sample.jpg'
                  alt='img'
                />
              </div>
              <div css={style.content}>
                <div css={style.collectionNameWrppaer}>
                  <TitleThumbnail />
                  <Typography css={style.collectionName}>
                    Collection Name
                  </Typography>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={style.slide}>
              <div css={style.imageWrapper}>
                <img
                  css={style.image}
                  src='/user-profile/swiper/img-card-sample.jpg'
                  alt='img'
                />
              </div>
              <div css={style.content}>
                <div css={style.collectionNameWrppaer}>
                  <TitleThumbnail />
                  <Typography css={style.collectionName}>
                    Collection Name
                  </Typography>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={style.slide}>
              <div css={style.imageWrapper}>
                <img
                  css={style.image}
                  src='/user-profile/swiper/img-card-sample.jpg'
                  alt='img'
                />
              </div>
              <div css={style.content}>
                <div css={style.collectionNameWrppaer}>
                  <TitleThumbnail />
                  <Typography css={style.collectionName}>
                    Collection Name
                  </Typography>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div css={style.slide}>
              <div css={style.imageWrapper}>
                <img
                  css={style.image}
                  src='/user-profile/swiper/img-card-sample.jpg'
                  alt='img'
                />
              </div>
              <div css={style.content}>
                <div css={style.collectionNameWrppaer}>
                  <TitleThumbnail />
                  <Typography css={style.collectionName}>
                    Collection Name
                  </Typography>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

const CardsContent = () => {
  return <div></div>
}
