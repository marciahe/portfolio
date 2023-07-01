export default function Stack() {
  const images = [
    "./logos/javascript.png",
    "./logos/react.png",
    "./logos/redux.png",
    "./logos/html.png",
    "./logos/css3.png",
    "./logos/css-modules.png",
    "./logos/nodejs.png",
    "./logos/express.png",
    "./logos/sql.png",
    "./logos/sequelize.png",
    "./logos/git.png",
    "./logos/github.png",
    "./logos/jira.png",
    "./logos/analytics.png",
    "./logos/postgresql.png",
    "./logos/figma.png",
    "./logos/adobe.png",
  ];
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 space-y-8 md:px-32 lg:px-48">
        <div className="m-auto text-center lg:w-7/12">
          <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">
            My Tech Stack
          </h2>
          <h3>This is how I roll</h3>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6">
          {/* <div class="p-4">
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg"
              class=""
              alt=""
            ></img>
          </div> */}
          {images.map((image, index) => (
            <div key={index} className="p-4">
              <img src={image} className="w-32" alt={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
