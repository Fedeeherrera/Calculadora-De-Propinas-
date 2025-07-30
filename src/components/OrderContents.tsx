import type { MenuItemType, OrderItem } from '../types'

type OrderContentsProps = {
  order: OrderItem[]
  removeItem: (id: MenuItemType['id']) => void
}

function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
            key={item.id}
          >
            <div>
              <p>
                {item.name} - ${item.price}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} - ${item.price * item.quantity}
              </p>
            </div>
            <div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-600 h-8 w-8 rounded-full font-black text-white cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderContents
