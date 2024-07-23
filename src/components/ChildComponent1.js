function ChildComponent1(handleOption){
  return(
    <div>
      <h2>Child component 1</h2>
      <button onclick={()=>{handleOption("Option1")}}>Option1<button/>
    </div>
  )
}
export default ChildComponent1
