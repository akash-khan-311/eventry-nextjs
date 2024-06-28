import React from "react"

const Field = ({ label, children, htmlFor, error }) => {
    const id = htmlFor || getChildId(children)
    return (
        <div className=''>
            {label && (
                <label htmlFor={id} className=''>
                    {label}
                </label>
            )}
            {children}
            {!!error && (
                <div className='text-red-600' role='alert'>
                    {error.message}
                </div>
            )}
        </div>
    )
}

const getChildId = children => {
    const child = React.Children.only(children)

    if ('id' in child?.props) {
        return child.props.id
    }
}
export default Field