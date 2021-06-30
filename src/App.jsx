import { useEffect } from 'react';
import useStore from './store';

export default function App() {
  const getUsers = useStore((store) => store.getUsers);
  const usersList = useStore((store) => store.usersList);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div class='main-wrapper login'>
        <section class='login-section'>
          <h2>Choose your user!</h2>
          <ul>
            {usersList.map((user, index) => {
              return (
                <li key={index}>
                  <button class='user-selection'>
                    <img
                      class='avatar'
                      width='50'
                      height='50'
                      src={user.avatar}
                      alt={user.firstName}
                    />
                    <h3>
                      {user.firstName} {user.lastName}
                    </h3>
                  </button>
                </li>
              );
            })}

            <li>
              <button class='user-selection'>
                <h3>+ Add a new user</h3>
              </button>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
