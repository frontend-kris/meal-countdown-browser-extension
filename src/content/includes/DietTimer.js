import React from 'react'
import { Button } from '@material-ui/core'
import Timer from 'react-compound-timer'

const DietTimer = (props) => {


    let date = new Date()
    date = date.getTime()

    return(
        <div className="diet__countDown">
            <p className="diet__header">Czas do kolejnego posiłku:</p>
            <div className="diet__timer">
                <Timer
                    initialTime={props.timeToEnd - date}
                    // initialTime={300} // for tests
                    lastUnit="h"
                    direction="backward"
                    checkpoints={[
                        {
                            time: 0,
                            callback: playSound,
                        }
                    ]}
                >
                    {() => (
                        <React.Fragment>
                            <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />
                        </React.Fragment>
                    )}
                </Timer>
            </div> 
            <Button>Chcę zjeść teraz</Button>
        </div>
    )
}

export default DietTimer;
 