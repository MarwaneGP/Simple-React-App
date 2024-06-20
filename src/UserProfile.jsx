import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
    
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className='card'>
      <div>
        <Link to="/">Back</Link>
      </div>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/album/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
