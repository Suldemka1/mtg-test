import React from "react";
import { SwitchLang } from "./SwitchLang";
import { Watch } from "./Watch";

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className="header wrap">
        <div className="header__content">
          <div className="header__content__logo">
            <img src="/vite.svg" />
            <h2>название сайта</h2>
          </div>

          <Watch />
          <SwitchLang />
        </div>
      </header>
    )
  }
}

export default Header