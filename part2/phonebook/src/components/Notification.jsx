const Notification = ({ message, status }) => {

    const success = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }
    const error = {
        color: 'red',
        fontStyle: 'italic',
        fontSize: 16
    }

    if (message === null) {
      return null
    }
    
    if (status==="success") {
        return (
            <div style={success}>
                {message}
            </div>
        )
    }
    return (
        <div style={error}>
        {message}
      </div>
    )
  }

  export default Notification;