import './Footer.scss';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='copyright'>
                &copy; {currentYear} Your Website Name. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;