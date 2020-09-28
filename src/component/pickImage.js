import React,{useState  } from 'react';
import ImagePicker from 'react-native-image-picker';

export default()=> {

      const [photo,setPhoto]=useState('')
      const [photoData,setPhotoData]=useState('')
      const pickImage =()=>{ 

            ImagePicker.showImagePicker({title: "Pick an Image"}, res => {
            if (res.didCancel) {
                console.log("User cancelled!");
            } else if (res.error) {
                console.log("Error", res.error);
            } else {
            setPhotoData(res.data);
            setPhoto({uri:res.uri})
            }
            });
  }

  return [pickImage,photoData,photo]

}
  