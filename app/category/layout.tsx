import React from 'react'
import Breadcrumb from '@/src/components/ui/breadcrumb';
interface HLayout{
    children:React.ReactNode;
}
function Layout({children}:HLayout) {
  return (
    <div className='m-5'>
      <Breadcrumb className=" text-gray-400 m-7" />
      {children}</div>
  )
}

export default Layout