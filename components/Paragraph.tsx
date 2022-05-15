import type { ReactNode } from "react";
import { Text } from "@nextui-org/react";

type paragraphProps = {
  children: ReactNode;
  size?: string;
};

export function Paragraph({ children, size }: paragraphProps) {
  return (
    <div
      style={{
        fontSize: size ? size : "1.2rem",
        marginTop: "1.5rem",
        lineHeight: "1.5",
      }}
    >
      {children}
    </div>
  );
}

type colorHeaderProps = { children: string };

export function ColorH3({ children }: colorHeaderProps) {
  return (
    <Text
      h3
      weight="bold"
      css={{ textGradient: "45deg, $pink600 -20%, $blue600 50%", mt: "2rem", letterSpacing: "$1" }}
      // css={{ textGradient: "45deg, $pink600 -20%, $blue600 50%", mt: "2rem" }}
    >
      {children}
    </Text>
  );
}
