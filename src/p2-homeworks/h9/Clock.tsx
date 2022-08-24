import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import './Clock.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
        console.log(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = `${date.getHours()}: 
                        ${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}
                       : ${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}` // fix with date
    const stringDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` // fix with date

    return (
        <div>
            <div className='viewTimeAndDate'>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>
                <div onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {show && (
                        <div>
                            {stringDate}
                        </div>
                    )}
                </div>
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
