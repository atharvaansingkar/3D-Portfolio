import React, { useCallback, useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const ContactParticles = () => {
  const [particlesOptions, setParticlesOptions] = useState({});

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const fetchParticlesConfig = async () => {
      const response = await fetch('/particles.json');
      const data = await response.json();
      setParticlesOptions(data.particlesOptions);
    };

    fetchParticlesConfig();
  }, []);

  return (
    <Particles
      id="contact-particles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default ContactParticles;
