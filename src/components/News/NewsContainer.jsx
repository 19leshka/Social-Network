import {connect} from 'react-redux';
import {useEffect} from 'react';
import News from './News';
import {getPostsThunkCreator} from './../../redux/news-reducer';

const NewsContainer = (props) => {
    document.title = "News";

    useEffect(() => {
        props.getNews();
    }, [])

    return (
        <News {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.news.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNews: () => {
            dispatch(getPostsThunkCreator());
        }
    }
}    

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);