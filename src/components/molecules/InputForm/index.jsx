import React from 'react'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'

export default function InputForm(props) {
    const { label, htmlFor, name, id, placeholder, value, onChange, type, disabled, required } = props;

    return (
        <div className="mb-4">
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} type={type} disabled={disabled} required={required} />
        </div>
    )
}
