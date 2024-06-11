import WoodChippingLoadBarInfo from "./WoodChippingLoadBarInfo.jsx";
import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Colors} from "../../../constants/color.js";
import {Row,Col} from "antd"
import WoodChippingCardHeader from "./WoodChippingCardHeader.jsx";
import WoodChippingCardContent from "./WoodChippingCardContent.jsx";

// Add the icon to the library
library.add(faCheck);

export default ()=>{
    const [width, setWidth] = useState(0);
    const parentRef = useRef(null);
    useEffect(() => {
        if (parentRef.current) {
            setWidth(parentRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (parentRef.current) {
                setWidth(parentRef.current.offsetWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: `80%`,
            height: '80%',
            backgroundColor:Colors.brand.tripper,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: Colors.brand.green,
            padding:10,
        }}>
            <Row>
                <Col span={12}>
                    <WoodChippingCardHeader
                        title={"City of Cape Town"}
                        month={"February 2024"}
                    />
                    <WoodChippingCardContent
                        Data={[
                            {
                                amountValue:1609880,
                                amountUnits: "kgs",
                                targetValue: 1500000,
                                currentProfit:109880,
                                currentStatusColor:"green",
                                currentStatusIndicator:"up",
                                previousAmountValue:1546640,
                                previousProfit:109880,
                                previousStatusColor:"green",
                                previousStatusIndicator:"up",

                            },
                            {
                                amountValue:65,
                                amountUnits: "loads",
                                targetValue: 60,
                                currentProfit:5,
                                currentStatusColor:"green",
                                currentStatusIndicator:"up",
                                previousAmountValue:59,
                                previousProfit:6,
                                previousStatusColor:"green",
                                previousStatusIndicator:"up",
                            },
                            {
                                amountValue:65,
                                amountUnits: "loads",
                                targetValue: 60,
                                currentProfit:5,
                                currentStatusColor:"green",
                                currentStatusIndicator:"up",
                                previousAmountValue:59,
                                previousProfit:6,
                                previousStatusColor:"green",
                                previousStatusIndicator:"up",
                            }
                        ]}
                    />
                </Col>
                <Col  span={12}>
                    <WoodChippingLoadBarInfo Data={[
                        {
                            k:"Load Balance",
                            v:"",
                            styleKey:{fontSize:18,fontWeight:"bold"},
                        },
                        {
                            k:"City of Cape Town",
                            v:75,
                        },
                        {
                            k:"Total Compost Makers",
                            v:65,
                        },
                        {
                            k:"Balance",
                            v:0,
                        },
                        {
                            k:<FontAwesomeIcon icon={"check"} />,
                        }

                    ]}/>
                </Col>
            </Row>


        </div>
    )
}