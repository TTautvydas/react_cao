import styles from "../Card/Card.module.css";

export default function Card() {
  return (
    <div className={styles.cardContainer}>
      <h4 data-testid="headerTest">
        "This is a header text for the Card which should be long enough to take
        a lot of space and fit in one paragraph"
      </h4>
      <p>Someones Name</p>
      <hr></hr>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <button>View on Twitter</button>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <button>View on Facebook</button>
      </a>
    </div>
  );
}
