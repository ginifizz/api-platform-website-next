import React, { useRef, useEffect, useState } from "react";

interface WebProps {
  className?: string;
  animated?: boolean;
  isVisible?: boolean;
}

const Web: React.ComponentType<WebProps> = ({
  className,
  animated = false,
  isVisible = false,
}) => {
  const group1 = useRef(null);
  const group2 = useRef(null);
  const group3 = useRef(null);

  const [animations, setAnimations] = useState<Animation[]>([]);

  useEffect(() => {
    if (!animated) return;
    const elem1 = group1?.current;
    const elem2 = group2?.current;
    const elem3 = group3?.current;
    const anims = [];
    if (elem1) {
      anims.push(
        elem1.animate([{ strokeDashoffset: 12 }, { strokeDashoffset: 0 }], {
          duration: 1000,
          iterations: Infinity,
        })
      );
    }
    if (elem2) {
      anims.push(
        elem2.animate([{ strokeDashoffset: 0 }, { strokeDashoffset: 12 }], {
          duration: 1000,
          iterations: Infinity,
        })
      );
    }
    if (elem3) {
      anims.push(
        elem3.animate([{ strokeDashoffset: 12 }, { strokeDashoffset: 0 }], {
          duration: 1000,
          iterations: Infinity,
        })
      );
    }
    setAnimations(anims);
  }, [setAnimations, animated]);

  useEffect(() => {
    return () => {
      animations.map((anim) => anim.cancel());
    };
  }, [animations]);

  useEffect(() => {
    if (!animated) return;
    if (!isVisible) {
      animations.map((anim) => "running" === anim.playState && anim.pause());
    } else {
      animations.map((anim) => "paused" === anim.playState && anim.play());
    }
  }, [animated, animations, isVisible]);

  return (
    <svg
      className={className}
      viewBox="0 0 464 464"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g ref={group1} className="fill-none stroke-blue-light">
        <polyline
          className="fill-none stroke-blue-light stroke-dasharray-[1_5]"
          points="232 232 178.11 38.25 167.84 1.3"
        />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2="61.08" y1="232" y2="64.29" />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2=".12" y1="232" y2="172.22" />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2="1.3" y1="232" y2="296.16" />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2="64.29" y1="232" y2="402.92" />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2="172.22" y1="232" y2="463.88" />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2="296.16" y1="232" y2="462.7" />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2="402.92" y1="232" y2="399.71" />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2="463.88" y1="232" y2="291.78" />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2="462.7" y1="232" y2="167.84" />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2="399.71" y1="232" y2="61.08" />
        <line className="fill-none stroke-blue-light stroke-dasharray-[1_5]" x1="232" x2="291.78" y1="232" y2=".12" />
      </g>
      <g ref={group2}>
        <path
          className="fill-none stroke-blue-light stroke-dasharray-[1_5]"
          d="M182.05,425.75s33.88-6,51.92-6,51.92,6,51.92,6l-.28-1s26.35-22.14,42-31.16,48-20.76,48-20.76l-.73-.71s11.75-32.35,20.77-48,31.15-42,31.15-42l-1-.26s-6-33.88-6-51.92,6-51.92,6-51.92l-1,.28s-22.14-26.35-31.16-42-20.76-48-20.76-48l-.71.73s-32.35-11.75-48-20.77-42-31.15-42-31.15l-.26,1s-33.88,6-51.92,6-51.92-6-51.92-6l.28,1s-26.35,22.14-42,31.16-48,20.76-48,20.76l.73.71s-11.75,32.35-20.77,48-31.15,42-31.15,42l1,.26s6,33.88,6,51.92-6,51.92-6,51.92l1-.28s22.14,26.35,31.16,42,20.76,48,20.76,48l.71-.73s32.35,11.75,48,20.77,42,31.15,42,31.15"
        />
        <path
          className="fill-none stroke-blue-light stroke-dasharray-[1_5]"
          d="M108.63,266.31s14.16,16.86,19.94,26.86,13.29,30.7,13.29,30.7l.45-.47s20.7,7.52,30.7,13.29,26.86,19.94,26.86,19.94L200,356s21.68-3.84,33.23-3.84S266.49,356,266.49,356l-.18-.63s16.86-14.16,26.86-19.94,30.7-13.29,30.7-13.29l-.47-.45s7.52-20.7,13.29-30.7,19.94-26.86,19.94-26.86L356,264s-3.84-21.68-3.84-33.23S356,197.51,356,197.51l-.63.18s-14.17-16.86-19.94-26.86-13.29-30.7-13.29-30.7l-.45.47S301,133.08,291,127.31s-26.86-19.94-26.86-19.94L264,108s-21.68,3.84-33.23,3.84S197.51,108,197.51,108l.18.63s-16.86,14.17-26.86,19.94-30.7,13.29-30.7,13.29l.47.45S133.08,163,127.31,173s-19.94,26.86-19.94,26.86l.63.16s3.84,21.68,3.84,33.23S108,266.49,108,266.49"
        />
        <path
          className="fill-none stroke-blue-light stroke-dasharray-[1_5]"
          d="M209.93,152.64s13.88,2.46,21.26,2.46,21.27-2.46,21.27-2.46l.1-.4s10.8,9.06,17.19,12.76,19.65,8.5,19.65,8.5l.29-.29s4.81,13.24,8.51,19.64S311,210,311,210l.4-.11s-2.46,13.88-2.46,21.26,2.46,21.27,2.46,21.27l.4.11S302.7,263.36,299,269.75s-8.5,19.65-8.5,19.65l.29.29s-13.24,4.81-19.64,8.51S254,311,254,311l.11.4s-13.88-2.46-21.26-2.46-21.27,2.46-21.27,2.46l-.11.4S200.64,302.7,194.25,299s-19.65-8.5-19.65-8.5l-.29.29s-4.81-13.24-8.51-19.64S153,254,153,254l-.4.11s2.46-13.88,2.46-21.26-2.46-21.27-2.46-21.27l-.4-.1s9.06-10.8,12.76-17.19,8.5-19.65,8.5-19.65l-.29-.29s13.24-4.81,19.64-8.51S210,153,210,153"
        />
        <path
          className="fill-none stroke-blue-light stroke-dasharray-[1_5]"
          d="M246.13,282.79s-8.89-1.57-13.61-1.57-13.62,1.57-13.62,1.57l-.06.26s-6.91-5.8-11-8.17-12.58-5.44-12.58-5.44l-.18.19s-3.08-8.48-5.45-12.57-8.16-11-8.16-11l-.26.08s1.57-8.89,1.57-13.61-1.57-13.61-1.57-13.61l-.26-.07s5.8-6.91,8.17-11,5.44-12.58,5.44-12.58l-.19-.18s8.48-3.08,12.57-5.45,11-8.16,11-8.16l-.08-.26s8.89,1.57,13.61,1.57,13.61-1.57,13.61-1.57l.07-.26s6.91,5.8,11,8.17,12.58,5.44,12.58,5.44l.18-.19s3.08,8.48,5.45,12.57,8.16,11,8.16,11l.26-.08s-1.57,8.89-1.57,13.61,1.57,13.62,1.57,13.62l.26.06s-5.8,6.91-8.17,11-5.44,12.58-5.44,12.58l.19.18s-8.48,3.08-12.57,5.45-11,8.16-11,8.16Z"
        />
        <path
          className="fill-none stroke-blue-light stroke-dasharray-[1_5]"
          d="M223,199.49a68.64,68.64,0,0,0,8.71,1,68.64,68.64,0,0,0,8.71-1l0-.16a70,70,0,0,0,7,5.23,69.2,69.2,0,0,0,8,3.48l.12-.12a69.32,69.32,0,0,0,3.48,8,69.34,69.34,0,0,0,5.23,7l.17,0a68.64,68.64,0,0,0-1,8.71,68.64,68.64,0,0,0,1,8.71l.16,0a70,70,0,0,0-5.23,7,69.2,69.2,0,0,0-3.48,8l.12.12a69.32,69.32,0,0,0-8,3.48,69.34,69.34,0,0,0-7,5.23l0,.17a68.64,68.64,0,0,0-8.71-1,68.64,68.64,0,0,0-8.71,1l0,.16a70,70,0,0,0-7-5.23,69.2,69.2,0,0,0-8-3.48l-.12.12a69.32,69.32,0,0,0-3.48-8,69.34,69.34,0,0,0-5.23-7l-.17,0a68.64,68.64,0,0,0,1-8.71,68.64,68.64,0,0,0-1-8.71l-.16,0a70,70,0,0,0,5.23-7,69.2,69.2,0,0,0,3.48-8l-.12-.12a69.32,69.32,0,0,0,8-3.48,69.34,69.34,0,0,0,7-5.23"
        />
      </g>
      <g className="dash-right" ref={group3}>
        <path
          className="fill-none stroke-blue-light stroke-dasharray-[1_5] "
          d="M387,272s-4.8-27.1-4.8-41.53,4.8-41.54,4.8-41.54l-.79.22s-17.7-21.08-24.92-33.57-16.61-38.37-16.61-38.37l-.57.58s-25.87-9.4-38.37-16.61-33.57-24.93-33.57-24.93L272,77s-27.1,4.8-41.53,4.8S188.89,77,188.89,77l.22.79S168,95.49,155.54,102.71s-38.37,16.61-38.37,16.61l.58.57s-9.4,25.87-16.61,38.37-24.93,33.57-24.93,33.57L77,192s4.8,27.1,4.8,41.53S77,275.11,77,275.11l.79-.22s17.7,21.08,24.92,33.57,16.61,38.37,16.61,38.37l.57-.58s25.87,9.4,38.37,16.61,33.57,24.93,33.57,24.93L192,387s27.1-4.8,41.53-4.8,41.54,4.8,41.54,4.8l-.22-.79s21.08-17.7,33.57-24.92,38.37-16.61,38.37-16.61l-.58-.57s9.4-25.87,16.61-38.37,24.93-33.57,24.93-33.57"
        />
        <path
          className="fill-none stroke-blue-light stroke-dasharray-[1_5]"
          d="M159.89,305.49s-6-16.56-10.64-24.55-15.95-21.49-15.95-21.49l-.5.14s3.07-17.35,3.07-26.58-3.07-26.59-3.07-26.59l-.5-.13s11.33-13.48,15.95-21.48,10.63-24.56,10.63-24.56l-.37-.36s16.56-6,24.55-10.64,21.49-15.95,21.49-15.95l-.14-.5s17.35,3.07,26.58,3.07,26.59-3.07,26.59-3.07l.13-.5s13.48,11.33,21.48,15.95,24.56,10.63,24.56,10.63l.36-.37s6,16.56,10.64,24.55,15.95,21.49,15.95,21.49l.5-.14s-3.07,17.35-3.07,26.58,3.07,26.59,3.07,26.59l.5.13s-11.33,13.48-15.95,21.48-10.63,24.56-10.63,24.56l.37.36s-16.56,6-24.55,10.64-21.49,15.95-21.49,15.95l.14.5s-17.35-3.07-26.58-3.07-26.59,3.07-26.59,3.07l-.13.5s-13.48-11.33-21.48-15.95-24.56-10.63-24.56-10.63"
        />
        <path
          className="fill-none stroke-blue-light stroke-dasharray-[1_5]"
          d="M215.55,295.81s-8.63-7.25-13.75-10.21-15.72-6.8-15.72-6.8l-.23.24S182,268.44,179,263.32s-10.21-13.75-10.21-13.75l-.32.09s2-11.1,2-17-2-17-2-17l-.32-.08s7.25-8.63,10.21-13.75,6.8-15.72,6.8-15.72l-.24-.23s10.6-3.85,15.72-6.81,13.75-10.21,13.75-10.21l-.09-.32s11.1,2,17,2,17-2,17-2l.08-.32s8.63,7.25,13.75,10.21,15.72,6.8,15.72,6.8l.23-.24s3.85,10.6,6.81,15.72,10.21,13.75,10.21,13.75l.32-.09s-2,11.11-2,17,2,17,2,17l.32.08s-7.25,8.63-10.21,13.75-6.8,15.72-6.8,15.72l.24.23S268.44,282,263.32,285s-13.75,10.21-13.75,10.21l.09.32s-11.11-2-17-2-17,2-17,2"
        />
        <path
          className="fill-none stroke-blue-light stroke-dasharray-[1_5]"
          d="M191.37,243.3a86,86,0,0,0,1.26-10.89,86.21,86.21,0,0,0-1.26-10.89l-.21-.05a85.66,85.66,0,0,0,6.53-8.8,85.32,85.32,0,0,0,4.36-10.06l-.15-.15A86.45,86.45,0,0,0,212,198.11a86.42,86.42,0,0,0,8.8-6.54l-.06-.2a86,86,0,0,0,10.89,1.26,86.21,86.21,0,0,0,10.89-1.26l.05-.21a85.66,85.66,0,0,0,8.8,6.53,85.32,85.32,0,0,0,10.06,4.36l.15-.15A86.45,86.45,0,0,0,265.89,212a86.42,86.42,0,0,0,6.54,8.8l.2-.06a86,86,0,0,0-1.26,10.89,86.21,86.21,0,0,0,1.26,10.89l.21.05a85.66,85.66,0,0,0-6.53,8.8A85.32,85.32,0,0,0,262,261.39l.15.15A86.45,86.45,0,0,0,252,265.89a86.42,86.42,0,0,0-8.8,6.54l.06.2a86,86,0,0,0-10.89-1.26,86.21,86.21,0,0,0-10.89,1.26l-.05.21a85.66,85.66,0,0,0-8.8-6.53A85.32,85.32,0,0,0,202.61,262l-.15.15A86.45,86.45,0,0,0,198.11,252a86.42,86.42,0,0,0-6.54-8.8Z"
        />
        <path
          className="fill-none stroke-blue-light stroke-dasharray-[1_5]"
          d="m223.48 234.37a10.17 10.17 0 0 0 0-4.57 9.88 9.88 0 0 0 2.28-3.95 18.16 18.16 0 0 0 2.11-0.92 17.61 17.61 0 0 0 1.84-1.37 10.17 10.17 0 0 0 4.57 0 9.88 9.88 0 0 0 3.95 2.28 18.16 18.16 0 0 0 0.92 2.11 17.61 17.61 0 0 0 1.37 1.84 10.17 10.17 0 0 0 0 4.57 9.88 9.88 0 0 0-2.28 3.95 18.16 18.16 0 0 0-2.11 0.92 17.61 17.61 0 0 0-1.84 1.37 10.17 10.17 0 0 0-4.57 0 9.88 9.88 0 0 0-3.95-2.28 18.16 18.16 0 0 0-0.92-2.11 17.61 17.61 0 0 0-1.37-1.84"
        />
      </g>
    </svg>
  );
};

export default Web;
