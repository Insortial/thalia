import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Background = (props: Props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
      const canvas = canvasRef.current;
      if(canvas) {
        const ctx = canvas.getContext("2d");
        console.log(window.innerHeight)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        const circles:Circle[] = [];
        const numCircles = 50;
  
        class Heart {
            size: number;
            x: number;
            y: number;
            speed: number;
        
            constructor() {
                this.size = Math.random() * 0.3 + 0.5; // Heart size variation
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speed = Math.random() * 0.2 + 0.5;
            }
        
            move() {
                this.x += this.speed;
                if (this.x - this.size > canvas.width) {
                    this.x = -this.size;
                }
            }
        
            draw() {
                ctx.beginPath();
                ctx.fillStyle = "#F88379";
                
                ctx.moveTo(this.x, this.y);
                for (let t = 0; t < Math.PI * 2; t += 0.1) {
                    let heartX = this.x + this.size * (16 * Math.pow(Math.sin(t), 3));
                    let heartY = this.y - this.size * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
                    ctx.lineTo(heartX, heartY);
                }
        
                ctx.fill();
                ctx.closePath();
            }
        }

        class Circle {
            radius: number;
            x: number;
            y: number;
            speed: number;
            constructor() {
                this.radius = Math.random() * 5 + 2;
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speed = Math.random() * 0.2 + 0.5;
            }
            move() {
                this.x += this.speed;
                if (this.x - this.radius > canvas.width) {
                    this.x = -this.radius;
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.closePath();
            }
        }
  
        for (let i = 0; i < numCircles; i++) {
            circles.push(new Heart());
        }
  
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            circles.forEach(circle => {
                circle.move();
                circle.draw();
            });
            requestAnimationFrame(animate);
        };
        animate();
      }
  }, [window]);

  return (
    <>
        <audio autoPlay loop>
            <source src="src/assets/The Beatles - Here, There and Everywhere.mp3" type="audio/mpeg" />
        </audio>
        <canvas ref={canvasRef} id="backgroundPattern"></canvas>
        <Outlet />
    </>
    
  )
}

export default Background