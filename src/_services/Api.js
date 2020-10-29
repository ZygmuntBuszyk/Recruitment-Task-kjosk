import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://kjosk-sample-api.azurewebsites.net/`
  })
}