import { useState } from 'react'
import type { MenuItemType, OrderItem } from '../types'

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItemType) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id)
    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
      setOrder(updatedOrder)
    } else {
      const newItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }

  console.log(order)

  return {
    addItem,
  }
}

export default useOrder
