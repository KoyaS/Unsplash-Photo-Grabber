import React, {useState, useEffect} from 'react';
import reactDom from 'react-dom';
import logo from './logo.svg';
import Unsplash from 'unsplash-js';
import toJson from 'json-schema'
import query from 'querystring'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import {get, post} from 'jquery'
// import { url } from 'inspector';

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

const accessKey = "ebbbcee3e21c9ca1b1f14ca5fd6dd25861c0c705042df1acc76832c0aca109ee"
const secret = "efcf8da6115787a0b4fb652edc065a15b6e8ffc684194c78f75db2195f4493c0"
const callbackUrl = "http://localhost:3000"

function Unsplash_authentication() {
  const Unsplash = require('unsplash-js').default;
  const unsplash = new Unsplash({
    accessKey: accessKey,
    secret: secret,
    callbackUrl: callbackUrl
  });

  // const bearerToken = unsplash.auth.setBearerToken()

  const authUrl = unsplash.auth.getAuthenticationUrl([
    "public"
  ]);

  if (new URLSearchParams(window.location.search).get("code") == null){
    window.location.assign(authUrl);
  } else {
    userAuthentication();
  }
  function userAuthentication() {
    var urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    return(code);
  }
  
  unsplash.search.collections("dogs", 1)
  .then(toJson)
  .then(json => {
    console.log(json)
  });

  unsplash.photos.getRandomPhoto({query:"mountain"}).then(toJson).then(json => {
    console.log(json)
  });

  // unsplash.auth.userAuthentication(query.code)
  // .then(toJson)
  // .then(json => {
  //   unsplash.auth.setBearerToken(json.access_token);
  // });
  
  // function userAuthentication(code) {
  //   return unsplash.auth.userAuthentication(code)
  //     .then(toJson)
  //     .then(json => json.access_token);

  return(
    null
  );
}

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

// const getimage = fetch("https://source.unsplash.com/random").then( response => { return(<Randomimage url={response.url}/>) } );
//Script below for getting random image from unsplash! Not using API-------------------------------
const numPhotos = 1;

const utils = {
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i)
}

async function getimage() {
  // Returns url of a random unsplash image
  var imageUrl = (await(fetch("https://source.unsplash.com/random"))).url
  return( imageUrl );
}

function ImageList() {
  return(
    <>
      {utils.range(1,numPhotos).map(imgNo => <Randomimage key={imgNo} imgNo={imgNo}/>)}
    </>
  );
}

class Randomimage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      key: this.props.imgNo,
      url:"https://via.placeholder.com/500",
      rendered: false
    };
  }
  render(){
    if (!this.state.rendered){
      getimage().then(result => {this.setState( { url : result })})
      this.state.rendered=true
    }
    return(
      <>
          <h1>{this.state.key}</h1>
          <div style={{height:"500px",width:"500px",display:"flex",overflow:"hidden",alignItems:"center"}}>
          <img className="rounded" src={this.state.url} style={{height:"490px"}} ></img>
        </div>
      </>
    );
  }
}

function App() {
  // var image = getimage().then(result => console.log(result))

  return(
    <>
      <Unsplash_authentication />
      <ImageList />
    </>
  );
}

export default App;

