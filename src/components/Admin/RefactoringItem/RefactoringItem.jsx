import React from "react";


const RefactoringItem = (props) => {
    return (
        <div>
            {props.item?.map((item) => (
                <div>
                    <textarea value={item.title} />
                </div>
            ))}
        </div>
    )
}

export default RefactoringItem;