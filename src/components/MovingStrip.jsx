import React from 'react'

function MovingStrip() {
  return (
    <div className='gradient py-10'>
        <div className="marquee">
            <div className='flex items-center gap-4'>
                <span>React.Js</span>
                <span>React.Js</span>
                <span>React.Js</span>
            </div>
        </div>
    </div>
  )
}

export default MovingStrip