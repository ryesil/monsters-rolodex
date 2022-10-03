import { useState,useEffect } from 'react';
import SearchBox from './searchBox/SearchBox';
import CardList from './cardList/CardList';
import './App.css';

function App() {
const [searchField,setSearchField ]=useState('')
const [title, setTitle]=useState('')
const [monsters, setMonsters]=useState([]);
const [filteredMonsters, setFilteredMonsters]=useState(monsters);


useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users').
then((response)=>response.json()).
then((users)=>setMonsters(users))
},[])
useEffect(()=>{
  const newFilteredMonsters = monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  setFilteredMonsters(newFilteredMonsters);
},[monsters,searchField])


const onSearchChange=(event)=>{
  const searchFieldString=event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString);
  }
  
  const onTitleChange=(event)=>{
    const searchFieldString=event.target.value
    setTitle(searchFieldString);
    }

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
<SearchBox
  className='mosters-search-box'
  onChangeHandler={onSearchChange}
  placeholder='search monsters'/>
  <br/>
  <SearchBox
  className='title-search-box'
  onChangeHandler={onTitleChange}
  placeholder='set title'/>
  <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
