// const h1=React.createElement("h1",{
//     id:"message",
//     onClick:function(){
//         console.log("cliked");
//     },
//     children:"hello word",
// });

// const img=React.createElement("img",{
//     src:"https://th.bing.com/th/id/OIP.22sRFqFGX3YYAtah66MjuAHaJQ?w=203&h=254&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     alt:"girl xinh"
// });
// const div =React.createElement("div",{
//     className:"abc",
//     children:[h1,img],
// });
// const a=React.createElement("a",{
//     href:"https://th.bing.com/th/id/OIP.22sRFqFGX3YYAtah66MjuAHaJQ?w=203&h=254&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     children:"ok cau"
// })
// const name="trong"
// const ishandsome=true;
// let now=new Date();
// function createApp(){
//      return(
       
//         <div className="warpper">
//     <h1 className="heading">
//         Hello React {name}
//     </h1>
//     <p>Bây giờ là {now.toLocaleTimeString()}</p>
//     <img src="https://th.bing.com/th/id/OIP.22sRFqFGX3YYAtah66MjuAHaJQ?w=203&h=254&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="girl xinh"/>
//     <form action="">
//         <div className="form-fill">
//             <button>ok</button>
//         </div>
//     </form>
//     {ishandsome&&<div>ok abc</div>}
// </div>
//      )
// }

// const root=ReactDOM.createRoot(document.querySelector("#app"));
// setInterval(()=>{
//         root.render(createApp());
//     },1000
// );
// root.render(a);
//compiler để biên dịch mã sang html thuần
// jsx element thif chỉ có 1 thẻ cha chứa các thẻ khác
// các thuộc timhs sử dụng trên các thẻ tuân thủ cú pháp Javascript: className,htmlFor,onClick,OnMouse,onHover,...
//tất cả thẻ jsx thì phải có thẻ đóng
// để nhungs giá trị JavaScript vào trong JSX thì phải có{}
//bên trong {} có thể chúa các biểu thưucs javaScript nào (không phải)
//vitual Dom
//là đối tượng biểu diễn cấu trúc HTMl (trong bộ nhớ)
//+kết quả phần render trc dó
//+kết quả phần rendẻ mới nhất
//react Fiber 
//component-base
//đaonj mã được xây dựng các phần giao diện có thể tái sử dụng=.jsx=>đây là khối cơ bản nhất của một ứng dụng react
//+class component
//+function component
//props
//cho  phếp truyền dưc liêu cơ bản từ component cha xuống component con, giống các than số hàm cho phếp điều chỉnh hành vi của các compoment
//jsx mà nó hiển thị
// các cú pháp tương tự các thuộc tính Html có thể truyền số lượng prop tùy ý 
//prop có thể truyền bất kì kiểu dữ liệu j(có thể object, số, boleen,fution). trừ chuõi tất cả đều phải đặt trong dấu ngoặc nhọn 
function Time(){
    const now=new Date();
    return <p>
         {now.toLocaleTimeString()}
    </p>;
}
function Hello(name){
    return <h1>hello {name.name}</h1>;
}
function Myinformation(name){
    const me={
        name:"Trong",
        age:22,
        address:"Nam Dinh"
    }
    return <h1>hello {name.me}</h1>;
}


function App(){
    const curent={
        name:"trong",
        age:22,
        address:'namdinh'
    };
    return(
        <div>
            <Hello{...curent}/>
        </div>
    )
}
//prop laf readonly
//có một số props đặc biệt
//default Props=>cung caaps cacs gias trij mawcj ddinhj cho props trong truwongf howpj props đó không được truyền vào
// Hello.propTypes={
//     name:propTypes.string.isRequired,
//     children:propTypes.node,
// }
// Hello.defaultProps={
// name:"Trong"
// }
// function Avatar({src,alt})
// {
//     return(
//         <img src={src} alt={alt}/>
//     )
// }
// Avatar.propTypes={
//     src:PropTypes.string.isRequied,
//     alt:PropTypes.string,
    
// }
// Avatar.defaultProps={
// src:"https://th.bing.com/th/id/OIP.RjfDSi-pRAnF5zlCpASAEwHaE7?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// alt:"ok",
// }
// const rost=ReactDOM.createRoot(document.querySelector("#app"));
// rost.render(<Avatar/>)
//conditional Rendering