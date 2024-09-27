import {ChangeEventHandler, KeyboardEvent, KeyboardEventHandler, MutableRefObject, useEffect, useRef} from "react";

type TextInputProps = {
    value: string | null
    placeholder?: string;
    autofocus?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onEnter?: () => void;
}

const TextInput = ({value, placeholder, autofocus = false, onChange, onEnter} : TextInputProps) => {
    console.log("text input render");

    const inputRef = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> | undefined = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (onEnter !== undefined) {
                onEnter();
            }
        }
    };

    useEffect(() => {
        if (autofocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [value]);

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={value === null ? undefined : value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder={placeholder}/>
        </div>
    )
};

export default TextInput