import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function AlbumPage() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(response => response.json())
      .then(data => setAlbum(data));

    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, [id]);

  if (!album) return <div>Loading...</div>;

  return (
    <div>
      <h1>{album.title}</h1>
      <div className="photo-grid">
        {photos.map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
      <Link to={`/user/${album.userId}`}>Back to User Profile</Link>
    </div>
  );
}

export default AlbumPage;
