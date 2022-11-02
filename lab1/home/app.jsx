const avatar=React.createElement("img",
{
    src:"https://th.bing.com/th/id/OIP.22sRFqFGX3YYAtah66MjuAHaJQ?w=203&h=254&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    alt:"avata"
}
)
const root=ReactDOM.createRoot(document.querySelector("#avata"));
root.render(avatar);
function Infor(){
    const Susan_smith={
        name:"Susan Smith",
        job:"webdeverloper",
        content:"Data is an object so directly we can't use map on that, so use Object.keys or Object.entries to get the array first, then use map on that to create ui items."
    }
    return (
        <div>
            name: {Susan_smith.name} 
            <br/>
            job: {Susan_smith.job}
            <br/>
            comment: {Susan_smith.content}
        </div>
    )
}
function App(){
    return (<div>
        <Infor />
    </div>)
}
const rost=ReactDOM.createRoot(document.querySelector("#infor"));
rost.render(<App/>);


function Buttonpage(){
    return(
        <div>
            <button id="btlastpage" type="submit">last</button>
            <button id="btnextpage" type="submit">next</button>
        </div>
    )
}
const bt=ReactDOM.createRoot(document.querySelector("#bt"));
bt.render(<Buttonpage/>)