const accessKey = "ebbbcee3e21c9ca1b1f14ca5fd6dd25861c0c705042df1acc76832c0aca109ee"
const secret = "efcf8da6115787a0b4fb652edc065a15b6e8ffc684194c78f75db2195f4493c0"
const callbackUrl = "http://localhost:3000/App.js/userAuthentication"

function userAuthentication() {
    var urlParams = new URLSearchParams(window.location.search);
    urlParams.get("code");
    console.log("code");
  }