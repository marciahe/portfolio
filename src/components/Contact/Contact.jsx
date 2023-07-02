import styles from "./Contact.module.css";

export default function Button() {
  return (
    <div className={styles.buttonContainer}>
      <a
        href="https://www.linkedin.com/in/marciaht/"
        target="_blank"
        className={styles.buttonCool}
      >
        Contact me through Linkedin!
      </a>
    </div>
  );
}
