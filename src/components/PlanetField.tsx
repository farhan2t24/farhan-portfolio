import { useEffect, useRef } from 'react';

interface Planet {
  angle: number;
  radius: number;
  size: number;
  speed: number;
  color: string;
}

export const PlanetField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Sun
    const sunRadius = 40;

    // Planets
    const planets: Planet[] = [
      { angle: 0, radius: 120, size: 8, speed: 0.5, color: 'rgba(138, 43, 226, 0.8)' },
      { angle: Math.PI / 2, radius: 180, size: 12, speed: 0.35, color: 'rgba(64, 224, 208, 0.8)' },
      { angle: Math.PI, radius: 250, size: 10, speed: 0.25, color: 'rgba(255, 20, 147, 0.8)' },
      { angle: Math.PI * 1.5, radius: 320, size: 14, speed: 0.18, color: 'rgba(138, 43, 226, 0.6)' },
      { angle: Math.PI / 4, radius: 400, size: 9, speed: 0.12, color: 'rgba(64, 224, 208, 0.6)' },
    ];

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw orbital paths
      planets.forEach((planet) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw sun
      const sunGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, sunRadius);
      sunGradient.addColorStop(0, 'rgba(255, 220, 100, 1)');
      sunGradient.addColorStop(0.5, 'rgba(255, 180, 50, 0.8)');
      sunGradient.addColorStop(1, 'rgba(255, 120, 20, 0.4)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, sunRadius, 0, Math.PI * 2);
      ctx.fillStyle = sunGradient;
      ctx.fill();

      // Sun glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, sunRadius + 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 200, 100, 0.1)';
      ctx.fill();

      // Draw and animate planets
      planets.forEach((planet) => {
        planet.angle += planet.speed * 0.01;

        const x = centerX + Math.cos(planet.angle) * planet.radius;
        const y = centerY + Math.sin(planet.angle) * planet.radius;

        // Planet glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, planet.size * 2);
        glowGradient.addColorStop(0, planet.color);
        glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.arc(x, y, planet.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Planet body
        ctx.beginPath();
        ctx.arc(x, y, planet.size, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ background: 'transparent' }}
    />
  );
};
