import styles from "../styles/Footer.module.css";
import { Text, Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCenter}>
        <div>
          <Text size="1rem" weight="semibold">© Designed by Tianyu</Text>
        </div>
        <div style={{ display: "flex"}}>
          <Text size="small" weight="bold">Powered by</Text>
          <Text size="small" weight="bold" color="white">i</Text>
          <Text size="small" weight="bold" css={{ textGradient: "45deg, $pink600 -20%, $blue600 100%" }}>
            <Link href="https://nextjs.org/">Next.js</Link> 
          </Text>
          <Text size="small" weight="bold" color="white">i</Text>
          <Text size="small" weight="bold">&</Text>
          <Text size="small" weight="bold" color="white">i</Text>
          <Text size="small" weight="bold" css={{ textGradient: "45deg, $pink600 -20%, $yellow600 100%" }}>
            <Link href="https://nextui.org/">NextUI</Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
