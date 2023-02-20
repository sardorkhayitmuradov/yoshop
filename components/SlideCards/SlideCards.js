import React from 'react'

export default function SlideCards({children}) {
  const [isMouseOver, setIsMouseOver] = useState(false);


  return (
    <div>{children}</div>
  )
}
