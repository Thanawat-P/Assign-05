import Image from "next/image";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image 
        src="/party.jpg" 
        alt="Event Venue Banner" 
        layout="fill" 
        objectFit="cover" 
        className={styles.image}
      />
      
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          where every event finds its venue
        </h1>
        <p className={styles.description}>
          Finding perfect venue, We can provide your dream venue to be real 
        </p>
      </div>
    </div>
  );
};

export default Banner;
