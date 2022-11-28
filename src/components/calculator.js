import React from 'react';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {
            question: '',
            answer: ''
        }
        this.btnValues = [
            ["C", "Del", ".", "/"],
            [7, 8, 9, "X"],
            [4, 5, 6, "-"],
            [1, 2, 3, "+"],
            [0, "="],
          ];
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="frame">
                <div className="calc-container">
                    <OutputScreen answer={this.state.answer} question={this.state.question}/>
                    {this.btnValues.flat().map((btn, i) => {
                        return (
                            <Button
                                key={i}
                                label={btn}
                                handleClick={this.handleClick}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

    handleClick(event) {
        const value = event.target.value;
        console.log(this.state);
        switch (value) {
            case '=': {
                if (this.state.question!=='') {
                    var ans='';
                    try {
                        ans = eval(this.state.question);
                    } catch(err) {
                        this.setState({answer: "Math Error"});
                    }
                    
                    if (ans===undefined){
                        this.setState({answer: "Math Error"});
                    } else {
                        this.setState({ answer: ans , question: ''});
                        break;
                    }
                }
                break;
            }
            case 'C': {
                this.setState({ question: '', answer: '' });
                break;
            }
            case 'Del': {
                var str = this.state.question;
                str = str.substr(0,str.length-1);
                this.setState({question: str});
                break;
            }
       
            default: {
                this.setState({ question: this.state.question += value})
                break;
            }
        }
    }
}

export default Calculator;