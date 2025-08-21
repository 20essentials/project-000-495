import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { setup } from "twind";
import { tw } from "twind";

setup({});

const aroStyle = (s) => tw`
  absolute
  rounded-full
  shadow-[inset_0_0_80px_yellow]
  animate-[up_and_down_3s_infinite_ease-in-out_both]
  [animation-delay:calc(${s}*-0.1s)]
  [inset:calc(var(--s)*10px)]
`;

const containerStyle = tw`
  w-[300px] h-[300px]
  relative
  [transform-style:preserve-3d]
  [transform:perspective(500px)_rotateX(60deg)]
  @media (max-width:1111px) { zoom-70 }
`;

function App() {
  return (
    <aside className={containerStyle}>
      {Array.from({ length: 15 }).map((_, i) => (
        <div className={aroStyle(i)} style={{ "--s": i }} key={i}></div>
      ))}
    </aside>
  );
}

const style = document.createElement("style");
style.textContent = `
@keyframes up_and_down {
  0%, 100% { transform: translateZ(-100px) rotate(0deg); clip-path: circle(20px at 50% 50%); }
  50% { transform: translateZ(100px) rotate(90deg); clip-path: circle(200px at 50% 50%); }
}
body { height:100vh;width:100%;display:flex;flex-wrap:wrap;place-content:center;overflow:hidden;background:#000; }
`;
document.head.appendChild(style);

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
