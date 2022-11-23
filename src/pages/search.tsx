import React from 'react'
import { NextPage } from 'next'
import { SearchContainer } from '@/domain/search/sections/searchContainer'
import { Footer } from '@/common/components/footer'

const Search: NextPage = () => (
  <>
    <main>
      <SearchContainer />
    </main>
    <Footer />
  </>
)

export default Search
