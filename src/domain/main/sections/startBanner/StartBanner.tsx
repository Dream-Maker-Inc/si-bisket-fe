import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { css } from '@emotion/react'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'

export const StartBanner = () => {
  const { isTablet, isWebNormal } = useCustomMediaQuery()
  const slidesPerView = isTablet ? 0.5 : isWebNormal ? 1.1 : 2

  return (
    <Swiper
      css={style.wrapper}
      slidesPerView={slidesPerView}
      spaceBetween={24}
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      speed={8000}
      modules={[Autoplay]}
      simulateTouch={false}
    >
      <SwiperSlide>
        <img src='/main/start-banner-1.png' alt='' width={616} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/main/start-banner-2.png' alt='' width={616} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/main/start-banner-1.png' alt='' width={616} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/main/start-banner-2.png' alt='' width={616} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/main/start-banner-1.png' alt='' width={616} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/main/start-banner-2.png' alt='' width={616} />
      </SwiperSlide>
    </Swiper>
  )
}

const style = {
  wrapper: css`
    width: 100%;
    margin-top: 200px;

    .swiper-wrapper {
      transition-timing-function: linear;
    }
  `,
}
