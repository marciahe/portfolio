export default function CardDoggies() {
  return (
    <>
      <div className=" rounded overflow-hidden shadow-lg inline-block">
        <img
          className="w-full"
          src="https://i.imgur.com/4iBqTE8.png"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Doggies</div>
          <p className="text-gray-700 text-base">
            Single Page Aplication that calls the dogs API and create a list of
            doggies. You can create your own dog too!
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #node
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #sequelize
          </span>
        </div>
      </div>
    </>
  );
}
