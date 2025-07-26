import { useState } from 'react'
import './App.css'


function Cell({ filled, onClick , isDisabled }) {
  return <button type='button' onClick={onClick} className={filled ? "cell cell-activated" : "cell"  } disabled={isDisabled}></button>
}

function App() {

  const [order , setOrder] = useState([]);
  // const [isDeactivating , setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]

  const activeCells = (index) => {
   const  newOrder = [...order , index];
   console.log(newOrder)
    setOrder(newOrder)

    if(newOrder.length  === config.flat(1).filter((x)=> Boolean(x)).length)
    {
      deactivateCells() ;
    }

    
    function deactivateCells()
    {
      // setIsDeactivating(true);
      const timer = setInterval(()=>{
        setOrder((prev)=> {
          const newOrder = prev.slice()
          newOrder.pop()
          // return newOrder;
       

        if(newOrder.length ===0)
        {
          clearInterval(timer);
          // setIsDeactivating(false)

        }
        return newOrder;
         })

      },300)

    }
  }

  return (
    <div>
      <h1>Grid Lights</h1>
      <div className='grid' style={{
        gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        // gridTemplateRows: `repeat(${config[0].length}, 1fr)`

      }}>
        {
          config.flat(1).map((value, index) => value === 1 ? <Cell key={index} filled={order.includes(index)} onClick={() => activeCells(index)} isDisabled={order.includes(index)}/> : <span></span>)
        }
      </div>
    </div>
  )
}


export default App
