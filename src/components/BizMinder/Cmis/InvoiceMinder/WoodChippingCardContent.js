import {Row, Col} from "antd";
import {Colors} from "../../../../constants/color.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faList, faAngleDown, faCartArrowDown, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'


export default ({Data}) => {

    const RenderBox = ({item,index}) => {
        let mySpan = 8;
        let applyEndBox = {}
        if(Data.length===(parseInt(index) + 1)){
            applyEndBox={
                borderRightWidth: 0,
            }
        }

        return (
            <Col span={mySpan} style={{...styles.box,...applyEndBox}}>
                <p style={{...styles.p,marginTop:20}}>
                    <label style={styles.amountValue}>{item.amountValue}</label>
                    <span>{item.amountUnits}</span>
                </p>
                <p style={styles.p}>
                    <label style={{...styles.targetValue, marginRight: 10}}>Target</label>
                    <span>{item.targetValue}</span>
                </p>
                <p style={{
                    ...styles.p,...styles.withIco}}>
                    <label style={{...styles.targetValue, marginRight: 10}}>
                        {item.currentProfit}
                    </label>
                    {item.currentStatusIndicator === "up" ?
                        <FontAwesomeIcon icon={faCaretUp} color={item.currentStatusColor} style={styles.icon}/> :
                        <FontAwesomeIcon icon={faCaretDown} color={item.currentStatusColor} style={styles.icon}/>
                    }
                </p>

                <p style={styles.p}>
                    <label>Previous </label>
                    <label style={{...styles.targetValue, marginRight: 10}}>
                        {item.previousAmountValue}
                    </label>
                </p>
                <p style={{...styles.p,...styles.withIco}}>
                    <label style={{...styles.targetValue, marginRight: 10}}>
                        {item.previousProfit}
                    </label>
                    {item.previousStatusIndicator === "up" ?
                        <FontAwesomeIcon icon={faCaretUp} color={item.currentStatusColor} style={styles.icon}/> :
                        <FontAwesomeIcon icon={faCaretDown} color={item.currentStatusColor} style={styles.icon}/>
                    }
                </p>
            </Col>
    );
    };

    return (
        <div style={styles.container}>
            <Row>
                <Col span={24} style={styles.currentMonth}
                >
                    Current Month
                </Col>
            </Row>
            <Row>
                {Data.map((item, index) => {
                    return (
                        <RenderBox key={index} item={item} index={index}/>
                    );
                })}
            </Row>
        </div>
    );
};

const styles = {
    currentMonth:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        display: "flex",
        minHeight: 45
    },
    withIco:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        display: "flex",
        marginTop: -5,
    },
    icon:{
        alignSelf:"center",
        fontSize: 24,
    },
    targetValue: {
        fontSize: 16,
    },
    p: {
        textAlign: "center",
        marginTop:0,
    },
    amountValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
        color: Colors.brand.black
    },
    box: {
        minHeight: 200,
        borderRightWidth: 0.5,
        borderRightStyle: "solid",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRightColor: Colors.brand.lightGray,

    },
    container: {
        backgroundColor: Colors.brand.white,
        marginTop:-3,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginRight: 20
    }
};
