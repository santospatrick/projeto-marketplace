import { signUp } from '@/api/sign-up'
import SignUpForm, { SignUpFormValues } from '@/components/forms/sign-up'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { ArrowRight02Icon } from 'hugeicons-react'
import { SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function SignUp() {
  const navigate = useNavigate()
  const { mutateAsync: createSeller } = useMutation({
    mutationFn: signUp,
  })

  const handleSubmit: SubmitHandler<SignUpFormValues> = async (values) => {
    const body = {
      nome: values.nome,
      telefone: values.telefone,
      email: values.email,
      avatarId: values.avatarId,
      senha: values.senha,
      confirmarSenha: values.confirmarSenha,
    }

    try {
      await createSeller(body)

      toast.success(
        'Conta criada com sucesso! Faça login para acessar sua conta.',
      )
      navigate('/sign-in')
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    }
  }

  return (
    <Card className="rounded-[2rem] border-none px-[4.5rem] py-[5rem]">
      <CardHeader>
        <CardTitle className="font-dmsans">Crie sua conta</CardTitle>
        <CardDescription>
          Informe os seus dados pessoais e de acesso
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm onSubmit={handleSubmit} />
      </CardContent>
      <CardFooter className="mt-[130px] flex-col items-start gap-2">
        <p className="text-gray-300">Já tem uma conta?</p>
        <Button
          variant="outline"
          className="w-full px-[1.25rem] h-[56px] rounded-xl justify-between bg-transparent border-orange-base text-orange-base"
          asChild
        >
          <Link to="/sign-in">
            Acessar <ArrowRight02Icon />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SignUp
