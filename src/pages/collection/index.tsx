import type { NextPage } from 'next'
import { Footer } from '@/common/components/footer'
import { CollectionBannerSection } from '@/domain/collection/sections/collectionBanner'
import { GallerySection } from '@/domain/collection/sections/gallery'
import { MoreSection } from '@/common/components/section/MoreSection'
import { TransparentAppbar } from '@/common/components/TransparentAppbar'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import { SearchBar } from '@/common/components/SearchBar'

const Collection: NextPage = () => {
  const { isWebNormal } = useCustomMediaQuery()
  return (
    <div>
      {isWebNormal ? <SearchBar /> : <TransparentAppbar />}

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
