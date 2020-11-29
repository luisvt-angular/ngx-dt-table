import { get } from 'dot-prop';

export function compare(props: (string | ((el) => any))[], directions: number[]): (a, b) => number {
  return (a, b) => {
    let ret = 0;

    props.some((el, i) => {
      let x;
      let y;

      if (typeof el === 'function') {
        x = el(a);
        y = el(b);
      } else if (typeof el === 'string') {
        x = get(a, el);
        y = get(b, el);
      }

      if (x === y) {
        ret = 0;
        return false;
      }

      if (typeof x === 'string' && typeof y === 'string') {
        ret = x.localeCompare(y) * directions[i];
        return ret !== 0;
      }

      ret = (x < y ? -1 : 1) * directions[i];
      return true;
    });

    return ret;
  };
}
