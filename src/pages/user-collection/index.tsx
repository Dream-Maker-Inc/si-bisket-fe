import { CustomAppbar } from '@/common/components/Appbar'
import { Footer } from '@/common/components/footer'
import { css } from '@emotion/react'
import { BannerSection } from '@/domain/user-collection/sections/banner'
import { BackGround } from '@/domain/user-collection/sections/banner/BackGround'
import { CardItem } from '@/domain/user-collection/sections/banner/components/CardItem'
import { TitleThumbnail } from '@/domain/user-collection/sections/banner/components/Thumbnail'
import { NextPage } from 'next'

const UserCollection: NextPage = () => (
  <div>
    <CustomAppbar />
    <main>
      <BackGround>
        <TitleThumbnail />
        <BannerSection isCollector={false} />
        <CardItem />
      </BackGround>
    </main>
    <Footer />
  </div>
)

const style = {
  root: css``,
}
export default UserCollection
