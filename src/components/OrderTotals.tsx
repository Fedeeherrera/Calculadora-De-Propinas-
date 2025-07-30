import { useMemo } from 'react'
import type { OrderItem } from '../types'

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  placeOrder: () => void
}

function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [tip, subtotalAmount]
  )

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar:{' '}
          <span className="font-bold"> ${subtotalAmount}</span>
        </p>
        <p>
          Propina: <span className="font-bold"> ${tipAmount}</span>
        </p>
        <p>
          Total a pagar: <span className="font-bold"> ${totalAmount}</span>
        </p>
      </div>
      <button
        onClick={placeOrder}
        disabled={totalAmount === 0}
        className="w-full cursor-pointer bg-black p-3 uppercase text-white text-2xl font-bold mt-10 disabled:opacity-10"
      >
        Guardar Orden
      </button>
    </>
  )
}

export default OrderTotals
