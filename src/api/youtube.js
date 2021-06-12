import axios from 'axios';

const KEY = 'AIzaSyAChMHWiKfww9IMfn6ehuYf9jQui6yFD0o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
