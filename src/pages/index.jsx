import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the Home page
    router.push('/Home');
  }, []);

  return null; // This component doesn't render anything as it redirects immediately
}
