import styles from "../styles/card.module.css";

export default function FavoriteCatComponent(props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.thumbnail}
        src={props.favoriteCat.url}
        alt={props.favoriteCat.id}
      />
      <div className={styles.wrapper}>
        <img
          className={styles.icon}
          src="/images/love.svg"
          alt="love it"
          onClick={props.handleRemoveCat}
        />
      </div>
    </div>
  );
}
