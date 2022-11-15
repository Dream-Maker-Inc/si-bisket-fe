import type { NextPage } from 'next'
import { Footer } from '@/common/components/footer'
import { CollectionBannerSection } from '@/domain/collection/sections/collectionBanner'
import { GallerySection } from '@/domain/collection/sections/gallery'
import { MoreSection } from '@/common/components/section/MoreSection'

const Detail: NextPage = () => (
  <div>
    <main>
      <CollectionBannerSection />
      <GallerySection />
      <MoreSection />
    </main>
    <Footer />
  </div>
)

export default Detail
