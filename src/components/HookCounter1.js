import React, { useEffect, useState } from 'react'

const HookCounter1 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Hook Count - ${count}`
    })

    return (
        <>
            <button onClick={() => setCount(count+1)}>Hook Count - {count}</button>
        </>
    )
}

export default HookCounter1