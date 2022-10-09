import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { css } from '@emotion/react'
import { NftResults } from '@/domain/search/sections/resultContainer/nft/NftResults'
import { ArtistResults } from '@/domain/search/sections/resultContainer/artist/ArtistResults'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  )
}

const TabProps = (index: number) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

export const ResultContainer = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box css={style.root}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='NFTs' {...TabProps(0)} css={style.tab} />
          <Tab label='Artists' {...TabProps(1)} css={style.tab} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <NftResults data='yes' />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArtistResults data='yes' />
      </TabPanel>
    </Box>
  )
}

const style = {
  root: css`
    width: 100%;
    max-width: 1396px;
    margin: 0 auto;
  `,
  tab: css`
    width: 100%;
    text-transform: none;
    font-weight: bold;
    font-size: 24px;
    float: left;
  `,
}
