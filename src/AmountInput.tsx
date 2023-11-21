import Input, {InputProps} from "./Input";

export default function AmountInput(props: InputProps) {
    return(
        <div className= "bg-blue-950 border border-white/10 rounded-lg">
            <Input 
            placeholder = "Amount"
            className = "border-0 w-24"
            value ={props.value} 
            onChange={props.onChange} />
            <span className= "text-white/50 px-4">USD</span>
        </div>
    );


}