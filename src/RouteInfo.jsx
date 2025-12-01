
export const CommonLink = [
    {
        linkname :"Home",
        linkurl :"/mainpage"
    },
    {
        linkname : "Contact",
        linkurl :"/"
    }

] 
export const GuestLink = [
    ...CommonLink,
    {
        linkname :"About",
        linkurl :"/about"
    },
    {
        linkname :"Login",
        linkurl :"/login"
    },    
]
export const LoggedLink = [
    ...CommonLink,
    {
        linkname :"About",
        linkurl :"/about"
    },
    {
        linkname :"Products",
        linkurl : "/product"
    },
    {
        linkname : "Logout",
        linkurl :"/"
    }
]
export const AdminLink = [
    ...CommonLink,
    {
        linkname : "ManageProducts",
        linkurl:""
    },
    {
        linkname : "ManageUsers",
        linkurl:""
    },
    {
        linkname :"Products",
        linkurl : "/product"
    }
]
