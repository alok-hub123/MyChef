import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Line = () => {
  const svgPathRef = useRef(null);

  useEffect(() => {
    const svgPathElement = svgPathRef.current;
    const initialPath = "M 10 100 Q 500 100 1900 100";
    const finalPath = "M 10 100 Q 500 100 1900 100";

    const handleMouseMove = (event) => {
      const path = `M 10 100 Q ${event.clientX - 100} ${event.clientY - 200} 1900 100`;
      gsap.to(svgPathElement, {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(svgPathElement, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
      });
    };

    svgPathElement.addEventListener("mousemove", handleMouseMove);
    svgPathElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svgPathElement.removeEventListener("mousemove", handleMouseMove);
      svgPathElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div style={{backgroundImage:`url("/Images/lineBg.png")`}}>
      <svg width="100%" height="200" >
        <path
          ref={svgPathRef}
          d="M 10 100 Q 500 100 1900 100"
          stroke="white"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default Line;
