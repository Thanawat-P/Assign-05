import Image from "next/image";
import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";

interface CardProps {
  imgSrc: string;
  venueName: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, venueName }) => {
  return (
    <InteractiveCard>
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imgSrc} alt={venueName} fill className={styles.cardImage} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{venueName}</h2>
      </div>
    </div>
    </InteractiveCard>
  );
};

export default Card;
