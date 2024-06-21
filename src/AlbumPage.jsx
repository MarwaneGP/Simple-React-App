import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function AlbumPage() {
  const { id } = useParams();/*getting the Id from the URL */
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)/*get the albums using id from the iserParams */
      .then(response => response.json())
      .then(data => setAlbum(data));

    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)/*same with the photos */
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, [id]);

  if (!album) return <div>Loading...</div>;/*display loading until we get the album */

  return (
    <div>
      <h1>{album.title}</h1>
      <div className="photo-grid">
        {photos.map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
      <Link to={`/user/${album.userId}`}>Back to User Profile</Link>{/*get back to the right user using the id */}
    </div>
  );
}

export default AlbumPage;
