import { Store04Icon } from 'hugeicons-react'

function ProdutosAnunciados() {
  return (
    <div className="flex gap-4 bg-white rounded-xl p-4 items-center">
      <div className="h-[80px] w-[80px] grid place-items-center rounded-xl bg-blue-light">
        <Store04Icon className="text-blue-dark size-10" />
      </div>
      <div>
        <p className="font-dmsans text-3xl font-bold">56</p>
        <h3 className="text-xs text-gray-300">
          Produtos
          <br /> vendidos
        </h3>
      </div>
    </div>
  )
}

export default ProdutosAnunciados
