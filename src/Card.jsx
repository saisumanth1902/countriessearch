function Card({name, flag}) {
    return <>
    <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        border:"1px solid gray",
        borderRadius:"8px",
        padding:"10px",
        width:"200px",
        height:"200px",
        textAlign:"center"
    }} className="countryCard" >
        <img src={flag} alt={name} style={{
            width:"100px",
            height:"100px"
        }}/>
        <h2>{name}</h2>
    </div>
    </>
}

export default Card