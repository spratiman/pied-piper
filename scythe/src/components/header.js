import React, { PureComponent } from "react";
import { Image, Menu } from "semantic-ui-react";
import { piedPiperLogo } from "../constants/components";

class Header extends PureComponent {
  render() {
    return (
      <div>
        <Menu inverted borderless={true}>
          <Menu.Item header>
            <Image
              size="mini"
              src={piedPiperLogo}
              style={{ marginRight: "1.0em" }}
            />
            PiedPiper
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item link>Logout</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Header;
