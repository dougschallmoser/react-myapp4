import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3r40ashS9EWt8i3jW3ylJ6XFZReeTYMbJGeqeOYguOY'
  }
})