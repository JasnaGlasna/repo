export const Comments = ({Comments,})
export const Comments = (props) => {
    return(
        <div id="comments">
            {props.hasComments === true?<h2>Comments:</h2>
            : <p>No comments here</p>}
            {props.longComments === true &&
            <h4>We have a long comment<h4>}
        </div>
    );
}