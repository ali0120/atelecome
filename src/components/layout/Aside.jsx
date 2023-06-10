import React from 'react'
import { Button, Divider, Progress } from 'antd'
const currentSMS = 10587;
const totalSMS = 20000;
const percentage = (currentSMS / totalSMS) * 100;

const Aside = () => {
    return (
        <div>
            <h2 style={{ marginBottom: "20px" }}>Quota Usage:</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
                <Progress
                    type="circle"
                    percent={percentage}
                    format={(percent) => (
                        <>
                            <span style={{ fontSize: '18px', fontWeight: "700", display: "inline-block", color: "var(--primary-color)" }}>
                                10,587
                            </span>
                            <span style={{ fontSize: "12px", fontWeight: "600", marginLeft: "5px" }} >SMS</span>
                            <div style={{ fontSize: '14px', marginTop: '8px' }}>
                                <h5>Remaining of</h5>
                                <span style={{ display: "inline-block", fontWeight: "600", marginTop: "4px" }} >20,000 </span>
                                <span style={{ fontSize: "10px", fontWeight: "600", marginLeft: "5px" }}>SMS</span>
                            </div>
                        </>
                    )}
                    size={200}
                    strokeWidth={8}
                    strokeLinecap="square"
                />
                <Button className="recharge">
                    Recharge
                </Button>
            </div>
            <Divider style={{ backgroundColor: '#E9E9E9', margin: '16px 0' }} />
            <h2 style={{ marginBottom: "20px" }}>Package Type</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                <h2 style={{ fontSize: "25px", color: "var(--primary-color)" }}>Golden Package</h2>
                <ul>
                    <li>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <h4 style={{ color: "#535353", fontSize: "18px", fontWeight: '400' }} >Package Name:</h4>
                            <h4 style={{ color: "#535353", fontSize: "18px", fontWeight: '700' }}>Mobise 5k</h4>
                        </div>
                    </li>
                    <li>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <h4 style={{ color: "#535353", fontSize: "18px", fontWeight: '400' }} >SMS Quota:</h4>
                            <h4 style={{ color: "#535353", fontSize: "18px", fontWeight: '700' }}>5000</h4>
                        </div>
                    </li>
                    <li>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <h4 style={{ color: "#535353", fontSize: "18px", fontWeight: '400' }} >In-Bundle SMS Rate:</h4>
                            <h4 style={{ color: "#535353", fontSize: "18px", fontWeight: '700' }}>24PTs</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Aside