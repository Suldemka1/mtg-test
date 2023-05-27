export interface IReview {
  name: string;
  review: string;
  date: string;
}

export interface IState {
  data: {
    ru: IReview[];
    en: IReview[];
  };
}
