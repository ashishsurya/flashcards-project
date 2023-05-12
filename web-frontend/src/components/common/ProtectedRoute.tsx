import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = (props: { children: JSX.Element }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return <>{props.children}</>;
};
