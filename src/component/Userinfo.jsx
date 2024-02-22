import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const Userinfo = () => {
    const [Udata,setUdata] = useState([]);
    const fetchuser = ()=>{
        //whatever API we pass fetch() method  raises a git request to the user
        //to Handle this data we will use .then to handle the promise
        fetch("https://randomuser.me/api/?results=30")
        .then(res =>{return res.json();
            //res is gonna handle the response
        }).then(data =>{
            //results used bcoz the data at public website is in same name as result variable
            let users = data.results;
            setUdata(users);
        })
        
    };
    //Passing a list decides for how many times usEffect to be called
    useEffect(()=>{
       fetchuser();
    },[]);
  return (
    <>
        {/* assigns value to the uitem */}
      {/* {Udata.map((uitem,index)=><div key ={index}>{uitem.name.first}</div>)} */}
      <div classNameName="row">
      {Udata.map((uitem,index)=>
      <div classNameName="col-md-3 mb-3">
        <section className="vh-100" style={{backgroundColor:"#eee"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-4">

        <div className="card" style={{borderRadius:"15px"}}>
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img src={uitem.picture.medium}
                className="rounded-circle img-fluid" alt='Hi' style={{width: "100px"}} />
            </div>
            <h4 className="mb-2">{uitem.name.first}</h4>
            <p className="text-muted mb-4">{uitem.location.country}<span className="mx-2">|</span> <a
                href="/">{uitem.email}</a></p>
            <div className="mb-4 pb-2">
              <button type="button" className="btn btn-outline-primary btn-floating">
                <i className="fab fa-facebook-f fa-lg"></i>
              </button>
              <button type="button" className="btn btn-outline-primary btn-floating">
                <i className="fab fa-twitter fa-lg"></i>
              </button>
              <button type="button" className="btn btn-outline-primary btn-floating">
                <i className="fab fa-skype fa-lg"></i>
              </button>
            </div>
            <button type="button" className="btn btn-primary btn-rounded btn-lg">
              Message now
            </button>
            <div className="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <p className="mb-2 h5"></p>
                <p className="text-muted mb-0"></p>
              </div>
              <div className="px-3">
                <p className="mb-2 h5">8512</p>
                <p className="text-muted mb-0">Income amounts</p>
              </div>
              <div>
                <p className="mb-2 h5">4751</p>
                <p className="text-muted mb-0">Total Transactions</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>)}
        
      </div>
    </>
    // <div classNameName="col-md-3">
    // <div classNameName="card" style={{width: "18rem"}}>
    // <img src="..." classNameName="card-img-top" alt="..."></img>
    // <div classNameName="card-body">
    // <h5 classNameName="card-title">Card title</h5>
    // <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    // <a href="/" classNameName="btn btn-primary">Go somewhere</a>
    // </div>
    // </div>
    // </div>
  )
}

export default Userinfo;