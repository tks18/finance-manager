import { useNavigate } from '@tanstack/react-location';
import { ReactElement } from 'react';

function About(): ReactElement {
  const navigate = useNavigate();
  return (
    <>
      <h2 onClick={() => navigate({ to: '/' })}>About</h2>
    </>
  );
}

export default About;
