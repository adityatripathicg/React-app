
function User({userName, textColor}){
let styles = {color : textColor}
    return (
        <div>
            <h3 style={styles}>Hello {userName}</h3>
        </div>
    );
};

export default User;