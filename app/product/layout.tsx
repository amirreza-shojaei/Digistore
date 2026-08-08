import React from 'react'

interface HLayout{
    children:React.ReactNode;
}
function Layout({children}:HLayout) {
  return (
    <div className=''>
      {children}</div>
  )
}

export default Layout