export const Unix_to_String = (unix: number ) => {
  const date = new Date(unix * 1000);

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const time_string: string = day + ' ' + month + ' ' + year;

  return time_string
}
