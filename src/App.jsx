import { useState, useEffect, useCallback } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import {
  useInitialize,
  useData,
  useVisitorCode,
  useFeatureFlag,
  CustomData,
} from '@kameleoon/react-sdk';

function App() {
  const [count, setCount] = useState(0);
  const { initialize } = useInitialize();
  const { addData } = useData();
  const { getVisitorCode } = useVisitorCode();
  const { getFeatureFlagVariationKey } = useFeatureFlag();

  const init = useCallback(async () => {
    await initialize();

    const visitorCode = getVisitorCode();

    addData(visitorCode, new CustomData(0, 'my_value'));

    const variationKey = getFeatureFlagVariationKey(
      visitorCode,
      'my_feature_key'
    );

    // console.log(variationKey);
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <div className='app-container'>
        <header className='app-header'>
          <h1>A Simple Page</h1>
        </header>
        <main className='app-main'>
          <h2 className='app-title'>Welcome to My Page!</h2>
          <img src={reactLogo} className='app-image' alt='React Logo' />
          <p className='app-text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            dolores tenetur similique soluta cupiditate accusamus placeat
            perferendis inventore architecto neque qui harum vero, cum commodi.
            Perspiciatis minus nulla modi! Itaque optio iste magnam odio minus
            error totam nulla mollitia veritatis ea facere alias natus eaque
            repellat, accusantium deserunt obcaecati qui expedita, beatae
            laudantium? Ipsa itaque enim amet quam. Sunt tenetur rerum tempora
            deserunt deleniti repellendus explicabo similique magnam, eius
            nostrum, sed ipsum corporis alias odio libero iste iure in
            voluptates, officiis cumque quos quasi. Obcaecati, ratione? Expedita
            explicabo tempora facere, ab iste aspernatur, libero, quae officia
            quas ipsum esse ipsam!
          </p>
        </main>
        <button
          className='app-button'
          onClick={() => setCount((count) => count + 1)}
        >
          Click Me
        </button>
        <p>{count}</p>
      </div>
    </>
  );
}

export default App;
