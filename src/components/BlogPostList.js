import React from 'react';

class BlogPostList extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        fetch("./db.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({posts: data})
            });
    }

    searchPosts(event) {
        var searchTerm = event.target.value.toLowerCase();

        fetch("./db.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);

                data = data.filter(function(post) {
                    return post.title.toLowerCase().indexOf(searchTerm) > -1;
                });

                this.setState({posts: data})
            });
    }

    renderPosts() {
        const posts = this.state.posts;
        console.log("posts: " + posts);

        return posts.map(post => (
            <div className="blog-post" key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-content">{post.feed}</p>
            </div>
        ));
    }

    render() {
        return (
            <section className="main-content">
                <input type="text" placeholder="search" onChange={this.searchPosts.bind(this)} />
                <div className="blog-posts">{this.renderPosts()}</div>
            </section>
        );
    }
}

export default BlogPostList;