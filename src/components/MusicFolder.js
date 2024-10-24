import React from "react";
import './MusicFolder.css';
import MusicIcon from '../images/computer_sound-4.png';

const MusicFolder = () => {

    return(
        <div>
            <ul className="file-list">
              {files.map((file, index) => (
                <li key={index} onDoubleClick={() => onOpenFile(file)}>
                  <img src={MusicIcon} alt="file" className="file-icon" />
                  <span>{file.title}</span>
                </li>
              ))}
            </ul>
        </div>
    );
};

export default MusicFolder;