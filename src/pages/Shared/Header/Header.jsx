import logo from '../../../assets/logo.png'
import moment from 'moment';
import BrackingNews from './BrackingNews';
const Header = () => {
    return (
        <div className='text-center'>
      <img className=' mx-auto' src= {logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className='text-xl'>{moment().format("dddd, MMMM D YYYY")}</p>
      <BrackingNews></BrackingNews>
        </div>
    );
};

export default Header;