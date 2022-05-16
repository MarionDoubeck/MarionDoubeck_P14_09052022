const PopIn = ({mode, setMode}) => {

    let popIn = (<></>)
    if (mode === 'show'){
        popIn = (
            <div id="popInContainer">
                <div id="popIn">
                    <button     
                        className="close" 
                        onClick={() => setMode('hide')}
                    >&#10006;</button>
                    <p>Employee Created !</p>
                </div>
            </div>
        )
    }

  return (
    <>{popIn}</>
  )
}

export default PopIn