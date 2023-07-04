import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <a
      href="https://www.linkedin.com/in/marciaht/"
      target="_blank"
      rel="noreferrer"
      className={`${styles.buttonCool} ${props.px} ${props.py}`}
    >
      {props.label}
    </a>
  );
}
