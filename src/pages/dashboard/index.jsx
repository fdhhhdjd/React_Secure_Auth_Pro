import Lottie from 'react-lottie';

import * as hello from '@/assets/json/hi.json';

const DashBoard = () => {
  const helloJson = {
    loop: false,
    autoplay: true,
    animationData: hello.default,
    speed: 0.5,
    segments: [0, 100],
    preserveAspectRatio: 'xMidYMid slice'
  };

  return (
    <div className='flex justify-center items-center '>
      <Lottie options={helloJson} height={300} width={300} />
    </div>
  );
};

export default DashBoard;
