import { ChangeEvent, Component, ReactNode } from "react";
import { ELang } from "../../../store/SettingsSlice/interface";
import { RootState } from "../../../store";
import { connect } from "react-redux";
import { changeLang } from "../../../store/SettingsSlice";

interface ISwitchLangComponent {
  lang: ELang;
  changeLang: any
}

class SwitchLang extends Component<ISwitchLangComponent> {
  constructor(props: ISwitchLangComponent) {
    super(props)

    this.OnLangSwitch.bind(this)
  }

  options = Object.keys(ELang) as Array<keyof typeof ELang>
  OnLangSwitch = (e: ChangeEvent<HTMLSelectElement>) => {
    this.props.changeLang(e.target.value as ELang)
  }

  render(): ReactNode {
    return <>
      <select onChange={this.OnLangSwitch}>
        {
          this.options.map((item, index) => <option key={index} value={item}>{item}</option>)
        }
      </select>
    </>
  }
}

const mapStateToProps = (state: Pick<RootState, "settings">) => ({
  lang: state.settings.lang
})

const mapDispatchToProps = { changeLang }

const connectComponent = connect(mapStateToProps, mapDispatchToProps)(SwitchLang)
export { connectComponent as SwitchLang }