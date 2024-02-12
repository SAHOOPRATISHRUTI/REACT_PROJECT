const user={
    username:"Gandhiji",
    img_url:'https://i.imgur.com/yXOvdOSs.jpg',
    img_size:90,
};

function Profile()
{
    return(
        <>
        <h1>{user.username}</h1>
        <img src={user.img_url} alt={"Photo of"+user.username}  style={{
                                                                        width:user.img_size,
                                                                        height:user.img_size}}/>
        </>
    )
}
export default Profile;