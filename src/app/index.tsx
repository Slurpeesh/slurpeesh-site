import App from '@/app/App'
import { store } from '@/app/store'
import '@/index.css'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

injectSpeedInsights()

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}

const container = createRoot(root)

container.render(
  <Provider store={store}>
    <App />
  </Provider>
)
