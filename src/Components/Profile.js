const Profile = ({name,email,picture})=>{
return(
    <div className="card">
        <img src={picture}>
            
        </img>

        <h2>
            {name}
        </h2>

        <h3>
            {email}
        </h3>
    </div>
)
}
export default Profile;