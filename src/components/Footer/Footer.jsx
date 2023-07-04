export default function Footer() {
  return (
    <footer className="py-16 px-16 grid grid-cols-2">
      <div>
        <a
          className="text-base block"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/marciaht/"
        >
          Linkedin
        </a>
        <a
          className="text-base block"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/marciahe/"
        >
          Github
        </a>
        <a
          className="text-xs block pt-4"
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com"
        >
          Logos by Icons8
        </a>
      </div>
      <div className="text-right">
        <p className="logoMarcia">
          marcia<span> </span>
        </p>
        <img
          className="h-8 pr-8 float-right"
          src="./unicorn.png"
          alt="Hi! I'm an unicorn!"
        />
      </div>
    </footer>
  );
}
