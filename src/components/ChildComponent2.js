function ChildComponent2(handleOption){
  return(
    <div>
      <h2>Child component 2</h2>
      <button onclick={()=>{handleOption("Option2")}}>Option2<button/>
    </div>
  )
}
export default ChildComponent2
