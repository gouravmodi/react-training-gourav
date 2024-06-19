import React, { useEffect, useState } from 'react';
export default function UseEffectDemo(props) {
    const [val, setVal] = useState(10);
    const [data, setData] = useState("Hello");

    useEffect(() => {
        alert("ComponentDidMount");
    }, [])
    
    useEffect(() => {
        alert("ComponentDidMount/Update");
    })

    useEffect(() => {
        alert("Val Updated");
    }, [val])
    return (
        <div>
            This is UseEffectDemo
            <br />
            <button onClick={() => setVal(25)}>Change Val</button>
            States are - {val}

            <button onClick={() => setData(25)}>Change Val</button>
            States are - {data}
        </div>
    );
}