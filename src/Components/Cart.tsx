import Whiskas1 from "../assets/wiskas1.jpg";

function Cart() {
  const products = [
    {
      id: 1,
      name: "Whiskas For Cici",
      price: 30000,
      icons: Whiskas1,
    },
    {
      id: 2,
      name: "Whiskas For Konong",
      price: 35000,
      icons: Whiskas1,
    },
    {
      id: 3,
      name: "Whiskas For Koy",
      price: 50000,
      icons: Whiskas1,
    },
  ];

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Product</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.icons}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-700 mt-2">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
              <button className="gap-2 mt-4 px-4 py-2 rounded-md border bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border-red-500 transition duration-300">
                Hapus
              </button>
              <button className=" gap-2 mt-4 px-4 py-2 rounded-md border bg-sky-600 text-white hover:bg-white hover:text-sky-600 hover:border-sky-600 transition duration-300 ">
                Beli Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
