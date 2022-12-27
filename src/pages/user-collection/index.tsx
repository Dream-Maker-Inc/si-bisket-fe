import { CustomAppbar } from '@/common/components/Appbar'
import { Footer } from '@/common/components/footer'
import { css } from '@emotion/react'
import { BannerSection } from '@/domain/user-collection/sections/banner'
import { BackGround } from '@/domain/user-collection/sections/banner/BackGround'
import { CardItem } from '@/domain/user-collection/sections/banner/components/CardItem'
import { NextPage } from 'next'
import { GallerySection } from '@/domain/user-collection/sections/gallery'
import { MoreSection } from '@/common/components/section/MoreSection'

const UserCollection: NextPage = () => (
  <div>
    <CustomAppbar />
    <main>
      <BackGround>
        <BannerSection isCollector={false} />
        <CardItem />
      </BackGround>
      <GallerySection isUserCollector={true} />
      <MoreSection />
    </main>
    <Footer />
  </div>
)

const style = {
  root: css``,
}
export default UserCollection
