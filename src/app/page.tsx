import React from 'react'
import Hero from './components/Hero/Hero'
import Course from './components/courses/course'
import WallOfLove from './components/walloflove/walloflove'
const page = () => {
  return (
    <div>
      <Hero/>
      <Course/>
      <WallOfLove/>
      {/* <Footer/> */}
    </div>
  )
}

export default page