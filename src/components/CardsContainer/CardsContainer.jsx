import Card from "../Card/Card";

export default function CardsContainer() {
  return (
    <>
      <h2
        id="projects"
        className="text-3xl text-gray-700 font-bold md:text-3xl text-center"
      >
        {" "}
        My last projects
      </h2>
      <p className="text-center mb-12">Test them by yourself!</p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 ">
        <a
          href="https://dogs-frontend-day8s0dbb-marciahe.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            img="https://i.imgur.com/4iBqTE8.png"
            imgAlt="Doggies app"
            title="The Doggies app"
            description="Single Page Aplication that calls the dogs API and create a list of
            doggies. You can create your own dog too!"
            chip1="#react"
            chip2="#node"
            chip3="#sequelize"
          />
        </a>

        <a
          href="https://rick-morty-orpin-beta.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            img="https://i.imgur.com/1FhCs1D.png"
            imgAlt="Rick and morty cards"
            title="Rick and Morty cards"
            description="SPA that shows the characteres of Rick & Morty calling their API.
            You can collect them with the fav button."
            chip1="#react"
            chip2="#node"
            chip3="#redux"
          />
        </a>

        <a
          href="https://kubik.mx/sobre-kubik"
          target="_blank "
          rel="noreferrer"
        >
          <Card
            img="https://i.imgur.com/K8kFvED.png"
            imgAlt="Kubik webpage"
            title="Kubik website"
            description="Kubik is a digital agency where I collaborated in the creation of their website, blending innovation and creativity to craft an impactful online presence."
            chip1="#javascript"
            chip2="#html"
            chip3="#css"
          />
        </a>

        {/* <a
          href="https://holocruxe-marciahe.vercel.app/"
          target="_blank "
          rel="noreferrer"
        >
          <Card
            img="https://i.imgur.com/afPFI3s.png"
            imgAlt="Holocruxe Landing page"
            title="Holocruxe landing page"
            description="Proof of concept for the new Landing page of the new AI startup Holocruxe. Try the 3d model on your own face!"
            chip1="#javascript"
            chip2="#three.js"
            chip3="#html/css"
          />
        </a> */}
      </div>
    </>
  );
}
