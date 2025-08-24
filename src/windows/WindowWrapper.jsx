import { Window, WindowHeader, WindowContent, Button } from 'react95';
import { useWindowContext } from '../context/WindowContext';

export default function WindowWrapper({ id, title, children }) {
  const { closeWindow, bringToFront, zIndexMap } = useWindowContext();

  return (
    <div
      onMouseDown={() => bringToFront(id)}
      style={{
        position: 'absolute',
        top: '100px',
        left: '100px',
        zIndex: zIndexMap[id] || 0,
      }}
    >
      <Window resizeable classname="window">
        <WindowHeader>
          <span>{title}</span>
          <Button onClick={() => closeWindow(id)}>X</Button>
        </WindowHeader>
        <WindowContent>{children}</WindowContent>
      </Window>
    </div>
  );
}
