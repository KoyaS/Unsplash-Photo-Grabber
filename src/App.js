import React, {useState, useEffect} from 'react';
import reactDom from 'react-dom';
import logo from './logo.svg';
import Unsplash from 'unsplash-js';
import toJson from 'json-schema'
import query from 'querystring'
import { resolve } from 'dns';
// import config from 'universal-config';

// This function has to do with authenticating a user to view their private data
// function App() {

//   const Unsplash = require('unsplash-js').default;
//   const unsplash = new Unsplash({
//     accessKey: "ebbbcee3e21c9ca1b1f14ca5fd6dd25861c0c705042df1acc76832c0aca109ee",
//     secret: "efcf8da6115787a0b4fb652edc065a15b6e8ffc684194c78f75db2195f4493c0",
//     callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
//   });

//   // const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//   //   "public"
//   // ]);

//   // window.location.assign(authenticationUrl);
  
//   // unsplash.auth.userAuthentication(query.code)
//   // .then(toJson)
//   // .then(json => {
//   //   unsplash.auth.setBearerToken(json.access_token);
//   // });
  
//   // function userAuthentication(code) {
//   //   return unsplash.auth.userAuthentication(code)
//   //     .then(toJson)
//   //     .then(json => json.access_token);
//   // }


//   unsplash.photos.getRandomPhoto({ featured: true })
//   .then(toJson)
//   .then(json => {
//     console.log(json.links.html);
//   });

//   // unsplash.photos.getRandomPhoto({ username: "ksaito" })
//   // .then(toJson)
//   // .then(json => {
//   //   // Your code
//   // });

//   return(
//     null
//   )
// }

// function getimage () {
//   fetch("https://source.unsplash.com/random").then(response => {
//     // console.log(response.url)
//     return(response.url)
//   });
// }

const getimage = () => {fetch("https://source.unsplash.com/random").then(response => <Randomimage /> );}

//Does not work, fills an array but runs asynchronus funtions so data in array is not registered in time
// function getimages() {
//   var urls = [];
//   for (var i=0; i<10; i++){
//     getimage().then( result => { urls.push(result) });  
//   }
//     console.log(urls);
//   return(urls)
// }

//Does not work: depended on asynchronus getimages array
// const Imglst = (props) =>{
//   const images = getimages();
//   return(
//     <div>
//       {images.map(image => <Randomimage {...image}/>)}
//     </div>
//   );
// }

class Randomimage extends React.Component {
  render(){
    const images = this.props
    return(
      <img src={images}></img>
    );
  }
}

function App() {

  return(

    <div>
      <Randomimage />
    </div>

  );

}

export default App;

