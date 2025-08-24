import { useWindowContext } from "../context/WindowContext";
import { windowContentMap } from "./WindowRegistry";
import WindowWrapper from "./WindowWrapper";

export default function Windows() {
  const { openWindows } = useWindowContext();

  return (
    <>
      {openWindows.map((win) => {
        const Component = windowContentMap[win.id];
        return (
          <WindowWrapper key={win.id} id={win.id} title={win.title}>
            {Component ? <Component /> : <div>Unknown Window</div>}
          </WindowWrapper>
        );
      })}
    </>
  );
}