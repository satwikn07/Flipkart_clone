export const Featurecontent = ({info})=>{
    const a = {
        fontSize:"14px",
        color:"#878787",
        fontWeight:"400",
        padding: "3% 5%"
    }
    const b = {
        fontSize:"14px",
        color:"#212121",
        fontWeight:"400",
        paddingLeft:"10%",
        padding: "3% 5%"

    }
    return (
        <div style={{padding:"24px",border:"1px solid rgb(234, 234, 234)"}}>
            <span style={{fontSize:"18px",fontWeight:"400"}}>{info.type}</span> <br />
            <table>
                {
                    Object.entries(info.data).map(item=><tr><td style={a}>{item[0]}</td><td style={b}>{item[1]}</td></tr>)
                }
            </table>
        </div>
    )
}