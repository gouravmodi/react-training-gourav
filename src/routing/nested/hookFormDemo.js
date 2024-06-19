import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function HookFormDemo() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API or perform side effects
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrementCount = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const isEven = useMemo(() => count % 2 === 0, [count]);

  const inputRef = useRef(null);

  const onSubmit = (data) => {
    alert('Login successful!');
    console.log(data);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="form-container">
      <div>
        <h2>Counter Example</h2>
        <p>Count: {count}</p>
        <p>Count is {isEven ? 'even' : 'odd'}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
      <div>
        <h2>Fetched Data</h2>
        {data ? (
          <div>
            <p>{data.title}</p>
            <p>{data.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
