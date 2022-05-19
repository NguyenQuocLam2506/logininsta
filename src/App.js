
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import InstagramLogin from 'react-instagram-login';
import { Card, Image } from 'react-bootstrap';
import './App.css';
import DataFetching from './DataFetching';
import axios from 'axios'

// function App() {
//   return (
//     <div className='App'>
//       <DataFetching />
//     </div>
//   )
// }

// export default App
// class App extends React.Component {

// 	// Constructor
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			DataisLoaded: false
// 		};
// 	}

// 	// ComponentDidMount is used to
// 	// execute the code
// 	componentDidMount() {
// 		fetch(
// "https://jsonplaceholder.typicode.com/users")
// 			.then((res) => res.json())
// 			.then((json) => {
// 				this.setState({
// 					items: json,
// 					DataisLoaded: true
// 				});
// 			})
// 	}
// 	render() {
// 		const { DataisLoaded, items } = this.state;
// 		if (!DataisLoaded) return <div>
// 			<h1> Pleses wait some time.... </h1> </div> ;

// 		return (
// 		<div className = "App">
// 			<h1> Fetch data from an api in react </h1> {
// 				items.map((item) => (
// 				<ol key = { item.id } >
// 					User_Name: { item.username },
// 					Full_Name: { item.name },
// 					User_Email: { item.email }
// 					</ol>
// 				))
// 			}
// 		</div>
// 	);
// }
// }

// export default App;

// // IGQVJWQWthN0dGcUhxVTRDaVdfNWpnVDN2aDBuQUMxVS1tMjhlSnFYSlhJOG5uZAVRFLUpfVjliaHp0RUtKR2ZAaVENLREZALUzNTRV92OWJWaWd4RkxyUmRkUFNHcGFldkItY1g1MmgycWxnd2hMXzh6MAZDZD
// //IGQVJXTEJ0TDFWSnEzeWVRd3NzeEhTanJmMjJ1MW9VaUhYS2xqQlEtNmNkaGotQmw5VXJZAU080cmd4czFNTXJHVm42ZAjgxRWoxX2ZA5S0JNdTY0ZAmhySkhLQmMwOEMtdkxqWU93UkFHSERYZAThWZA09yXwZDZD
function App() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseInstagram = (response) => {
    console.log(response);
  }
  const PostData  = () => {
    fetch('https://projectwebcnpm.herokuapp.com/Patient', {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({

            "Patient_ID" : 22,
        
            "Name" : "Nam",
        
            "Image" : "gggd",
        
            "Phone" : 123554,
        
            "Email" : "4gggafd"
        
        }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    }).then(function (response) { 
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    }).then(function (data) {
      console.log(data);
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    });
  }
  return (
    <div className="container">
      <button type='button' onClick={PostData}>Click Me!</button>
    {/* <InstagramLogin
      clientId="438581111328693"
      buttonText="Login with Instagram"
      redirect_uri='https://localhost:3000//oauth/authorize'
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      // scopes={['user_profile', 'user_media']}
      // onLoginSuccess={(data) => console.log("Success")}
      // onLoginFailure={(data) => console.log("Fail " +  JSON.stringify(data))}
      // scopes={['basic']}
      // onLoginSuccess={token => this.setState({ token })}
      // onLoginFailure={data => this.setState({ failure: data })}
    /> */}
    {/* <FontAwesome
      name="instagram"
    /> */}
    </div>
  );
}

export default App;
