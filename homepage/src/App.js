import React from 'react';
import './App.css';
import './luxbar.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fixed: false
        }
    }
    changeFixed = e => {
        this.setState({fixed: !this.state.fixed});
    }
    render() {
        return (
            <div className="App">

                <nav className={ 'luxbar luxbar-shadow1' + (this.state.fixed ? ' luxbar-fixed' : '') }>
                    <input type="checkbox" id="luxbar-checkbox"/>
                    <label className="luxbar-hamburger luxbar-hamburger-doublespin" 
                        htmlFor="luxbar-checkbox"> <span></span> </label>
                    <ul className="luxbar-items">
                        <li><a href="/">Item 1</a></li>
                        <li><a className="luxbar-active" href="/">Item 2</a></li>
                        <li><a href="/">Item 3</a></li>
                        <li><a href="/">Item 4</a></li>
                        <li><a href="/">Item 5</a></li>
                        <li><a href="/">Item 6</a></li>
                    </ul>
                </nav>

                <div style={{marginTop: this.state.fixed ? '88px' : '32px'}} >
                    {this.renderCheckboxes(this.checkboxes)}
                </div>

                <hr/>
                <p> Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium  Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium </p>
                <p> Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium  Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium </p>
                <p> Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium  Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium </p>
                <p> Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium  Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium </p>
                <p> Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium  Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium </p>
                <p> Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium  Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium </p>
                <p> Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium  Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium </p>
                <p> Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium  Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium </p>
                <p> Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium  Dolor tempora ut quisquam ab dolore Explicabo voluptates nihil temporibus tempora laboriosam. Ipsa eos neque ratione cumque deserunt? Deleniti repudiandae quas consequatur excepturi velit eligendi reiciendis, dolores Sit quod praesentium </p>
            </div>
        );
    }
}

export default App;
