import { useState, useEffect } from 'react';

export default function ClockFunction (props) {
    const [time, setTime] = useState(new Date());

    let newTime = setInterval( () => console.log(time), 1000);

    useEffect( () => {
        setTime(new Date());
    }, [newTime])

    return (
        <div>
            <br />Hello class! Today is {props.day}. The date is {time.toLocaleTimeString()}<br />
        {/* <button onClick={() => setTime(new Date())}>Get new time</button> */}
        </div>
    )
}