import { useEffect } from 'react';
import useStore from './store';

export default function App() {
  const getUsers = useStore((store) => store.getUsers);
  const usersList = useStore((store) => store.usersList);

  useEffect(() => {
    getUsers();
  }, []);

  console.log(usersList);

  return (
    <>
      <div class='main-wrapper login'>
        <section class='login-section'>
          <h2>Choose your user!</h2>
          <ul>
            <li>
              <button class='user-selection'>
                <img
                  class='avatar'
                  width='50'
                  height='50'
                  src='https://robohash.org/1'
                  alt=''
                />
                <h3>John Doe</h3>
              </button>
            </li>
            <li>
              <button class='user-selection'>
                <img
                  class='avatar'
                  width='50'
                  height='50'
                  src='https://robohash.org/2'
                  alt=''
                />
                <h3>Tin Man</h3>
              </button>
            </li>
            <li>
              <button class='user-selection'>
                <img
                  class='avatar'
                  width='50'
                  height='50'
                  src='https://robohash.org/3'
                  alt=''
                />
                <h3>Carl T-800</h3>
              </button>
            </li>
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
