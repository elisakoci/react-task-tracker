import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <h4>Version 1.0.0</h4>
      <p>Copyright &copy; 2021 Elisa Omeri</p>
      <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer