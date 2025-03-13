function SimpleButton({bText ="Default", bType = "btn-null"}){
    return(
        <button className={`btn ${bType}`}>{bText}</button>
        // <button className={`btn btn-xl ${bType}`}>{bText}</button>
    )
}

export default SimpleButton;