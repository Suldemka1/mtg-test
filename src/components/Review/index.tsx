import React from "react";

type MyProps = {
  name: string;
  review: string;
  date: string;
};

class ReviewCard extends React.Component<MyProps> {
  constructor(props: MyProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="review">
        <div className="review__header">
          <h3>{this.props.name}</h3>
          <h5>{this.props.date}</h5>
        </div>
        <div className="review__body">
          <p>{this.props.review}</p>
        </div>
      </div>
    );
  }
}

export default ReviewCard