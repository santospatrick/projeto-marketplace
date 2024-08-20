import { api } from '@/providers/axios'

interface UploadImagesResponse {
  attachments: { id: string; url: string }[]
}

interface UploadImagesRequest {
  files: FormData
}

export async function uploadImages({
  files,
}: UploadImagesRequest): Promise<UploadImagesResponse> {
  const response = await api.post('attachments', files, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}
