import './App.css'


function Cell({ filled, onClick }) {
  return <button type='button' onClick={onClick} className={filled ? "cell cell-activated" : "cell"}></button>
}

function App() {

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]

  const activeCells = (index) =>
  {

  }

  return (
    <div>
      <h1>Grid Lights</h1>
      <div className='grid' style={{
        gridTemplateColumns : `repeat(${config[0].length}, 1fr)`
        }}>
        {
          config.flat(1).map((value, index) => value==1 && <Cell key={index} filled={false} onClick={() => activeCells(index)}/>)
        }
      </div>
    </div>
  )
}

export default App
