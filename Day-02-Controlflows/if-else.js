//Basic decision makings

let userRole = "Editor";


if(userRole === "Admin"){
    console.log("Access Granted : Welcome to Admin Dashboard")
}else if (userRole === "Editor"){
    console.log("Access Graned: You Have Access to Edit Posts..")
}else{
    console.log("Access Denied : Login First!")
}