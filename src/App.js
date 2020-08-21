import React from 'react';
import Pages from './pages'
import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/maxrosenb')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}
export default App;
