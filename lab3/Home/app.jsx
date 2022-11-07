

const Review = ({ review, onPrev, onNext }) => {
    return (
        <div className="review-card">
            <div className="review">
                <div className="author">
                    

                    <div className="author-info">
                        <audio controls>
                            <source src={review.mp3}/>
                        </audio>
                        <h4 className="author-name">{review.name}</h4>
                        <div className="author-job">{review.jobTitle}</div>
                    </div>
                </div>

                <div className="content">
                    <p>{review.content}</p>
                </div>
            </div>

            <div className="controls">
                <button className="btn-prev" onClick={onPrev}>
                    Prev
                </button>
                <button className="btn-next" onClick={onNext}>
                    Next
                </button>
            </div>
        </div>
    );
};

const App = () => {
    const [index, setIndex] = React.useState(0);

    const reviews = [
        {
            id:1,
            name:"Đế Vương",
            mp3:"https://firebasestorage.googleapis.com/v0/b/banx-mp3-player.appspot.com/o/mp3%2Fdinh_dung_de_vuong.mp3?alt=media&token=9584c8f7-8749-45b4-904d-620674e90b0d"
        },
        {
            id:2,
            name:"Like My Father",
            mp3:"https://firebasestorage.googleapis.com/v0/b/banx-mp3-player.appspot.com/o/mp3%2Fjax_like_my_father.mp3?alt=media&token=7506d8b8-6e6e-4614-a5ca-eb7bf5d6103f"
        },
        {
            id:3,
            name:"Dừng lại và quên",
            mp3:"https://mp3-s1-m-zmp3.zmdcdn.me/67c516f66eb687e8dea7/545474941220290153?authen=exp=1667965161~acl=/67c516f66eb687e8dea7/*~hmac=47ddf04a17cd7d2c164ee5c78e462541"
        },
        {
            id:4,
            name:"Dịu dàng đến từng giây phút",
            mp3:"https://mp3-s1-m-zmp3.zmdcdn.me/95703697e3d30a8d53c2/6040662215262203435?authen=exp=1667965584~acl=/95703697e3d30a8d53c2/*~hmac=ec5d857b1ebc3388a959512a763fcb48"
        },
        {
            id:5,
            name:"Quá Khứ chỉ nên là quá khứ",
            mp3:"https://mp3-s1-m-zmp3.zmdcdn.me/1a5440e250a2b9fce0b3/6765809659797292302?authen=exp=1667965670~acl=/1a5440e250a2b9fce0b3/*~hmac=a97b4996cb46755bfa1de064bc527477"
        },
    ];

    const handleNext = () => {
        if (index == reviews.length - 1) setIndex(0);
        else setIndex(index + 1);
       
        
    };

    const handlePrev = () => {
        if (index == 0) setIndex(reviews.length - 1);
        else setIndex(index - 1);
        
    };

    const review = reviews[index];
    

    return (
        <div className="section-reviews">
            

            <Review review={review} onPrev={handlePrev} onNext={handleNext} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);