import { useState, useEffect } from 'react';
import { example } from '../GlobalClasses/example';
export default function SampleFunction (props) {
    const [items, setItems] = useState([]);
    const [error, hasError] = useState(null);

    useEffect( (x) => {
        // example.getUsers()
        //     .then( r => setItems(r) )
        example.deleteUser(x)
    })

    return(
        <div>
            <ul>
            {items.map(item => (
                <li key={item.username}>
                {item.username}: {item.name}
                </li>
            ))}
            </ul>
        </div>
    )

}