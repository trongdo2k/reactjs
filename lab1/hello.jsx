const Hello=({name})=>{
    return <div>
        Hello {name==="Trong"?"chao Trong":name+" khong chao dau"}
    </div>
}
Hello.propTypes = {
    name: PropTypes.string,
  };
  Hello.defaultProps={
    name:"Trong",
  }
  const rost=ReactDOM.createRoot(document.querySelector("#app1"));
  rost.render(<Hello/>)
  //? thường sử dụng khi trả về 1 trong 2 giá trị hặc 2 đonaj jsx khác nhau
  //&& trả về 1 đoạn các giá trị trong jsx