const Userlist=({users})=>{
    const list=users.map((user )=><User  user={user} />)
    return <div className="userlist col-12">
        {list } 
    </div>
}
Userlist.protoType={
    users: PropTypes.arrayOf(UserType),
}

