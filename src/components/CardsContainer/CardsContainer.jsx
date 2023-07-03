import Card from "../Card/Card";

export default function CardsContainer() {
  return (
    <>
      <h2
        id="projects"
        className="text-3xl text-gray-700 font-bold md:text-3xl text-center p-8"
      >
        {" "}
        My last projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 ">
        <a
          href="https://dogs-frontend-day8s0dbb-marciahe.vercel.app/"
          target="_blank"
        >
          <Card
            img="https://i.imgur.com/4iBqTE8.png"
            imgAlt="Doggies app"
            title="Rick and Morty cards"
            description="Single Page Aplication that calls the dogs API and create a list of
            doggies. You can create your own dog too!"
            chip1="#react"
            chip2="#node"
            chip3="#sequelize"
          />
        </a>

        <a href="https://rick-morty-orpin-beta.vercel.app/" target="_blank">
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

        <a href="https://holocruxe-marciahe.vercel.app/" target="_blank">
          <Card
            img="https://i.imgur.com/afPFI3s.png"
            imgAlt="Holocruxe Landing page"
            title="Holocruxe landing page"
            description="Proof of concept for the new Landing page of the new AI startup Holocruxe. Try the 3d model on your own face!"
            chip1="#javascript"
            chip2="#three.js"
            chip3="#html/css"
          />
        </a>
      </div>
    </>
  );
}
