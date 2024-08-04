import { useEffect } from 'react';

const SliderScript = () => {
  useEffect(() => {
    // TODO: MIRAR COMO SOLUCIONAR EL BUG DE LOS listeners
    let slider$ = document.getElementById('projects-slider');
    let prevBtn$ = document.getElementById('prev-btn');
    let nextBtn$ = document.getElementById('next-btn');

    const clickHandler = (event: MouseEvent) => {
      if (!slider$) return;

      const { id } = event.target as HTMLButtonElement;

      const isDecrement = id.includes('prev');
      const isIncrement = id.includes('next');

      let sliderScrollWidth = slider$.scrollWidth;
      const currentScroll = slider$.scrollLeft;

      if (isIncrement) {
        const width = slider$.offsetWidth;
        const newScroll = currentScroll + width;

        if (newScroll >= sliderScrollWidth) {
          slider$.scrollLeft = 0;
          return;
        }
        slider$.scrollLeft = currentScroll + width;
        return;
      }

      if (isDecrement) {
        const width = -slider$.offsetWidth;
        const newScroll = currentScroll + width;

        if (newScroll <= width) {
          slider$.scrollLeft = sliderScrollWidth + width;
          return;
        }
        slider$.scrollLeft = currentScroll + width;
        return;
      }
    };
    prevBtn$?.addEventListener('click', clickHandler);
    nextBtn$?.addEventListener('click', clickHandler);

    return () => {
      prevBtn$?.removeEventListener('click', clickHandler);
      nextBtn$?.removeEventListener('click', clickHandler);
    };
  }, []);

  return null;
};

export default SliderScript;
