const ChildComponent =(props)=>{
    console.log(props)
    return(
        <div>
           
         { }
        // props.hundleNameFunc(props.name)  
            <h2>my name is {props.name}|{props.lastName}</h2>
            <h3>my age is {props.age}</h3>
            <h4>my hobbies are:</h4>
            <ul>
                {
                props.hobbies.map(x=> <li>{x}</li>)
                    }
            </ul>
            <h4>I live in {props.adress.city}</h4>
            <h4>code postal {props.adress.cp}</h4>
        </div>
    )
}
export default ChildComponent