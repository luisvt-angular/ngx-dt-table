
export interface DtFilterEvent {
  filters: {
    field: string,
    comparison: string,
    value: string | number | Date | {min: number | Date, max: number | Date} | any
  }[];
}
