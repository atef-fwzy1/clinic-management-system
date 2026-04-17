import './HeaderPatint.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {Link} from "react-router"
export default function HeaderPatint({title}) {
  return (
    <div className="header">
      <Link to="/">
      <button className="header-arrow">
         <NavigateBeforeIcon/>
      </button>
      </Link>
      <h1 className="header-title">{title}</h1>
     
    </div>
  );
}
