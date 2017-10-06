import axios from 'axios'

const http = axios.create({
  baseURL: 'http://192.168.9.163:3000'
})

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    http.post('/login', {
      username,
      password
    })
      .then((response) => {
        return response.data
      })
      .then((data) => {
        console.log(`token set = ${data.token}`)
        window.localStorage.setItem('token', data.token)
        resolve(data)
      }).catch(err => {
        reject(err)
      })
  })
}

const postWithToken = (url) => {
  let token = window.localStorage.getItem('token') || ''
  return http.post(url, {}, {
    headers: {
      'X-Token': token
    }
  })
}
const getWithToken = (url) => {
  let token = window.localStorage.getItem('token') || ''
  return http.get(url, {
    headers: {
      'X-Token': token
    }
  })
}

export const history = () => getWithToken(`/timestamps`)
export const checkin = () => postWithToken(`/timestamps/checkin`)
export const checkout = () => postWithToken(`/timestamps/checkout`)
export const logout = () => { window.localStorage.removeItem('token') }
