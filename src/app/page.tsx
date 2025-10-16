import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark p-5">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-orange-400 text-center text-3xl font-bold">CSHUB</h1>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Usuário</FieldLabel>
              <Input
                className="h-10 w-full"
                id="username"
                type="text"
                placeholder="Digite o seu usuário"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Senha</FieldLabel>
              <Input
                className="h-10 w-full"
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />
            </Field>
          </FieldGroup>
        </FieldSet>

      <Link href="/home">
         <Button className="w-full bg-orange-400 text-white font-bold hover:bg-orange-300 cursor-pointer">
          Entrar
        </Button>
      </Link>
      </div>
    </div>
  )
}
