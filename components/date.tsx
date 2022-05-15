import { parseISO, format } from 'date-fns';

type dateProps = {
  dateString: string
}

export default function Date({ dateString }: dateProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
