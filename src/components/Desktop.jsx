import DesktopShortcut from "./DesktopShortcut";

export default function Desktop() {
  return (
		<div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '100vw',
        padding: '8px',
        display: 'flex',
        alignItems: 'flex-start', // Aligns to the left
        justifyContent: 'flex-start',
      }}
    >

			<div style={{ padding: '1rem' }}>
				<DesktopShortcut appName="Bio" icon="./src/assets/burger_icon.png"/>
				<DesktopShortcut appName="Merch" icon="./src/assets/fish_icon.png"/>
				<DesktopShortcut appName="Socials" icon="./src/assets/phone_icon.png"/>
			</div>
		</div>
  );
}
