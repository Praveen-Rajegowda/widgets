import React,{useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";


const items =[
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title : 'Why use React?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title : 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'Green'
    },
    {
        label: 'The Shade of Blue',
        value: 'blue'
    }
];

export default () => {

    //const[selected,setSelected]= useState(options[0]);

    //const[showDropdown,setShowDropdown]= useState(true);4
  /*  <div>
        <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        {showDropdown ?
            <Dropdown selected={selected} onSelectedChange={setSelected}
                      options={options}/>
            :null}

    </div>;*/

    return <div>
        <Translate />
    </div>
};