import React, {useState} from 'react'

const ImageForm = () => {

    const [img, setImg] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log(img)
    }

  return (
    <form className='img-form' onSubmit={handleSubmit}>
        <label for="files" class="btn btn-primary">Adjunta tu comprovante</label>
        <p>{img.name}</p>
        <input 
            type='file'
            onChange={e => setImg(e.target.files[0])}
            id="files"
            className='input-file'
        />
        <button className='btn btn-primary'>Enviar</button>
    </form>
  )
}

export default ImageForm