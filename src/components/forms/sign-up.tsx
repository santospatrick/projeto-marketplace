import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { Input } from '../ui/input'
import {
  AccessIcon,
  ArrowRight02Icon,
  CallIcon,
  ImageUploadIcon,
  Mail02Icon,
  UserIcon,
} from 'hugeicons-react'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CardTitle } from '../ui/card'
import { useEffect, useState } from 'react'
import { uploadImages } from '@/api/upload-images'

const schema = z.object({
  files: z
    .custom<FileList>()
    .refine((files) => {
      return Array.from(files ?? []).length !== 0
    }, 'A imagem do produto é obrigatória.')
    .refine((files) => {
      return Array.from(files ?? []).every((file) =>
        file.type.includes('image'),
      )
    }, "Tipo de arquivo inválido. A imagem deve ser do tipo 'image'."),
  nome: z.string().min(6),
  telefone: z.string().min(11),
  avatarId: z.string().min(1),
  email: z.string().email(),
  senha: z.string().min(6),
  confirmarSenha: z.string().min(6),
})

export type SignUpFormValues = z.infer<typeof schema>

type Props = {
  onSubmit: SubmitHandler<SignUpFormValues>
}

function SignUpForm({ onSubmit }: Props) {
  const [uploadedImage, setUploadedImage] = useState('')
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: '',
      telefone: '',
      avatarId: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    },
  })

  const files = useWatch({ name: 'files', control })

  useEffect(() => {
    if (!(files ?? []).length || uploadedImage) return

    async function uploadOnChange() {
      const file = files[0]
      const formData = new FormData()
      formData.append('files', file)

      const uploadedFiles = await uploadImages({ files: formData })
      const [{ id, url }] = uploadedFiles.attachments

      setValue('avatarId', id)
      setUploadedImage(url)
    }

    uploadOnChange()
  }, [files, setValue, uploadedImage])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <CardTitle className="font-dmsans mt-10">Perfil</CardTitle>
      <div className="flex">
        <label>
          <input
            className="hidden"
            type="file"
            {...register('files')}
            max={1}
            accept="image/*"
            disabled={!!uploadedImage}
          />
          <div className="h-[120px] w-[120px] rounded-xl bg-shape grid place-items-center cursor-pointer relative overflow-hidden">
            <ImageUploadIcon className="text-orange-base z-0" size={32} />
            {uploadedImage && (
              <img
                className="absolute inset-0 z-10 h-full w-full object-cover"
                src={uploadedImage}
                alt="Avatar do usuário"
              />
            )}
          </div>
        </label>
      </div>
      <div>
        <Input
          icon={UserIcon}
          label="Nome"
          type="text"
          placeholder="Seu nome completo"
          {...register('nome')}
        />
        {errors.nome && (
          <p className="mt-2 text-sm text-red-500">Nome inválido</p>
        )}
      </div>
      <div>
        <Input
          icon={CallIcon}
          label="Telefone"
          type="tel"
          placeholder="(00) 00000-0000"
          {...register('telefone')}
        />
        {errors.telefone && (
          <p className="mt-2 text-sm text-red-500">Telefone inválido</p>
        )}
      </div>

      <CardTitle className="font-dmsans mt-10">Acesso</CardTitle>

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
          placeholder="Senha de acesso"
          {...register('senha')}
        />
        {errors.senha && (
          <p className="mt-2 text-sm text-red-500">Senha inválida</p>
        )}
      </div>
      <div>
        <Input
          icon={AccessIcon}
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme a senha"
          {...register('confirmarSenha')}
        />
        {errors.senha && (
          <p className="mt-2 text-sm text-red-500">Senha inválida</p>
        )}
      </div>
      <Button
        type="submit"
        className="mt-4 w-full px-[1.25rem] h-[56px] rounded-xl justify-between bg-orange-base"
      >
        Cadastrar <ArrowRight02Icon />
      </Button>
    </form>
  )
}

export default SignUpForm
