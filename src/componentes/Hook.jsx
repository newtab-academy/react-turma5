import React, { useState } from 'react';

export default function Example() {
  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, blabla] = useState(0);

  function addOne(){
    blabla(count + 1)
 
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => addOne()}>
        Click me
      </button>
    </div>
  );
}