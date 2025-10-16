import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Sidebar } from "@/components/sidebar";
import { ChevronDown } from "lucide-react"; // Importando um ícone para melhor visualização
import Link from "next/link";

export default function Pops() {
  return (
    // Removido 'flex min-h-screen' do container principal (se o Sidebar é fixo)
    <div className="flex flex-col min-h-screen bg-zinc-900 text-white">
      {/* 1. Sidebar. Assumido que ele tem um posicionamento fixo/sticky */}
      <Sidebar />

      {/* 2. Conteúdo principal: 
          - Removido 'items-center justify-center' para permitir scroll natural.
          - 'sm:ml-14' para dar espaço ao Sidebar fixo.
      */}
      <main className="flex-1 sm:ml-14 px-4 py-10">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-400 mb-10 text-center">
            Procedimentos Operacionais Padrão (POP)
          </h1>

          <Accordion
            type="single"
            collapsible
            className="space-y-4 w-full"
            defaultValue="item-1"
          >
            {/* Item 1 */}
            <AccordionItem
              value="item-1"
              // 3. Estilização do Item: Usando borda para o agrupamento
              className="border border-zinc-700 rounded-lg overflow-hidden shadow-lg"
            >
              {/* 4. Trigger (Botão/Título) */}
              <AccordionTrigger
                // Cor de fundo do botão no estado normal
                className="group flex justify-between items-center w-full bg-zinc-800 text-orange-400 font-semibold px-6 py-4 transition-colors hover:bg-zinc-700/70 text-left cursor-pointer"
              >
                <span className="text-lg hover:underline"><Link href="https://docs.google.com/document/d/14LJMOEW2QWC8CGlrIezSUJLqW_Mk-xLqe14Q8ez7r1I/edit?tab=t.0#heading=h.nhjko71koox2" target="blank">Lançamento de DAE</Link></span>
                {/* Ícone para indicar o estado. Usando Radix, você pode animar este ícone com CSS/Tailwind */}
                <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </AccordionTrigger>

              {/* 5. Conteúdo do Acordeão - CORRIGIDO PARA TEMA ESCURO */}
              <AccordionContent className="bg-zinc-800/50 border-t border-zinc-700 text-zinc-100 px-6 py-5 space-y-4 text-base leading-relaxed">
                <h2 className="text-xl font-bold text-orange-400 text-center pb-2">
                  Emissão de Relação de Pagamentos
                </h2>

                <p>
                  Na tela principal do módulo Contábil, acesse o menu{" "}
                  <strong>CONTROLE - EMPRESAS</strong>; anote o CNPJ da Empresa
                  disponível em uma tela como esta.
                </p>

                <p>
                  Acesse o site{" "}
                  <a
                    href="https://efisco.sefaz.pe.gov.br/sfi_com_sca/PRMontarMenuAcesso"
                    target="_blank"
                    rel="noopener noreferrer"
                    // Estilo para link em dark mode
                    className="text-blue-400 underline hover:text-orange-400 font-medium"
                  >
                    E-FISCO
                  </a>{" "}
                  e selecione a opção de certificado digital no canto superior
                  direito do site.
                </p>

                <p>
                  Selecione o certificado digital da Caruaru Contábil instalado
                  em sua máquina e clique em OK (caso não esteja, peça ajuda ao
                  seu líder para instalar, além de estar para usar o POP de
                  Instalação de Certificado Digital).
                </p>

                <p>
                  Selecione a opção “
                  <strong>CERTIDÃO DE RECOLHIMENTO DE TRIBUTOS</strong>” e
                  depois “<strong>CNPJ</strong>”.
                </p>

                <p>
                  Preencha o campo com o CNPJ da empresa, o período desejado, e
                  clique em “<strong>VISUALIZAR/IMPRIMIR DOCUMENTO</strong>”.
                </p>

                <p>
                  Salve o relatório na pasta da empresa:
                  <br />
                  {/* Estilo para Code Block em dark mode */}
                  <code className="block bg-zinc-700 text-orange-300 break-all p-3 rounded mt-3 text-sm font-mono">
                    G:\.shortcut-targets-by-id\14G_xfb2VmL4jbEwgtEDD51yKLuXqf1o1\CARUARU
                    CONTÁBIL - CSHUB - DEPARTAMENTO CONTÁBIL
                  </code>
                </p>

                <p className="text-orange-400 font-medium text-center pt-2 italic">
                  OBS: O caminho pode mudar conforme o Drive instalado. Em caso
                  de dúvidas, peça ajuda ao seu líder.
                </p>
              </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
      </main>
    </div>
  );
}