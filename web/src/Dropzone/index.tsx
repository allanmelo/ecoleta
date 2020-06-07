import React, { useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone'
import './styles.css';
import { FiUpload } from 'react-icons/fi';

const Dropzone = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileURL = URL.createObjectURL(file);
    setSelectedImage(fileURL);
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />
        { selectedImage
          ? <img src={selectedImage} alt='Point thumb' />
          : (<p>
              <FiUpload />
              Imagem do estabelecimento
            </p>)
        }
        
    </div>
  )
}

export default Dropzone;