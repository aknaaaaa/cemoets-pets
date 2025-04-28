import Whiskas1 from "../assets/wiskas1.jpg";

function Cart() {
  const products = [
    { id: 1, name: "Whiskas For Cici", price: 30000, icons: Whiskas1 },
    { id: 2, name: "Whiskas For Konong", price: 35000, icons: Whiskas1 },
    { id: 3, name: "Whiskas For Koy", price: 50000, icons: Whiskas1 },
    { id: 4, name: "Whiskas For Boy", price: 45000, icons: Whiskas1 },
  ];
  const text = "Product";

  return (
    <div className="p-4 md:pl-6 min-h-screen ml-0 md:ml-[sidebar-width] transition-all duration-300">
      {/* Tambahkan margin left untuk memberi jarak dari sidebar */}
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 ml-2">
        {text.toUpperCase()}
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ml-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg md:rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <img
              src={product.icons}
              alt={product.name}
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="p-3 md:p-4 flex flex-col flex-grow">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                {product.name}
              </h2>
              <p className="text-gray-700 mb-2 md:mb-3 text-sm md:text-base">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 px-3 py-1 md:px-4 md:py-2 rounded-md border bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border-red-500 transition duration-300 text-sm md:text-base">
                  Hapus
                </button>
                <button className="flex-1 px-3 py-1 md:px-4 md:py-2 rounded-md border bg-sky-600 text-white hover:bg-white hover:text-sky-600 hover:border-sky-600 transition duration-300 text-sm md:text-base">
                  Beli
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
