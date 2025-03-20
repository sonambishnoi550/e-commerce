import React from 'react'
import CommonSlider from './common/CommonSlider'
import { LIKE_LIST } from '@/utils/helper'
const Like = () => {
  return (
      <div>
          <CommonSlider title="You might also like" list={LIKE_LIST} />
    </div>
  )
}

export default Like