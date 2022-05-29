import React, { Fragment } from 'react'
import CursorFollow from '../components/CursorFollow'

function MyFace() {
  return (
    <Fragment>
      <div>MyFace</div>
      <CursorFollow img='/my-face.jpeg' />
    </Fragment>
  )
}

export default MyFace