import 
export  const Student = (props) => {
    return(
        <div id='student'>
            <p>Student:</p>
            <p>Name: {props.student.name}</p>
            <p>Address {props.student.address}</p>
            <p>College {props.student.college}</p>
            <p>Index: {props.student.index}</p>
        </div>
    )
}