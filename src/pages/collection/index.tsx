import type { NextPage } from 'next'
import { Footer } from '@/common/components/footer'
import { CollectionBannerSection } from '@/domain/collection/sections/collectionBanner'
import { GallerySection } from '@/domain/collection/sections/gallery'
import { MoreSection } from '@/common/components/section/MoreSection'
import { CustomAppbar } from '@/common/components/Appbar'

const Collection: NextPage = () => {
  return (
    <div>
      <CustomAppbar />
      <main>
        <CollectionBannerSection />
        <GallerySection />
        <MoreSection />
      </main>
      <Footer />
    </div>
  )
}

export default Collection
