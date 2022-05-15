import { Text } from "@nextui-org/react";
import styles from "../styles/ProjectCard.module.css";
import Link from "next/link";

type projectCardProps = {
  name: string;
  description: string;
  link: string;
};

export const ProjectCard = ({ name, description, link }: projectCardProps) => {
  const cardContent = (
    <div className={styles.projectDescription}>
      <Text h4>{name}</Text>
      <Text size={16} color="grey" css={{ mt: "$2" }}>
        {description}
      </Text>
    </div>
  );

  return (
    <div className={styles.projectCard}>
      {link.startsWith("http") ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      ) : (
        <Link href={link}>{cardContent}</Link>
      )}
    </div>
  );
};
