import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    // 1. Alterado: Usa 'flex' e 'min-h-screen' para que o conteúdo preencha a tela.
    // Removido 'items-center justify-center' para não centralizar verticalmente todo o conteúdo.
    // A Sidebar deve ser posicionada como 'fixed' internamente para não afetar o layout.
    <div className="flex flex-col min-h-screen bg-zinc-900 text-white">
      
      {/* 2. O Sidebar deve ser implementado com 'fixed' ou 'sticky' internamente para um layout de app. 
          Assumindo que sua Sidebar já trata o posicionamento fixo. */}
      <Sidebar />

      {/* 3. Conteúdo principal: 
          - 'flex-1': Ocupa o espaço restante.
          - 'sm:ml-[14rem]' (ou o tamanho da sua Sidebar em telas maiores): Garante que o conteúdo não fique sob o Sidebar. 
            Ajuste '14' para o tamanho real do seu Sidebar fixo (se for mais largo que 14 unidades padrão).
            Mantenho 'sm:ml-14' como estava, assumindo que 14 é o valor correto.
          - 'mt-10' ou 'py-10' para dar um espaçamento vertical inicial.
      */}
      <main className="flex-1 sm:ml-14 px-4 sm:px-8 py-10">
        <div className="max-w-4xl w-full mx-auto">
          {/* Card: Ajuste para melhor visualização em dark mode e margens */}
          <Card className="bg-zinc-800 border border-zinc-700 shadow-xl p-6 transition-all hover:border-orange-400/50">
            <CardHeader className="p-0 pb-4"> {/* Ajuste o padding interno do CardHeader */}
              <CardTitle>
                <h1 className="text-3xl sm:text-4xl text-orange-400 font-extrabold tracking-tight text-center">
                  CSHUB
                </h1>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 text-zinc-100 text-base sm:text-lg leading-relaxed pt-0"> {/* Ajuste pt-0 para remover padding extra no topo */}
              <p>
                Bem-vindo ao <span className="text-orange-400 font-semibold">CSHUB - Caruaru Contábil</span>! Este projeto tem como objetivo hospedar as principais ferramentas que auxiliam nas rotinas do escritório ou oferecem conhecimento necessário da operação, a fim de apoiar os gestores em uma tomada de decisão assertiva.
              </p>

              <p>
                Por favor, sinta-se à vontade para explorar as ferramentas disponíveis no menu lateral esquerdo. Também encorajamos o envio de sugestões de melhorias ou novas ideias que possam agregar valor ao nosso dia a dia.
              </p>

              <p>
                Estamos abertos a ouvir suas opiniões e contribuir para o crescimento contínuo do CSHUB. Agradecemos por fazer parte desta jornada conosco!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}