export default function CardHolocruxe() {
  return (
    <>
      <div className=" rounded overflow-hidden shadow-lg inline-block">
        <img
          className="w-full"
          src="https://i.imgur.com/afPFI3s.png"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Holocruxe site</div>
          <p className="text-gray-700 text-base">
            Landing page for the new startup Holocruxe. An AI that keeps all
            your memories so you can leave a legacy online. Try the 3d model of
            your own face!
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #javascript
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #three.js
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #html/css
          </span>
        </div>
      </div>
    </>
  );
}
