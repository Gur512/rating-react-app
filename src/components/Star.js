import { FaStar } from 'react-icons/fa';

function Star(props) {
    return (
        <div className='star-section'>
            <FaStar className='star-icon' color={props.selected ? "gold" : "gray"} onClick={props.onClick} />
        </div>
    );
}

export default Star;
