import React from 'react'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'

export default function InputForm(props) {
    const { label, htmlFor, name, id, placeholder, value, onChange, type, size} = props;

return (
    <div className="mb-4">
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} type={type}/>
    </div>
  )
}
