//  jsx - eschever html dendro html
// tsx = escrever typScript dentro do html
import nlwUniteIcon from '../assets/nlw-unite-icom.svg'
import { NavLink } from './nav.lin'

export function Header() {
  return (
        <div className='flex items-center gap-5 py-2'>
          <img src={nlwUniteIcon} />
          
          <nav className='flex items-center gap-5'>
            <NavLink  href="/eventos"  >Eventos</NavLink>
            <NavLink href='/participantes'>Participantes</NavLink>
          </nav>
        </div>
    ) 
  
 
}