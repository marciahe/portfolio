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
    "./logos/postgresql.png",
    "./logos/sequelize.png",
    "./logos/git.png",
    "./logos/tailwind.png",
    "./logos/github.png",
    "./logos/jira.png",
    "./logos/analytics.png",
    "./logos/figma.png",
    "./logos/adobe.png",
  ];
  return (
    <div className="py-24s bg-white">
      <div className="container m-auto px-6 space-y-8 lg:px-48">
        <div className="m-auto text-center lg:w-7/12">
          <h2 className="text-3xl text-gray-700 font-bold md:text-3xl">
            My Tech Stack
          </h2>
          <h3>This is how I roll</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          {images.map((image, index) => (
            <div key={index} className="p-4 mx-auto">
              <img src={image} className="w-32" alt={image} />
              <p className="text-center capitalize">
                {image.replace("./logos/", "").split(".")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
