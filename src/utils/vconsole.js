import VConsole from "vconsole";

(function (){
  const hostUrl = 'http://103.113.6.179'
  const currentHost = window.location.protocol + '//' + window.location.host
  if(currentHost === hostUrl || process.env.NODE_ENV !== 'production'){
    let vconsole = new VConsole()
  }
})()