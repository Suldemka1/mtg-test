import './App.css'
import React from 'react'
import { connect } from 'react-redux'
import { RootState } from './store'
import { IReview } from './store/ReviewSlice/interface'
import { ELang } from './store/SettingsSlice'
import Header from './components/Header'
import ReviewCard from './components/Review'

interface IMainProps {
  lang: ELang;
  data: {
    ru: IReview[];
    en: IReview[];
  }
}

interface IMainState {
  page: string;
  lang: ELang;
  data: {
    ru: IReview[];
    en: IReview[];
  }
}

class Main extends React.Component<IMainProps, IMainState> {

  constructor(props: IMainProps) {
    super(props)

    this.state = {
      page: window.location.search,
      lang: this.props.lang,
      data: {
        ru: this.props.data.ru,
        en: this.props.data.en
      }
    }
  }

  componentDidMount(): void {
    console.log(this.props)
    console.log(window)
    console.log(window.location.search)
  }

  render(): React.ReactNode {
    return (
      <>
        <Header />
        <div className='reviews'>
          {
            this.props.data.ru.map((item) => <ReviewCard key={item.name} name={item.name} review={item.review} date={item.date} />)
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  lang: state.settings.lang,
  data: {
    ru: state.reviews.data.ru,
    en: state.reviews.data.en
  }
})

const mapDispatchToProps = {}

export default connect(mapStateToProps)(Main)