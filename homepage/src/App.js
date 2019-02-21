import React from 'react';
import './App.css';
import './luxbar.scss';

class App extends React.Component {
    constructor() {
        super();

        this.checkboxes = [
            {
                name: 'fixed',
                default: false,
                display: 'Fixed to top'
            },
            {
                name: 'showBrand',
                default: true,
                display: 'Show brand label'
            },
            {
                name: 'shadow',
                default: true,
                display: 'Display box-shadow'
            },
            {
                name: 'showBrand',
                default: true,
                display: 'Show brand label'
            },
            {
                name: 'showBrand',
                default: true,
                display: 'Show brand label'
            },
        ]

        this.state = {
            fixed: false,
            showBrand: true,
            shadow: true,
            mobileView: true,
            evenItems: false
        }
    }

    handleCheckboxChange = e => {
        this.setState({[e.target.name]: e.target.checked});
    }

    renderCheckboxes = checkboxes => {
        return checkboxes.map(box => {
            return (<div key={box.name}>
                <input type="checkbox" name={box.name} checked={this.state[box.name]} onChange={this.handleCheckboxChange} />
                {box.display}: {this.state[box.name] ? 'Yes' : 'No'}
            </div>);
        });
    }

    render() {
        const luxbarClasses =  `luxbar ${this.state.fixed ? 'luxbar-fixed' : ''} ${this.state.shadow ? 'luxbar-shadow1' : ''}`;
        return (
            <div className="App">

                <nav className={luxbarClasses}>
                    {this.state.showBrand && <a className="luxbar-brand" href="/">Luxbar Brand</a>}
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
