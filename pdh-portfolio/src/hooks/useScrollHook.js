import { useRef, useCallback, useEffect, useState } from 'react';

const useScrollHook = () => {
  const dom = useRef();
  const [visible, setVisible] = useState(false);
  const handleScroll = useCallback(([entry]) => {
    // const { current } = dom;
    if (entry.isIntersecting) {
      setVisible(true);
      // current.style.transitionProperty = 'opacity transform';
      // current.style.transitionDuration = '1s';
      // current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      // current.style.transitionDelay = '0s';
      // current.style.opacity = 1;
      // current.style.transform = 'translate3d(0, 0, 0)';
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.4 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    visible,
    // style: {
    //   opacity: 0,
    //   transform: 'translate3d(0, 50%, 0)',
    // },
  };
};

export default useScrollHook;
