import React from 'react';

const DropDownListComponent = (props) => {
    
    const { options, selected, onChange } = props;

    return (
        <select defaultValue={selected} className="form-control" onChange={onChange}>
            {
                RenderOptions(options)
            }
        </select>
    );
}

const RenderOptions = (options) => {
    return options.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
}



export default DropDownListComponent;