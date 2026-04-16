import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import"./buttLogout.css"
export default function ButtLogout(){
    return(
    <Stack className='logout' direction="row" spacing={2}>
      <Button variant="outlined" color="error">
        تسجيل الخروج 
      </Button>
    </Stack>
    )
}