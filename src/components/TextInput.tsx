import {ChangeEventHandler} from "react";

type TextInputProps = {
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

const TextInput = ({placeholder, onChange} : TextInputProps) => {
    return (
        <div>
            <input
                type="text"
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder={placeholder}/>
        </div>
    )
}

export default TextInput