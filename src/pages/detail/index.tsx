import type { NextPage } from 'next'
import { Footer } from '@/common/components/footer'
import { BannerSection } from '@/domain/detail/sections/banner'
import { DescriptionSection } from '@/domain/detail/sections/description'
import { MoreSection } from '@/common/components/section/MoreSection'

const Detail: NextPage = () => (
  <div>
    <main>
      <BannerSection />
      <DescriptionSection />
      <MoreSection />
    </main>
    <Footer />
  </div>
)

export default Detail
