
import './App.css';
import React,{useState} from 'react';
import Recepe from './components/Recepelist';

function App() {

  const[query,setquery] = useState("")
  const[recepe,setrecepe] = useState([])

  async function getRecepes(){
    var response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=5d740b4c&app_key=0a71553be42ce3723bcffaf3f9f80fc8&from=0&to=20`)
    var data = await response.json();
    console.log(data);
    setrecepe(data.hits);
    // console.log(recepe);

  }

  const onSubmit=(e)=>{
    e.preventDefault();
    getRecepes();
  }
  return (
    <div className="">
      <div className='banner app'>
      <h1>&nbsp;Food Recipe&nbsp;</h1>
      <form className='app-searchForm' onClick={onSubmit}>
        <input type="text" placeholder='Type your ingridient'
        value={query}
        onChange={(e)=>setquery(e.target.value)} 
        className="app-input"
        />
        <input type="button" value="Search" 
         
         className="app-submit"/>
      </form>
      </div>
      
      <div className='app-recepe'>

        
        {

          recepe.length === 0 ? <p>Many Food recepe Avaliable Search above</p>:
          
          recepe.map((item)=>{

            if(item ===""){
              return <p>we have many other Food Better than this , experince that :)</p>
            }
            console.log(item);
              return <Recepe recepe={item}/>

              })

              

              

              
        }

        
        
      </div>
    </div>
  );
}

export default App;
