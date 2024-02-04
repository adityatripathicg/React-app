function printHello(){
    console.log("Hello!");
}
function handleClick(event){
    console.log("Hello!");
    console.log(event);
}
function printBye(){
    console.log("Bye!");
}
function dblclick() {
    console.log("Double Click Hua");
}
export default function Button(){
    return (
        <div>
            <button onDoubleClick={dblclick} onClick={printHello}>Click Me!</button><br />
            <button onDoubleClick={dblclick} onClick={handleClick}>Click Me!</button>
            <p onMouseOver={printBye}>Hover Above me!</p>
        </div>
    );
}
