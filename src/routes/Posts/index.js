import axios from 'axios'
import { useState, useEffect } from 'preact/hooks'

const Posts = () => {
  const api = 'https://jsonplaceholder.typicode.com/posts'
  const [data, setData] = useState([])

  // side-effect: fetch data
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${api}`)
      // limit items to display to 5
      response.data.length = Math.min(response.data.length, 5)
      setData(response.data)
    }
    getData()
  }, [])

  return (
    <div>
      {data.map(post => (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      ))}
    </div>
  )
}

export default Posts
