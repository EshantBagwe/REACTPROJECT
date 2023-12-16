import { Dispatch, SetStateAction } from "react";
import "./FormComponent.css";

interface IFormComponentProps {
    formText: string;
    onTextChange: Dispatch<SetStateAction<string>>;
}

export function FormComponent(props: IFormComponentProps):JSX.Element{

    const {formText, onTextChange} = props;
    return(
        <form>
            <label>Enter Here : </label>
            <input type="text" placeholder="type something ..." className="inputClass" value={formText} onChange={(e) => onTextChange(e.target.value)}></input>
        </form>
    );
}