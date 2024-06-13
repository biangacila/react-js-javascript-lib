
import {Row,Col} from "antd"
export default ({title , month})=>{
    return(
        <Row>
            <Col span={7} style={styles.title}>
                <label style={{textAlign:"center"}}>{title}</label>
            </Col>
            <Col span={15} style={styles.month}>
                {month}
            </Col>
        </Row>
    )
}
const styles={
    month:{
        fontSize: 16,
        display:"flex",
        flexDirection: 'row',
        justifyContent: "flex-start",
        marginLeft: '20px',
        minHeight: 45,
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        minHeight: 45,
        marginBottom:5,
        alignItems: 'center',
        display:"flex",
        flexDirection: 'row',
        justifyContent: "center"
    }
}