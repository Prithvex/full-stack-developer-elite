import { useEffect, useRef } from "react";
import canvasImages from "./canvasimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({ details }) {
  const {
    startIndex,
    numImages,
    duration,
    size,
    top,
    left,
    zIndex,
  } = details;

  const canvasRef = useRef(null);

  // Store current frame without re-rendering
  const imageSeq = useRef({
    frame: startIndex,
  });

  // Store preloaded images
  const imagesRef = useRef([]);

  // Preload images
  useEffect(() => {
    const loadedImages = [];

    for (let i = startIndex; i < startIndex + numImages; i++) {
      const img = new Image();
      img.src = canvasImages[i];
      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;
  }, [startIndex, numImages]);

  // Draw frame
  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const scale = window.devicePixelRatio || 1;

    const img =
      imagesRef.current[
        imageSeq.current.frame - startIndex
      ];

    if (!img || !img.complete) return;

    // Prevent repeated scaling bug
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    canvas.width = canvas.offsetWidth * scale;
    canvas.height = canvas.offsetHeight * scale;

    ctx.scale(scale, scale);

    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    ctx.drawImage(
      img,
      0,
      0,
      canvas.offsetWidth,
      canvas.offsetHeight
    );
  };

  useGSAP(() => {
    // First render
    imagesRef.current[0]?.addEventListener("load", render);

    // Frame animation
    gsap.to(imageSeq.current, {
      frame: startIndex + numImages - 1,
      duration,
      repeat: -1,
      ease: "none",

      snap: {
        frame: 1,
      },

      onUpdate: render,
    });

    // Fade animation
    gsap.from(canvasRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-scroll
      data-scroll-speed={Math.random().toFixed(1)}
      className="absolute"
      style={{
        width: `${size * 1.8}px`,
        height: `${size * 1.8}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex,
      }}
    />
  );
}

export default Canvas;