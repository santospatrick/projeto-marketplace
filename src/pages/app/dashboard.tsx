import PessoasVisitantes from '@/components/pessoas-visitantes'
import ProdutosAnunciados from '@/components/produtos-anunciados'
import ProdutosVendidos from '@/components/produtos-vendidos'
import VisitantesGraph from '@/components/visitantes-graph'

function Dashboard() {
  return (
    <div>
      <div className="flex flex-col gap-1 mb-6">
        <h2 className="font-dmsans text-2xl font-bold">Últimos 30 dias</h2>
        <p className="text-sm text-gray-300">
          Confira as estatísticas da sua loja no último mês
        </p>
      </div>
      <div className="grid grid-cols-12 grid-rows-3 gap-4">
        <div className="col-span-3 flex flex-col gap-4">
          <ProdutosVendidos />
          <ProdutosAnunciados />
          <PessoasVisitantes />
        </div>
        <div className="col-span-9 bg-white rounded-xl p-4">
          <VisitantesGraph />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
