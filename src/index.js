import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Logo } from '@pmndrs/branding'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <a href="https://mattyp.au/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        Matty P.
        <br />
        mattyp.au
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>@personalizatuauto —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>22/08/2023</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <Overlay />
    <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
    <App />
  </>
)
