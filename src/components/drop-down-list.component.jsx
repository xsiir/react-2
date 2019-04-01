import React from 'react';

const DropDownListComponent = (props) => {
    const { options, selected, onChange } = props;

    // const onChange = (sender) => {
    //     const target = sender.target;
    //     alert(target.value);
    // }

    return (
        <select defaultValue={selected} className="form-control" onChange={onChange}>
            {
                RenderOptions(options)
            }
        </select>
    );
}

const RenderOptions = (options) => {
    const uiArray = [];
    for (let index = 0; index < options.length; index++) { //instead of for for you can use map
        const item = options[index];
        uiArray.push(<option key={index} value={item.id}>{item.name}</option>);
    }
    return uiArray;
}



export default DropDownListComponent;