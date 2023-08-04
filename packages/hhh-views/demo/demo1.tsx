import { FC, memo, useEffect } from 'react'
import printHello from 'hhh-views'

const View:FC = () => {

  useEffect(() => {
    printHello()
  }, [])

  return <div>
    <span>test: </span>
    <input />
  </div>
}

export default memo(View)
