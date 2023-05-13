import type { NextPage } from 'next'
import { Layout } from '../components/Layouts'
import { metadataIndex } from '../constants'


const Style: NextPage = () => {
  return (
    <Layout metadata={metadataIndex}>
      <div className='container'>
        <h1>PartyPlanner</h1>
        <h2>PartyPlanner</h2>
        <h3>PartyPlanner</h3>
        <h4>PartyPlanner</h4>
        <p className='text-large'>PartyPlanner</p>
        <p className='text-default'>PartyPlanner</p>
        <p className='text-small'>PartyPlanner</p>
        <p className='text-extra-small'>PartyPlanner</p>
        <button className='btnBigDark'>Big Dark</button>
        <button  className='btnBigLight'>Big Light</button>
        <button  className='btnSmallDark'>Small Dark</button>
        <button  className='btnSmallLight'>Small Light</button>
      </div>
    </Layout>
  )
}

export default Style;