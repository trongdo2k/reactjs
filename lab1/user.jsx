const User=({user})=>{
    return(
        <div>
            {user==null?"khong co user":user}
        </div>
    )
    
}
User.propTypes ={
    user:PropTypes.exact({
        user:PropTypes.string,
        isAdmin:PropTypes.bool,
    })
}
// User.defaultProps={
//     user:"Trong",
//     isAdmin:true,
// }
const rost=ReactDOM.createRoot(document.querySelector("#app2"));
rost.render(<User/>)


