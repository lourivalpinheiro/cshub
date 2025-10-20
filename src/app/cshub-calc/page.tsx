"use client";

import { useState } from "react";
// Importações de Next.js
import Link from "next/link"; 

// Importações de Componentes shadcn/ui
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Importação de Ícones
import { Equal, ArrowLeft } from "lucide-react"; 

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('Soma');
  const [result, setResult] = useState<number | string | null>(null);

  const onHandleCalculate = () => {
    // Substitui vírgula por ponto
    const num1 = Number(firstNumber.replace(',', '.'));
    const num2 = Number(secondNumber.replace(',', '.'));

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Por favor, insira números válidos.");
      return;
    }

    let calculatedResult: number | string;

    if (operation === 'Soma') {
      calculatedResult = num1 + num2;
    } else if (operation === 'Subtração') {
      calculatedResult = num1 - num2;
    } else if (operation === 'Multiplicação') {
      calculatedResult = num1 * num2;
    } else if (operation === 'Divisão') {
      if (num2 === 0) {
        calculatedResult = "Não é possível dividir por zero.";
      } else {
        calculatedResult = num1 / num2;
      }
    } else {
        calculatedResult = "Operação inválida.";
    }
    
    setResult(calculatedResult);
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  };

  const resultClassName = 
    typeof result === 'string' 
      ? "border-red-500 text-red-400"
      : "border-orange-400 text-orange-400";
  
  // Define o URL de destino
  const backUrl = "/"; // <--- ATUALIZE ESTA URL para o destino correto, se for diferente de "/"
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-4 relative"> {/* Adicionado 'relative' para posicionamento */}
      
      <Card className="w-full max-w-sm bg-zinc-800 border-zinc-700 shadow-xl relative p-6 sm:p-8"> {/* Adicionado 'relative' para o link flutuar */}
        
        {/* BOTÃO DE VOLTAR */}
        <Link 
          href="https://cshub-mauve.vercel.app/home" 
          passHref // Necessário para Next/Link
          className="absolute top-4 left-4" // Posição fixa dentro do Card
        >
            <Button 
                variant="ghost" 
                size="icon" 
                className="text-zinc-400 hover:text-orange-400 hover:bg-zinc-700 cursor-pointer"
            >
                <ArrowLeft className="h-5 w-5" />
            </Button>
        </Link>
        {/* FIM DO BOTÃO DE VOLTAR */}

        <CardHeader className="text-center pb-4 pt-10 sm:pt-4"> {/* Ajustado o padding top para acomodar o botão */}
          <CardTitle className="text-3xl text-orange-400 font-extrabold tracking-tight">
            CSHUB CALC
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          
          {/* Campo 1 */}
          <div className="space-y-2">
            <Label htmlFor="firstNumber" className="text-zinc-300">Primeiro Número:</Label>
            <Input
              id="firstNumber"
              type="text"
              placeholder="Ex: 1500,50"
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
              className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400 focus-visible:ring-orange-500"
            />
          </div>

          {/* Campo 2 */}
          <div className="space-y-2">
            <Label htmlFor="secondNumber" className="text-zinc-300">Segundo Número:</Label>
            <Input
              id="secondNumber"
              type="text"
              placeholder="Ex: 25,25"
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
              className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400 focus-visible:ring-orange-500"
            />
          </div>

          {/* Seleção de Operação */}
          <div className="space-y-2">
            <Label htmlFor="operations" className="text-zinc-300">Operação:</Label>
            <Select 
                value={operation} 
                onValueChange={setOperation}
            >
              <SelectTrigger className="w-full bg-zinc-700 border-zinc-600 text-white focus:ring-orange-500 cursor-pointer">
                <SelectValue placeholder="Selecione a operação" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem className="cursor-pointer" value="Soma">Soma (+)</SelectItem>
                <SelectItem className="cursor-pointer" value="Subtração">Subtração (-)</SelectItem>
                <SelectItem className="cursor-pointer" value="Multiplicação">Multiplicação (x)</SelectItem>
                <SelectItem className="cursor-pointer" value="Divisão">Divisão (÷)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Botão de Calcular */}
          <Button
            onClick={onHandleCalculate}
            className="w-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors mt-6 cursor-pointer"
          >
            <Equal className="mr-2 h-4 w-4" />
            CALCULAR
          </Button>

          {/* Área de Resultado */}
          <div className={`p-4 mt-6 rounded-lg border-2 ${resultClassName} bg-zinc-700/50 text-center font-bold text-lg`}>
            <p>
              Resultado: {' '}
              <span className="text-white">
                {result === null 
                    ? 'Aguardando cálculo...' 
                    : typeof result === 'number' 
                        ? formatNumber(result) 
                        : result}
              </span>
            </p>
          </div>
    
          
        </CardContent>
      </Card>
    </div>
  );
}