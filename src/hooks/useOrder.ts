import { useState } from 'react'
import type { MenuItemType, OrderItem } from '../types'

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItemType) => {
    const newItem = { ...item, quantity: 1 }
    setOrder([...order, newItem])
  }

  console.log(order)

  return {
    addItem,
  }
}

export default useOrder
