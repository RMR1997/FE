import React from 'react'

export default function Input(props) {
    const {type, placeholder, name, onChange, value} = props;

  return (
    <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="text-sm border rounded-md w-full py-2 px-3 text-slate-700 placeholder:text-slate-400 bg-gray-200"
    />
  )
}
