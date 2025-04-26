import Whiskas1 from "../assets/wiskas1.jpg"

function Cart() {
  // Contoh data produk
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
    }
  ];

  return (
    <>
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Product</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-md shadow-md overflow-hidden"
          >
            <img
              src={product.icons}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700 mt-2">Rp {product.price.toLocaleString()}</p>
              <button className="mt-4 inline-block px-4 py-2 rounded-md border-1 bg-sky-600 hover:bg-slate-100 hover:border-sky-600 transition duration-300 ease-in-out">
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Cart;
