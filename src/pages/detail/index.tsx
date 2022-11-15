import type { NextPage } from 'next'
import { Footer } from '@/common/components/footer'
import { BannerSection } from '@/domain/detail/sections/banner'
import { DescriptionSection } from '@/domain/detail/sections/description'
import { FormSection } from '@/domain/detail/sections/form'

const Detail: NextPage = () => (
  <div>
    <main>
      <BannerSection />
      <DescriptionSection />
      <FormSection />
    </main>
    <Footer />
  </div>
)

export default Detail
