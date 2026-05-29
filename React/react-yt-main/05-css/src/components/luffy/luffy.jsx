
import styles from "./luffy.module.css";

const LuffyCard = () => {
  return (
    <div className={styles.card}>
      {/* Left Side */}
      <div className={styles.imageSection}>
        <img
          src="https://4kwallpapers.com/images/walls/thumbs_2t/17522.jpg"
          alt="Luffy"
          className={styles.image}
        />
      </div>

      {/* Right Side */}
      <div className={styles.detailsSection}>
        <h1 className={styles.title}>Monkey D. Luffy</h1>

        <p>
          <span>Anime:</span> One Piece
        </p>

        <p>
          <span>Role:</span> Captain of Straw Hat Pirates
        </p>

        <p>
          <span>Power:</span> Gum-Gum Devil Fruit
        </p>

        <p className={styles.description}>
          Luffy is a fearless pirate who wants to become the King of the
          Pirates and find the legendary One Piece treasure.
        </p>

        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
};

export default LuffyCard;