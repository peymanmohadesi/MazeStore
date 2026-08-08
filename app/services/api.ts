import axios from 'axios'
const config = useRuntimeConfig()

export const api = axios.create({
  baseURL: config.public.apiBaseUrl,
  timeout: 10000
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('درخواست بیش از حد طول کشید.'))
    }

    if (!error.response) {
      return Promise.reject(new Error('ارتباط با سرور برقرار نشد.'))
    }

    switch (error.response.status) {
      case 400:
        return Promise.reject(new Error('درخواست نامعتبر است.'))

      case 404:
        return Promise.reject(new Error('اطلاعات پیدا نشد.'))

      case 500:
        return Promise.reject(new Error('خطای سرور رخ داده است.'))

      default:
        return Promise.reject(new Error('خطای ناشناخته‌ای رخ داده است.'))
    }
  }
)
