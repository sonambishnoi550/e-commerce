import React from 'react'
import CommonSlider from './common/CommonSlider'
import { SELLING_LIST } from '@/utils/helper'

const Selling = () => {
  return (
      <div>
          <CommonSlider title='TOP SELLING' list={SELLING_LIST}/>
    </div>
  )
}

export default Selling