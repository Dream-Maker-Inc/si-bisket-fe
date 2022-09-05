import React from 'react'
import type { NextPage } from 'next'
import { CollectionSection } from '@/domain/main/sections/collection'
import { CuratedSection } from '@/domain/main/sections/curated'
import { ColumnSection } from '@/domain/main/sections/column'
import { SubscribeSection } from '@/domain/main/sections/subscribe'
import { Footer } from '@/common/components/footer'

const Home: NextPage = () => (
  <>
    <main>
      <CollectionSection />
      <CuratedSection />
      <ColumnSection />
      <SubscribeSection />
    </main>
    <Footer />
  </>
)

export default Home
