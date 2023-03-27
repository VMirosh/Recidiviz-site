const RowTable =(props) => {
    return(
        <tr>
            <td>{props.value.date}</td>
            <td>{props.value.description}</td>
            <td>{props.value.value}</td>
        </tr>
    )
}
export default RowTable;