import{useState} from 'react'
import './App.css';

function App() {
  const [starCount, setStarCount]=useState(0)
  const [hoverCount, setHoverCount] = useState(0);
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <div className="star">
      {[...Array(5)].map((_, index)=>{
        return(  <span key={index}
          className={`${index+1 <= starCount ? "selected": ''} `}
         onClick={()=>{
          setStarCount(index+1 === starCount? 0: index+1)
         }}
         onMouseOver={ () =>{
          setHoverCount(index+1)
         }}
         onMouseOut={()=>{
          setHoverCount(0)
         }}
        >&#9733;</span>)
       
      })}
    
      </div>
      <p className='ratingCount'>Rating Count: {starCount}</p>
      <p className='hoverCount'>Hover Count: {hoverCount}</p>
    </div>
  );
}

export default App;
