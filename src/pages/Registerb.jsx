import React from 'react'

const Registerb = () => {
    const [nick, setNick] = useState();
    const[userIcon, setUserIcon] = useState();
    
  return (
    <div>Registerb</div>
  )
}


//파일 확장자 추출함수
const extExt = (filename) => {
  //마지막에 있는 점의 위치
  const lastDot = filename.lastIndexOf(".");
  //substring 함수로 마지막 부분만 추출, 모두 소문자로 변환
  return filebame.substring(lastDhot, filename.length).toLowerCase)

}


const onPress = async (e) => {
  e.preventDefault();
  let photoUrl ='';
  if(filename !== null){
     try{
        //확장자 추출
        const fileExt =extExt(fileName);
        const imgRef = ref(storage, `userdata/${v4()}`)
     }catch(err){
      console.error('Error image upload :', err);
     }
  }
}

export default Registerb