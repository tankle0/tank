import request from '../request.js'

function login(data){
  return request({
    url:'/eam/login',
    method:"post",
    data,
  })
}

export default{
  login
}