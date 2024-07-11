const Alert = ({msg, color}) => {
  const classes = `mt-3 alert alert-${color}`
  return(
    <div className={classes} role='alert'> 
      {msg}
    </div>
  )
}

export default Alert