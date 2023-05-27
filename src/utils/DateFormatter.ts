class DateFormatter {
  date: Date;

  constructor(date: string) {
    const formatted = date.split(/[.:/-]/);
    this.date = new Date(`${formatted[2]}-${formatted[1]}-${formatted[0]}`);
  }

  toDdMmYyyy(): string {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    const day = this.date.getDate();

    return `${day}.${month}.${year}`;
  }
}
