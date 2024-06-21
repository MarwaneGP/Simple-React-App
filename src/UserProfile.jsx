import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); /*getting the Id from the URL */
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)/*get the user using id from the iserParams */
      .then(response => response.json())
      .then(data => setUser(data));
    
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)/*same with the albums */
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;/*Loading animation ~ will disapear when user is fetched */

  return (
    <div className='card'>
      <div>
        <Link to="/">Back</Link>
      </div>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* we could add a section with the adress and meybe use the coordinates to display a map loc here */}
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
