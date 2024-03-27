import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
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
                  onClick={() => removeItem(item.id)}
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
