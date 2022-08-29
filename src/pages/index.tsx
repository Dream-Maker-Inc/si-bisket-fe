import type { NextPage } from 'next'
import { CollectionSection } from '@/domain/main/sections/collection'
import { CuratedSection } from '@/domain/main/sections/curated'

const Home: NextPage = () => (
  <main>
    <CollectionSection />
    <CuratedSection />
  </main>
)

export default Home
