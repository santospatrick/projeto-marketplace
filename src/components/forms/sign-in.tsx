import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { AccessIcon, ArrowRight02Icon, Mail02Icon } from 'hugeicons-react'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type SignInFormValues = {
  email: string
  senha: string
}

type Props = {
  onSubmit: SubmitHandler<SignInFormValues>
}

const schema = z.object({
  email: z.string().email(),
  senha: z.string().min(6),
})

function SignInForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      senha: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <Input
          icon={Mail02Icon}
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
          {...register('email')}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">E-mail inválido</p>
        )}
      </div>
      <div>
        <Input
          icon={AccessIcon}
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          {...register('senha')}
        />
        {errors.senha && (
          <p className="mt-2 text-sm text-red-500">Senha inválida</p>
        )}
      </div>
      <Button
        type="submit"
        className="mt-4 w-full px-[1.25rem] h-[56px] rounded-xl justify-between bg-orange-base"
      >
        Acessar <ArrowRight02Icon />
      </Button>
    </form>
  )
}

export default SignInForm
