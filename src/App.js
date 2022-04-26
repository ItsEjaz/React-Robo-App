
import robot from './Components/robot.png';
import './App.css';
import Profile from './Components/Profile'

import react,{useState,useEffect} from 'react';
import axios from 'axios'

function App() {
  const [Data,setData]=useState([]);
  const [search,setSearch]=useState('');
  const [searchResult,setSearchResults] = useState("");

 useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(response => {
     setData(response.data);
     
    });
 },[]) ;

 const dataFilter =(e)=>{
  setSearch(e.target.value)
   if (search !== '') {
     const filterSearch = Data.filter((item) => {
       return Object.values(item).join('').toLowerCase().
       includes(search.toLowerCase())})
       setSearchResults(filterSearch)
     }
     else{
      setSearchResults(Data)
     }
   }
 

  return (
    <div className="App">
     
      <h1 className="App-logo">
        ROBO APP
      </h1>



      <input 
      class='search' 
      value={search}
      placeholder="Search..."
      onChange={e=>dataFilter(e)}
      ></input>
      
      <div className="Card-Container">
        {search.length>1 ? (searchResult.map((item) => {
          return(
          <Profile 
          picture={
            "https://robohash.org/"+item.id
          } 
          name={item.name} 
          email={item.email} />
          )})) : (
            Data.map((item) => {
            return(
            <Profile 
            picture={
              "https://robohash.org/"+item.id
            }
            name={item.name} 
            email={item.email} />
            )
        }
        
        ))}
                
      </div>
      

    </div>
  );
}

export default App;
