import React from "react";
import ModernDatepicker from "react-modern-datepicker";
import "./App.css";

class ModernDatepicker1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date() // can be any of these ['dayjs()', '', null, new Date(2018,12,1)]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <ModernDatepicker
                date={this.state.startDate}
                format={"MM/DD/YYYY"}
                showBorder
                className="color"
                onChange={date => this.handleChange(date)}
                placeholder={"Select a date"}
                primaryColor={"#d9b44a"}
                secondaryColor={"#75b1a9"}
                primaryTextColor={"#4f6457"}
                secondaryTextColor={"#acd0c0"}
            />
        );
    }
}

export default ModernDatepicker1;
