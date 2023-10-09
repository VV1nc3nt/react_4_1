import { useState } from "react";

export default function ColorConverter() {
  const [form, setForm] = useState({
    colorHEX: '',
    colorRGB: ''
  });

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { value } = event.target;

    const documentBody = document.querySelector('body');

    const regex = new RegExp("^#([A-Fa-f0-9]{6})$");

    if (documentBody) {
      if (value.match(regex)) {
        setForm({
          colorHEX: value,
          colorRGB: `rgb(${parseInt(value.slice(1, 3), 16)}, ${parseInt(value.slice(3, 5), 16)}, ${parseInt(value.slice(5, 7), 16)})`
        });

        documentBody.style.backgroundColor = value;
      }  

      if (value.length === 7 && !value.match(regex)) {
        setForm({
          colorHEX: value,
          colorRGB: 'Ошибка!'
        });

        documentBody.style.backgroundColor = 'red';
      }  
    }
  };

  return (
    <form className="color-converter">
      <input 
        className="color-input"
        type="text" 
        id="color-hex"
        name="color-hex"
        defaultValue={ '#' }
        onChange={handlerChange}
      />
      <p className="color-output">{ form.colorRGB}</p>
    </form>
  )
}
