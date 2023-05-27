import { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";

interface IPaginationProps {
  pages: number
}

interface IPaginationState {
  pages: number
}

class Pagination extends Component<IPaginationProps> {
  constructor(props: IPaginationProps) {
    super(props)

    this.state = {
      pages: Math.ceil(this.props.pages / 10)
    }
  }

  // pageNumbers = Array<number>().fill(1, this.state.pages, this.state.pages)

  render(): ReactNode {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  pages: state.reviews.data.ru.length
})

const connectComponent = connect(mapStateToProps)(Pagination)
export { connectComponent as Pagination }