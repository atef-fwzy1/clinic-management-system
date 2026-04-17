import "./LoginPage.css"
import AppLogo  from "../../components/AppLogo/AppLogo"
import LoginHeader   from "../../components/LoginHeader/LoginHeader"
import LoginForm  from "../../components/LoginForm/LoginForm"
import Divider  from "../../components/Divider/Divider"
import SocialLogin  from "../../components/SocialLogin/SocialLogin"
import LoginLink  from "../../components/LoginLink/LoginLink"
// import BottomNav from "../../components/BottonNav/BottomNav"
export default function LoginPage() {
  return (
    <div className="container">
    <div className="login-card">
      <div className="login-card__inner">
        <AppLogo />
          <LoginHeader 
          title="أهلاً بيك من تاني"
          subtitle="سجل دخولك عشان نتابع مواعيدك"
        />
        <LoginForm />
        <Divider label="أو ادخل عن طريق" />
        <SocialLogin />
        <LoginLink /> 
      </div>
     
    </div>
    </div>
  );
}

