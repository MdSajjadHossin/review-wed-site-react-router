import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelopeOpenText, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
// import location from '../../img/music-school.PNG';

const Footer = () => {
    const facontact = <FontAwesomeIcon icon={faAddressCard}/>
    const faPhoneNo = <FontAwesomeIcon icon={faPhoneAlt}/>
    const faemail = <FontAwesomeIcon icon={faEnvelopeOpenText}/>
    return (
        <>
        <div className="bg-primary  w-auto h-auto py-5">
        <div>
                <h4>{facontact} Contact Us</h4>
                <h3>{faPhoneNo} Phone: ++19389894</h3>
                <h3>{faemail} Email: hurmony-music-school@gmail.com</h3>
        </div>
        {/* <div>
            <img className="w-auto h-25" src={location} alt="" />
        </div> */}
        </div>
        </>
        
    );
};

export default Footer;