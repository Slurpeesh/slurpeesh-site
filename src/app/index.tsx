import { store } from '@/app/store'
import '@/index.css'
import PageLoadingScreen from '@/pages/PageLoadingScreen/PageLoadingScreen'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import LazyApp from './App.lazy'

injectSpeedInsights()

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}

const container = createRoot(root)

container.render(
  <Provider store={store}>
    <Suspense fallback={<PageLoadingScreen />}>
      <LazyApp />
    </Suspense>
  </Provider>
)
