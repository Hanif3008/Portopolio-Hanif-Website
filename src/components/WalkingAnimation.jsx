import { memo } from 'react';

const WalkingAnimation = memo(() => {
  return (
    <>
      <img src="/images/walking1.png" alt="" className="walking" decoding="async" />
      <img src="/images/walking2.png" alt="" className="walking2" decoding="async" />
      <img src="/images/walking3.png" alt="" className="walking3" decoding="async" />
      <img src="/images/walking4.png" alt="" className="walking4" decoding="async" />
      <img src="/images/walking1.png" alt="" className="walking5" decoding="async" />
      <img src="/images/walking2.png" alt="" className="walking6" decoding="async" />
      <img src="/images/walking3.png" alt="" className="walking7" decoding="async" />
      <img src="/images/walking4.png" alt="" className="walking8" decoding="async" />
      <img src="/images/walking1.png" alt="" className="walking9" decoding="async" />
      <img src="/images/walking2.png" alt="" className="walking10" decoding="async" />
    </>
  );
});

export default WalkingAnimation;
