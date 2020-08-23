import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
         const NameChange = ['Julia','Scarlett', 'Hanks', 'Lopez','Robinson', 'Tom']
         const products = [{name: 'Photoshop', Price: '$99'},
                            {name: 'Adobe', Price: '$79'},
                            {name: 'PDF Reader', Price: '$19'},
                            {name: 'Illustrator', Price: '$89'},
                            {name: 'Premier El', Price: '$79'} ]
  const nameC = NameChange.map(name => name);
  console.log(nameC)
  return (
    <div className="App">
      <header className="App-header">

        <p>I am a React Developer</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            NameChange.map(nam => <li>{nam}</li>)
          }
           {
             products.map(product => <li>{product.name}</li>)
           }
        </ul>
        
        {
          products.map(pd => <Product product={pd}></Product>)
        }

         <Person name = {NameChange[0]} job = ' Fitness Trainer'></Person>
         <Person name =' Jhony Depp' job = ' Actor'></Person>
         <Person name = {NameChange[3]} job = ' Businessman'></Person>
         <Person name = ' Chris Gayel' job = ' Cricketer'></Person>
      
      </header>
    </div>
  );
}
function Users (){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[] )
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>{
        users.map(user => <li>{user.email}</li>)
        }
        <br/>
        {
          users.map(user =><li>{user.phone}</li>)
        }
  
      </ul>
    </div>
  )
}

function Product (props){
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width:'200px',
    float:'left'
  }
  const {name,Price} = props.product;

  return (
    <div style={productStyle}>
      <h2>{name}</h2> 
      <h3>{Price}</h3>
      
      <button>Buy now!</button>

    
    </div>
  )
}


function Person(props){
   const personStyle = {
     border : '4px solid cyan',
     margin :'12px',
     color: 'tomato',
     width: '700px'
     
   }
  return  (
    <div style={personStyle}>
       <h2>Name :{props.name}</h2>
        <h5 >Job :{props.job}</h5>
          
    </div>
    )

      
}
function Counter (){
  const[count, setCount] = useState(0);
  const handleIncrease = () => setCount(count+1);
  const handleDecrease = () => setCount(count-1);

  return (
    <div>
       <h1>Count: {count}</h1>
       <button onClick={handleIncrease}>Increase</button>
       <button onMouseMove={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
