import { parseISO, format } from "date-fns";
import { Text } from "@nextui-org/react";

type dateProps = {
  dateString: string;
};

export default function Date({ dateString }: dateProps) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      <Text color="grey">{format(date, "LLLL d, yyyy")}</Text>
    </time>
  );
}
