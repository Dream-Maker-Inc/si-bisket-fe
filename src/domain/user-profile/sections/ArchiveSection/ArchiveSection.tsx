import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { useState } from 'react'
import { ArchiveContent, CategorySection } from './elements'
import { GallerySection } from './elements/gallery'

type ArchiveSectionProps = {
  isCreator: boolean
}

export const ArchiveSection = ({ isCreator }: ArchiveSectionProps) => {
  const categoryModels = [
    'Created',
    'Collected',
    'Favorites',
    'Hidden',
    'About',
  ]

  const collectorCategoryModels = ['Collected', 'Favorites', 'Hidden', 'About']

  return (
    <div css={style.root}>
      <div css={style.container}>
        <CategorySection
          categoryList={isCreator ? categoryModels : collectorCategoryModels}
        />
        <ArchiveContent isCreator={isCreator} />
        <GallerySection />
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    padding: 0 23px;
    padding-bottom: 200px;
    @media ${MediaQueries.xs} {
      padding-bottom: 160px;
    }
  `,
  container: css`
    max-width: 1400px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  `,
}
