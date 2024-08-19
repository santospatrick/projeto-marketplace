import { api } from '@/providers/axios'

interface SignInResponse {
  accessToken: string
}

interface SignInRequest {
  email: string
  senha: string
}

export async function signIn({
  email,
  senha,
}: SignInRequest): Promise<SignInResponse> {
  const response = await api.post('sellers/sessions', {
    email,
    password: senha,
  })
  return response.data
}
