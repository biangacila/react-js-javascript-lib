import React, { useRef } from 'react';
import {Colors} from "../../../constants/color.js";

export default ({Data})=> {
    const parentRef = useRef(null);
    const BoxInfo = ({ k, v, styleKey, styleValue, width }) => {
        const extraStyle = {};
        if (width) {
            extraStyle.width = width;
        }
        return (
            <div  ref={parentRef} style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white',

                ...extraStyle }}>
                <div style={{...styleKey}}>{k}</div>
                <div style={{...styleValue}}>{v}</div>
            </div>
        );
    };
    return(
        <div style={{...styles.directionRow}}>
            {Data.map((item,index)=>{
                return(
                    <BoxInfo
                        key={index}
                        k={item.k}
                        v={item.v}
                        styleKey={{...styles.itemKey,...item.styleKey}}
                        styleValue={{...styles.itemValue,...item.styleValue||{}}}
                        width={item.width}
                    />
                )
            })}
        </div>
    )

}

const styles = {
    itemValue:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '20px',
    },
    itemKey:{
        fontSize: 14,
        fontWeight: 'normal',
    },
    directionRow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:Colors.brand.white,
        minHeight: 35,
        padding:5
    }
}