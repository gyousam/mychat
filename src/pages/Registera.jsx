import React from 'react'










const Registera = () => {
  const initialValues = {
    email: "",
    pass:"",
    repass:"",
  }
  const [formValues, setFormValues] = useState(initialValues){
  
  }

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     if(validate(formValues)){
       alert("전송");
     }
  }

  // 폼검증 라이브러리 Formik, Yup를 이용하면 편하다. 
  const validate = (values) => {
    let formError = true;
    //이메일 정규식
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;   
    //이메일 없을때
    if(!values.email){
       formError = false;
       setError("이메일 주소를 입력해 주세요.");
       setIsError(true);
    }else if(!regex.test(values.email)){
       formError = false;
       //이메일 주소가 아닐 경우
       setError("이메일 형식이 아닙니다.");
       setIsError(true)
    }else if(!values.pass){
       formError = false;
       setError("비밀번호를 입력해 주세요.");  
       setIsError(true)    
    }else if(values.pass.length<6){
       formError = false;
       setError("비밀번호의 길이는 6자 이상이어야 합니다.");  
       setIsError(true) 
    }else if(values.pass !== values.repass){
       formError = false;
       setError("비밀번호가 일치하지 않습니다.");  
       setIsError(true)     
    }
    return formError;
 }


  return (
    <>
        <div className="loginContainer">
            <div className="logo"
                 style={}>

            </div>
        </div>
    </>
  )
}

export default Registera