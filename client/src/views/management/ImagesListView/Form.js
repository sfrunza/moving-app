import React, { useState, useRef } from 'react'

function AddImageFrom({ addImage }) {
  const [value, setValue] = useState({
    image: '',
    photo: null,
    height: null,
    width: null
  });

  const imgInput = useRef()

  const handleSubmit = e => {

    if (!value) return;
    const formData = new FormData();
    formData.append('image', value.image);
    formData.append('photo', value.photo);

    fetch('http://localhost:3001/api/v1/images', {
      method: 'POST',
      body: formData
    })
    .catch(error=>console.log(error));
    addImage(value.image, value.photo);
    setValue({
      image: '',
      photo: null
    });
  };

console.log(value);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        ref={imgInput}
        className="input"
        onChange={e => setValue({image: e.target.files[0].name, photo: e.target.files[0], height: imgInput, width: imgInput})}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default AddImageFrom;
