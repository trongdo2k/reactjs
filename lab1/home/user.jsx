const User=({user})=>{
    return(
        <div className="user col-3">
            <img src={user.avatar} alt={user.name}/>
            <h3>{user.fullname}</h3>
            <button>VIEW PROFILE</button>
        </div>
    )
}

const UserType=PropTypes.exact({
    id:PropTypes.string,
    fullname: PropTypes.string,
    avatar: PropTypes.string,
    job: PropTypes.string
})
User.propTypes={
    user:UserType,
}