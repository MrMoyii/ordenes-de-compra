import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import type { OrderActions } from "../reducers/order-reducer"

type OrderContentsProps = {
  order: OrderItem[],
  dispatch: Dispatch<OrderActions>
}

export default function OrderContents({order, dispatch} : OrderContentsProps) {
  return (
    <div>
      <h2 className='font-bold text-4xl'>Consumo</h2>

      <div className="space-y-3 mt-5">
        <hr/>
        {
          order.map( item => (
            <div key={item.id}>
              <div className="flex justify-between py-3">
                <p className="text-lg">
                  <span className="font-bold">x{item.quantity}</span> {' - '}
                  {item.name}{' '}
                  (<span className="font-bold">{formatCurrency(item.price)}</span>) {' = '}
                  <span className="font-bold">{formatCurrency(item.price * item.quantity)}</span>
                </p>

                <button
                  className="bg-red-600 h-7 w-7 rounded-full text-center text-white"
                  onClick={() => dispatch({type: "remove-item", payload: {id: item.id}})}
                >
                  X
                </button>
              </div>
              <hr/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
