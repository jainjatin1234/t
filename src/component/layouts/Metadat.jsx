import React from 'react'
import {Helmet} from 'react-helmet'
const Metadat = ({title}) => {
  return (
    <>
    <Helmet>
        <title>
        {title}
        </title>
    </Helmet>
    </>
  )
}

export default Metadat