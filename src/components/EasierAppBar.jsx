import { AppBar, Toolbar, Button, MenuList, MenuListItem } from 'react95';
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
  `;

export default function EasierAppBar() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      bottome: 0, 
    }}>
    <AppBar
    style={{ 
      position: 'fixed', 
      top: 'unset', 
      bottom: 0, 
      left: 0, 
      width: '100%', 
      height: '50px', 
      zIndex: 999, 
      }}>

      <Toolbar style={{ justifyContent: 'space-between' }}>

        <Button 
          onClick={() => setOpen(!open)} 
          active={open}
          style={{ fontWeight: 'bold' }}
          >
          <img 
            src='./src/assets/easier_start_menu.png' 
            alt='Easier Logo' 
            style={{ width: '25px', height: '25px', marginRight: 4 }}
          />
          Start
        </Button>

        {open && (
          <MenuList
            style={{
              position: 'fixed',
              bottom: '50px',
              left: '0px',
              backgroundColor: 'white',
              border: '2px solid black',
              zIndex: 1001,
            }}
          >
            <MenuListItem>Socials</MenuListItem>
            <MenuListItem>Merch</MenuListItem>
            <MenuListItem>Bio</MenuListItem>
          </MenuList>
        )}

        <div style={{ display: 'flex', gap: '0.5rem' }}>

          {/* Future taskbar items go here */}

        </div>
      </Toolbar>
    </AppBar>
    </div>
  );
}
