

function container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 
    bg-transparent bg-opacity-20 backdrop-blur-md backdrop-saturate-[1.8]
    shadow-lg border border-glassWhite rounded-lg'>
    {children}
  </div>
  
  )
}

export default container