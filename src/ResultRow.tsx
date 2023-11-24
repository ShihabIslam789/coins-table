export default function ResultRow() {
    return(
        <div className= "border min-h-12 border-white/10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-2 ">
            <div className= "flex">
                <div>logo</div>
                <div className= "grow"> provider name</div>
                <div className = "flex gap-2">
                    <span>0.001</span>
                    <span>BTC</span> 
                    </div>
            </div>
        </div>
    );
}