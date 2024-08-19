import SignInForm, { SignInFormValues } from '@/components/forms/sign-in'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight02Icon } from 'hugeicons-react'
import { SubmitHandler } from 'react-hook-form'

function SignIn() {
  const handleSubmit: SubmitHandler<SignInFormValues> = (values) => {
    console.log('🚀 ~ handleSubmit ~ values:', values)
  }

  return (
    <Card className="rounded-[2rem] border-none px-[4.5rem] py-[5rem]">
      <CardHeader>
        <CardTitle className="font-dmsans">Acesse sua conta</CardTitle>
        <CardDescription>
          Informe seu e-mail e senha para entrar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm onSubmit={handleSubmit} />
      </CardContent>
      <CardFooter className="mt-[130px] flex-col items-start gap-2">
        <p className="text-gray-300">Ainda não tem uma conta?</p>
        <Button
          variant="outline"
          className="w-full px-[1.25rem] h-[56px] rounded-xl justify-between bg-transparent border-orange-base text-orange-base"
        >
          Cadastrar <ArrowRight02Icon />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SignIn
