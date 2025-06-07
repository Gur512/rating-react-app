import ImageRating from "./ImageRating";

function Dialog(props) {
    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
                <ImageRating images={props.images} />
                <button onClick={props.onClose} className="dialog-btn">Close</button>
            </div>
        </div>
    );
}

export default Dialog;
