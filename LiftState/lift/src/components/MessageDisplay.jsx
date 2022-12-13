
    
    
const MessageDisplay = (props) => {

    const style1={
                    backgroundColor:props.message,
                 }

    return (
        <>
            <h1>Current Message</h1>

            <pre style={style1}> { props.message }</pre>
        </>
    );
};
    
export default MessageDisplay;

