import { CustomAppbar } from '@/common/components/Appbar'
import { Footer } from '@/common/components/footer'
import { MoreSection } from '@/common/components/section/MoreSection'
import { BannerSection } from '../sections/banner'
import { BackGround } from '../sections/banner/BackGround'
import { CardItem } from '../sections/banner/components/CardItem'
import { GallerySection } from '../sections/gallery'
import { useUserCollectionView } from './useUserCollectionView'

export const UserCollectionView = () => {
  const { isCreator } = useUserCollectionView()
  return (
    <div>
      <CustomAppbar />
      <main>
        <BackGround>
          <BannerSection isCollector={!isCreator} />
          <CardItem />
        </BackGround>
        <GallerySection />
        <MoreSection />
      </main>
      <Footer />
    </div>
  )
}
