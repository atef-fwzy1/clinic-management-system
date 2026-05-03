import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Cookies from "universal-cookie";
import"./buttLogout.css"
export default function ButtLogout(){
   const cookies = new Cookies();
    return(
    <Stack className='logout' direction="row" spacing={2}>
      <Button variant="outlined" color="error" onClick={()=>{
        window.localStorage.removeItem("userInfo")
        window.location.pathname = "/login"
         cookies.remove("userToken",{ path: "/" })
      }}>
        تسجيل الخروج 
      </Button>
    </Stack>
    )
}