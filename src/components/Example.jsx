import React, { useEffect, useState } from 'react'

function Example() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Component mounted');
    }, []);
    useEffect(() => {
        console.log('The value of count has changed:', count);
    }, [count]); // Will only be executed when count has changed
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Таймер работает');
        }, 1000);

        return () => {
            clearInterval(interval); // Очистка таймера
            console.log('Таймер очищен');
        };
    }, []);

    const handleCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={handleCount}>increment count</button>
        </div>
    )
}

export default Example