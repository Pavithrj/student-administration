import './Header.scss';
import { Person } from '@material-ui/icons';

function Header() {
    return (
        <div className='header-section'>
            <div className='header'>Alaska</div>
            <div className='user-profile'>
                <Person />
                <div>UserName</div>
            </div>
        </div>
    )
};

export default Header;