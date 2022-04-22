import React, { useEffect, useState } from 'react'

const HookCounter5 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `Hook Count - ${count}`
    },[count])

    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}>Hook Count - {count}</button>
        </>
    )
}

export default HookCounter5