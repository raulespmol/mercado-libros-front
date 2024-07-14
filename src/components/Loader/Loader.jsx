import './style.css'

const Loader = ({color, size, density }) => {
  const style = {
    background: color,
    width: size,
    padding: density
  }
  
  return (
    <div 
      className='loader'
      style={style}
    ></div>
  )
}

export default Loader