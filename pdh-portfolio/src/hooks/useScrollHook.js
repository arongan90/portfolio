import { useRef, useCallback,useEffect } from 'react';

const useScrollHook = () => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
        // 이벤트 추가
    }
  }), [];

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
        observer = new IntersectionObserver(handleScroll, {threshold: 0.7});
        observer.observe(current);

        return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
  };
};
