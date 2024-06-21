import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
/*get users from the api and set it in users const*/

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
/*get todos from the api and set it in todos const*/

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, []);
/*get albums from the api and set it in albums const*/



  const getTodosCount = (userId) => {
    return todos.filter(todo => todo.userId === userId).length;
  };

  const getAlbumsCount = (userId) => {
    return albums.filter(album => album.userId === userId).length;
  };

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
            <th>Company</th>
            <th>Number of Todos</th>
            <th>Number of Albums</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td><Link to={`/user/${user.id}`}>{user.username}</Link></td>
              {/* we can add another td to display the phone of the user here using user.phone */}
              <td>{user.email}</td>
              <td><a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></td>
              <td>{user.company.name}</td>
              <td>{getTodosCount(user.id)}</td>
              <td>{getAlbumsCount(user.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
