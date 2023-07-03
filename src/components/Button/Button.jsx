import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <a
      href="https://www.linkedin.com/in/marciaht/"
      target="_blank"
      className={styles.buttonCool}
    >
      {props.label}
    </a>
  );
}
