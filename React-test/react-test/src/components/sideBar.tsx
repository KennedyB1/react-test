import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
 


export const Hellow = () => {

    //https://www.npmjs.com/package/react-pro-sidebar?activeTab=readme

    return (
        <>
        
          <Sidebar className="app">
        <p>Chants</p>
            <Menu>
              <MenuItem> Dashboard </MenuItem>
              <MenuItem> Invoices </MenuItem>
              <SubMenu label="Charts">
                <MenuItem> Timeline Chart </MenuItem>
                <MenuItem> Bubble Chart </MenuItem>
              </SubMenu>
              <SubMenu label="Wallets">
                <MenuItem>Current Wallet</MenuItem>
                <MenuItem>Savings Wallet</MenuItem>
              </SubMenu>
              <MenuItem> Transactions </MenuItem>
              <SubMenu label="Settings">
                <MenuItem> Account </MenuItem>
                <MenuItem> Privacy </MenuItem>
                <MenuItem> Notifications </MenuItem>
              </SubMenu>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
              <MenuItem> Logout </MenuItem>
            </Menu>
          </Sidebar>
          
        </>
      );
    };

