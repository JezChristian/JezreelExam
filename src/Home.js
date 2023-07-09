import './scss/App.scss';
import Brochure from './components/Brochure';
import Carousel from './components/Carousel';
import Specs from './components/Specs';
import {useState} from 'react'
import Mouse from './assets/WM2-1.png'
import ProdInfo from './products.json'
import GrFormNext from 'react-icons/gr'

function App() {
  const [displayBrochure, setDisplayBrochure] = useState(true);


  const handleBrochureClick = () => {
    setDisplayBrochure(true);
  };

  const handleSpecsClick = () => {
    setDisplayBrochure(false);
  };

  const [currentItem, setCurrentItem] = useState(0);

  // const itemLength = ProdInfo.length();

  // const nextImage = ProdInfo[currentItem+1].image

  // console.log({nextImage})

  return (
    <div className="App">
      <Carousel index={currentItem}/>

      <div className='home-con'>
        <div className='button-con'>
          <div className='button-wrapper'>
              <button className='brochure' onClick={handleBrochureClick}>Brochure</button>
              <button className='specs' onClick={handleSpecsClick}>Specifications</button>
          </div>
        </div>
        {displayBrochure ? <Brochure index={currentItem}/> : <Specs index={currentItem}/>}

        {ProdInfo && currentItem===0 ? (<div> </div>) : (<div className='Prev-Mouse'>
        <button onClick={()=>setCurrentItem(currentItem-1)}>
          <span>
          <img src={ProdInfo[currentItem-1].thumbnails[0]} />
            </span>
            <p>
              {ProdInfo[currentItem-1].name}
            </p>
            </button>
        </div>)}
        

        {ProdInfo && ProdInfo.length>currentItem+1 ? (
          <div className='Next-Mouse'>
          <button onClick={()=>setCurrentItem(currentItem+1)}>
            <span>
              <img src={ProdInfo[currentItem+1].thumbnails[0]} />
              
              </span>
              <p>{ProdInfo[currentItem+1].name}</p></button>
        </div>
        ) : (<div> </div>)}
        
      </div>
      
    </div>
    

  );
  
}

export default App;
