import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  // const registerServiceWorker = async () => {
  //   if ('serviceWorker' in navigator) {
  //     try {
  //       const registration = await navigator.serviceWorker.register('/sw.js', {
  //         scope: '/',
  //       });
  //       if (registration.installing) {
  //         console.log('Service worker installing');
  //       } else if (registration.waiting) {
  //         console.log('Service worker installed');
  //       } else if (registration.active) {
  //         console.log('Service worker active');
  //       }
  //     } catch (error) {
  //       console.error(`Registration failed with ${error}`);
  //     }
  //   }
  // };

  // registerServiceWorker();
  const navigate = useNavigate();
  function handleClick() {
    navigate('/AnotherPage');
  }
  return (
    <>
      <div className='wrapper'>
        Testar PWA
        <button className='buttonhey' onClick={handleClick}>
          Knapp
        </button>
      </div>
      ;
    </>
  );
}

export default App;
