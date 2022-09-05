import type { NextPage } from 'next'
import { CollectionSection } from '@/domain/main/sections/collection'
import { CuratedSection } from '@/domain/main/sections/curated'
import { ColumnSection } from '@/domain/main/sections/column'

const Home: NextPage = () => (
  <main>
    <CollectionSection />
    <CuratedSection />
    <ColumnSection />
  </main>
)

export default Home
