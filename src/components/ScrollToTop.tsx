import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export function ScrollToTop() {
  const {pathname, hash} = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace(/^#/, '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
        return;
      }
    }
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }, [pathname, hash]);

  return null;
}
