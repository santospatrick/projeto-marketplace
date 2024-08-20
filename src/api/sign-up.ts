import { api } from '@/providers/axios'

interface SignUpResponse {
  seller: {
    id: string
    name: string
    phone: string
    email: string
    avatar: {
      id: string
      url: string
    }
  }
}

interface SignUpRequest {
  nome: string
  telefone: string
  email: string
  avatarId: string
  senha: string
  confirmarSenha: string
}

export async function signUp({
  nome,
  telefone,
  email,
  avatarId,
  senha,
  confirmarSenha,
}: SignUpRequest): Promise<SignUpResponse> {
  const response = await api.post('sellers', {
    name: nome,
    phone: telefone,
    email,
    avatarId,
    password: senha,
    passwordConfirmation: confirmarSenha,
  })

  return response.data
}
