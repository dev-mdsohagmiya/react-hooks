import { Store } from "./Store"
// import { UsersContext } from "./usersContext"


export const Home = ()=>{
    const userInfo = {
        id:"1",
        name:"Shohag Islam Sajjad",
        email:"shohagislam@gmail.com",
        password:"shdhsf34"

    }
    console.log(userInfo)

    return(
    //    <UsersContext.Provider value={userInfo}>
    //      <Store/>
    //    </UsersContext.Provider>
    <div>
        <Store/>
    </div>
    )
}