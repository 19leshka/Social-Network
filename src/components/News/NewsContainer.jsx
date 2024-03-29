import {connect} from 'react-redux';
import {useEffect} from 'react';
import News from './News';
import {getPostsThunkCreator} from '../../redux/reducers/news-reducer';

const NewsContainer = (props) => {
    useEffect(() => {
        document.title = "News";
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