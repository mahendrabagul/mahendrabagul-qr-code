import React from "react";
import { QRCode } from "react-qr-svg";

export default class Demo extends React.Component {
    render() {
        return (
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#4756fe"
                level="Q"
                style={{ width: 256 }}
                value="https://api.github.com/users/mahendrabagul"
            />
        );
    }
}
