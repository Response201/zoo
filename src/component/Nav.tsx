import { Outlet, Link  } from 'react-router-dom'
import { Background } from './Background'
const Nav = () => {
    return (
        < >
          <nav>
            <ul>
              <li>
                <Link to="/" className='link' >Hem</Link>
              </li>
             <li>
<Link to="/animals" className='link'  >Alla djur</Link>
             </li>
            </ul>
          </nav>
          <section className='all'>
          <Background />
          <Outlet />
          </section>
        </>
      )
}
export default Nav
