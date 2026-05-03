import React, { useState, useContext } from "react";
import PageHeader from "../../components/RegisterHead/PageHeader";
import RoleSelector from "../../components/RoleSelector/RoleSelector";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import SocialLogin from "../../components/SocialRegister/SocialLogin";
import LoginLink from "../../components/LoginLink/LoginLink";
import { AlertContext } from "../../Context/AlertContext";
import "./Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import axios from "axios";
import BaseUrl from "../../assets/baseUrl";

// ✅ schema
const schema = yup.object({
  name: yup.string().required("الاسم مطلوب"),

  phone: yup
    .string()
    .required("رقم الموبايل مطلوب")
    .matches(/^01[0-9]{9}$/, "رقم غير صحيح"),

  email: yup
    .string()
    .email("الإيميل غير صحيح")
    .required("الإيميل مطلوب"),

  password: yup
    .string()
    .min(6, "6 حروف على الأقل")
    .required("كلمة السر مطلوبة")
    .matches(/[A-Z]/, "لازم يحتوي حرف كبير")
    .matches(/[a-z]/, "لازم يحتوي حرف صغير")
    .matches(/[0-9]/, "لازم يحتوي رقم")
    .matches(/[^a-zA-Z0-9]/, "لازم يحتوي رمز خاص"),

  conPassword: yup
    .string()
    .oneOf([yup.ref("password")], "كلمة السر غير متطابقة")
    .required("أكد كلمة السر"),

  userName: yup
    .string()
    .min(5, "لازم يكون أكتر من 5 حروف")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, "لازم يحتوي حروف وأرقام"),

  clinicName: yup
    .number()
    .typeError("لازم يكون رقم")
  
    .min(1, "لازم يكون أكبر من أو يساوي 1"),
});

export default function Register() {
  const navigate = useNavigate();
  const handelAlert = useContext(AlertContext);

  const [role, setRole] = useState("doctor");
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Error Handler
  function getErrorMessage(err) {
    if (err.response) {
      const data = err.response.data;

      if (data.message) return data.message;

      if (data.errors && typeof data.errors === "object") {
        return Object.values(data.errors).flat().join(", ");
      }

      return "حصل خطأ من السيرفر";
    }

    if (err.request) return "مفيش اتصال بالسيرفر";

    return err.message || "خطأ غير معروف";
  }

  // ✅ form validation errors
  const onError = (errors) => {
    const firstError = Object.values(errors)[0];
    handelAlert("error", firstError.message);
  };

  // ✅ submit
  const onSubmit = async (data) => {
    setLoading(true);

    const isEmployee = role === "nurse" || role === "reception";

    const url = isEmployee
      ? "/api/Employee/AddNewEmployee"
      : "/api/Doctor/AddNewDoctor";

    const formdata = new FormData();
    const formdataDoc = new FormData();

    // employee
    formdata.append("FullName", data.name);
    formdata.append("UserName", data.userName);
    formdata.append("Email", data.email);
    formdata.append("PhoneNumber", data.phone);
    formdata.append("Password", data.password);
    formdata.append("Role", role === "nurse" ? "Nurse" : "Reception");

    // doctor
    formdataDoc.append("FullName", data.name);
    formdataDoc.append("Email", data.email);
    formdataDoc.append("Password", data.password);
    formdataDoc.append("PhoneNumber", data.phone);
    formdataDoc.append("ClinicId", data.clinicName);

    const inputData = isEmployee ? formdata : formdataDoc;

    try {
      await axios.post(`${url}`, inputData);
      handelAlert("success", "تم انشاء الحساب بنجاح");
      navigate("/login");
    } catch (err) {
      console.log(err.message)
      handelAlert("error", getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="box">
        <PageHeader />

        <RoleSelector selected={role} onChange={setRole} />

        <InputField
          label="الاسم بالكامل"
          placeholder="اكتب اسمك هنا"
          iconType="user"
          onChange={(val) => setValue("name", val)}
          hasErr={errors.name ? "has-error" : ""}
        />

        {role !== "doctor" ? (
          <InputField
            label="اسم المستخدم"
            placeholder="اكتب اسم المستخدم"
            iconType="user"
            onChange={(val) => setValue("userName", val)}
            hasErr={errors.userName ? "has-error" : ""}
          />
        ) : (
          <InputField
            label="رقم العيادة"
            placeholder="رقم العيادة"
            iconType="user"
            onChange={(val) => setValue("clinicName", val)}
            hasErr={errors.clinicName ? "has-error" : ""}
          />
        )}

        <InputField
          label="رقم الموبايل"
          placeholder="01XXXXXXXXX"
          iconType="phone"
          type="tel"
          onChange={(val) => setValue("phone", val)}
          hasErr={errors.phone ? "has-error" : ""}
        />

        <InputField
          label="البريد الإلكتروني"
          placeholder="example@mail.com"
          iconType="mail"
          type="email"
          onChange={(val) => setValue("email", val)}
          hasErr={errors.email ? "has-error" : ""}
        />

        <InputField
          label="كلمة السر"
          placeholder="••••••••"
          iconType="password"
          type="password"
          onChange={(val) => setValue("password", val)}
          hasErr={errors.password ? "has-error" : ""}
        />

        <InputField
          label="تأكيد كلمة السر"
          placeholder="••••••••"
          iconType="password"
          type="password"
          onChange={(val) => setValue("conPassword", val)}
          hasErr={errors.conPassword ? "has-error" : ""}
        />

        <div className="row-register">
          <SubmitButton
            label="إنشاء حساب"
            onClick={handleSubmit(onSubmit, onError)}
            loading={loading}
          />
          <SocialLogin />
        </div>

        <LoginLink from={"register"} />
      </div>
    </div>
  );
}