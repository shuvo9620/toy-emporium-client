
const ToysCard = ({ toy }) => {

    const { pictureUrl } = toy;

    console.log(pictureUrl);
    return (
        <div className="card w-96 bg-slate-300 shadow-xl">
            <figure className="px-10 pt-10">
                <img style={{ 'height': '50vh', 'width': '50vh' }} className="rounded-box" src={pictureUrl} alt="toy " />
            </figure>
        </div>
    );
};

export default ToysCard;