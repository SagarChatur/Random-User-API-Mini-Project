import React,{useEffect, useState} from 'react'
import './App.css';
import {Button, Card} from 'react-bootstrap'

function App() {

  const [user,setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData =()=>{
    setIsLoading(true);
    fetch('https://randomuser.me/api/?results=1')
    .then((response) =>{
        return response.json();
    }).then((data)=>{
        let userdata = data.results
        setUser(userdata)
        setIsLoading(false)
    })
  }

  useEffect(()=>{
      fetchData();
  },[])


function refreshPage(){
  window.location.reload();
} 

  return (
    
    <div>
      {isLoading ? 
      <div className='text-center mt-5'>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>

       : 
      
       <div className='pt-4'>
       <div className='text-center'>
        <h2 className='ProjectTitle'>Random User API Project</h2>
       </div>
   
       
        {user.map(data => (
          
          <div className='center-card'>
          
            <div className=''>
            <div className="" key={data.id.value}>
            <Card>
            <Card.Img variant="top" src={data.picture.large} />

            <Card.Body>
              <Card.Title>{data.name.first +" " +data.name.last}</Card.Title>
              <p>{data.location.city +", " +data.location.state}</p>
              <p><i className="fa fa-phone"></i> {data.phone}</p>
              <h6><i className="fa-solid fa-envelope"></i> {data.email}</h6>

              <Card.Text>
             
              </Card.Text>

              {/*<Button variant="primary">New User</Button>*/}
            </Card.Body>
          </Card>
        </div>
            </div>
          </div>
        ))}
          <div className='text-center'>
            <Button className='btn btn-lg' variant="dark" onClick={refreshPage} disabled={isLoading}>New User</Button> 
          </div>
          
       </div>
        }
    </div>
  );
}

export default App;
