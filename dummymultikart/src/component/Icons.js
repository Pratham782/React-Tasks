import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faMagnifyingGlass,faCartShopping,faUser,faGear } from './Fontawesome';

export default function Icons(){
    return (
        <>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <FontAwesomeIcon icon={faHeart}/>
            <FontAwesomeIcon icon={faCartShopping}/>
            <FontAwesomeIcon icon={faUser}/>
            <FontAwesomeIcon icon={faGear}/>
        </>
    )
} 