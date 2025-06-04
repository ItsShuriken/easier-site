import { Window, WindowHeader, Button } from 'react95';
import { useDesktop } from '../context/DesktopContext';
import BioApp from '../apps/BioApp';
// import MerchApp, SongsApp, etc.

const appMap = {
  Bio: BioApp,
  // Merch: MerchApp,
  // Songs: SongsApp,
};

export default function WindowManager() {
  const { windows, closeWindow } = useDesktop();

  return (
    <>
      {windows.map(({ appName, zIndex }) => {
        const AppComponent = appMap[appName];
        return (
          <div
            key={appName}
            style={{ position: 'absolute', top: 100, left: 100, zIndex }}
          >
            <Window style={{ width: 300 }}>
              <WindowHeader>
                <span>{appName}</span>
                <Button onClick={() => closeWindow(appName)}>X</Button>
              </WindowHeader>
              <AppComponent />
            </Window>
          </div>
        );
      })}
    </>
  );
}
