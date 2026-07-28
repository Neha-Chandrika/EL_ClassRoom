function Employee(props){
    return(
        <div className="card">
            <p><strong>Employee Name : </strong>{props.name}</p>
            <p><strong>Employee ID : </strong>{props.id}</p>
            <p><strong>Department : </strong>{props.dep}</p>
            <p><strong>Designation : </strong>{props.Desig}</p>
            <p><strong>Salary : </strong>{props.sal}</p>

        </div>
    );
}

export default Employee;