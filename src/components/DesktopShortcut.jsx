import { useWindowContext } from "../context/WindowContext";

export default function DesktopShortcut({ id, appName, icon }) {
	const { openWindow } = useWindowContext();
	return (
		<div
			onDoubleClick={() => openWindow(appName)}
			style={{ 
				cursor: 'pointer', 
				userSelect: 'none', 
				textAlign: 'center', 
				margin: '8px', 
			}}
		>
			<img src={icon} alt={appName} style={{ width: '48px', height: '48px' }} />
			<div style={{ fontSize: '12px', marginTop: '4px', color: 'white'}}>
				{appName}
			</div>
		</div>
	);
}