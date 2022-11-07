// xử lí sự kiện
// cách gán sự kiện:truyền trực tiếp vào các thuộc tính sự kiện cảu jsx Element
// các thuộc tính sự kiện thì sử dụng cmael class:onclick,onMouse,onDbClick,
// "Truyền trực tiếp các hàm(giá trị hàm không phải gọi hàm)
// const handleClick=()=>{}
// onclick={handleClick}
// để truyền thêm các tham số cho hàm hander thì sử dụng arow function hoặc là bind
// const handleChange=(event,name)=>{

// const { useRef } = require("react");

// const { useState } = require("react");

    
// // }
// // onclick={(e) => handleChange(e,"trong")}

// const Hand=()=>{
//     const handleSub=(e)=>{
//         e.preventDefault();
//         console.log(e);
//     };
//     const handlechange=(e)=>{
//         console.log(e.target.value);
//     };
//     return (
//         <form action="" onSubmit={handleSub} onChange={handlechange}>
//             <input type="text" name="username" />
//             <select name="gender" id="">
//                 <option value="M">Mail</option>
//                 <option value="F">Femail</option>
//             </select>
//             <button >sub</button>
//         </form>
//     )
// }

// //state là mô hình dữ liệu trong React, cho phép Compoment ghi nhớ các giá trị giữa 1 lần render, điều quan trong nhất với state là khi state thay đổi giá trị thì compoment sẽ render lại để khớp với trạng thái hiện tại
// class State extends React.Component{
//     state={
//         value:1,
//     };
//     increment(){
//         this.setState({value:this.state.value+1})
//     }
//     decrement(){
//         this.setState({value:this.state.value-1})
//     }
//     render(){
//         <div>
//             <button onClick={this.decrement}>-</button>
//             {this.state.value}
//             <button onClick={this.increment}>+</button>
//         </div>
//     }
// }
// state là trạng thái thuộc về 1 compoment/próp là giá trị truyền từ compoment cha xuống compoment
// state thay đổi đk prop thì k
// Hooks
// Hooks laf cacs hàm đặc biệt cho phép Function compoment sử dụng được các tính năng giống clss cômnent,
// Tất cả các hôk thì đều bắt đầu bằng use=>useState,useeffect,useRef...
//cos theer tự tạo các cútom hôk dựa trên các hook có sẵn 
// useState
//khai báo một giấ trị trạng thái(cho phép Funtion compoment ghi nhớ 1 giá trị giữa mỗi lần render)
// cú pháp const[state,setState]=useState(initialValue)
// Intilavalue:cos theer laf mootj gias trij hoawcj mootj hamf trar veef gias trij, suwr dụng hàm (lazy intial state) trong trường hợp mà giá trị
// trạng thái bna đàu cần phải tính toán phức tạp
//state có thể là bất kì giá trị nào, có thể alf chuỗi,số,null,underfile,aray,obj,....
// sử dụng state thì truy cập tực tiếp qua biến state
// để cập nhật State thì sử dụng hàm séttate,lưu ý:
// Không gọi séttate trực tiếp trong phần hàm ,mà thưog gọi séttate trong các 
// trình sử lú sự kiện
// cú pháp:
// const[count,setCount]=useState(0);
// handleclick=()=>{
//     setCount(count+1);
// }

// handclic=()=>{
//     setCount(prev=>{//gia tri trc do
//         return newCount;
//     })
// }

const App=()=>{
    const[count,setCount]=React.useState(0);
    const increment =()=>{
        setCount(count+1)
    }
    const decrement =()=>{
        setCount((previousCount)=>previousCount-1)
    }
    const color=()=>{
        if(count==0){
            return "white";
        }else if(count>0)
        {
            return "red";
        }
        else return "green";
    }
    return(
        <div>
            <button onClick={decrement}>-</button>
            <button className={color}>{count}</button>
            <button onClick={increment}>+</button>
        </div>
    )
}
const root=ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App/>);
// useRef tương tự như state, cho phép function compoment ghi nhớ giá trị giữa mỗi lần render, tuy nhiên khác biệt lớn nhấy là không kích hoạt render lại compoment
// khi thay đổi giá trị