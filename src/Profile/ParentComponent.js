import ChildComponent from "./ChildComponent"

const ParentComponent=()=>{
    //j'ai commenté handelname car n'a pas reconnu le dollar 
    //const handleName=(name)=>alert('my name is',$(name))
    return(
        <div>
            <h1>Work Shop props</h1>
            <ChildComponent
            name="Islem"
            lastName="Sdiri"
            age={31}
            hobbies={["dance","music","travel"]}
            adress={{city:"Ben Arous",cp:"2084"}}
            //handleNameFunc={handleName}
            />
        </div>
    )
}
export default ParentComponent