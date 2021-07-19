import React from 'react';

export default class SearchParameters extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text, catigories: 'all', sort: 'relevance'};
    }

    handleChenge = (e) => {
        this.setState({ text: e.target.value });
    };

    handleChengeCat = (e) => {
        this.setState({ catigories: e.target.value});
    };

    handleChengeSort = (e) => {
        this.setState({ sort: e.target.value });
    }

    hendleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.catigories, this.state.sort);
        console.log(this.state)
    };


    render() {
        return (
            <form className="params" onSubmit={this.hendleSubmit}>
                <label>
                    <input onChange={this.handleChenge} value={this.state.text} type="text" className="serch"></input>
                    <input type='submit' value='Serch' class="button"></input>
                    </label>
                <label>
                <span className="ctegories-name">Categories:</span> 
                <select value={this.state.catigories} onChange={this.handleChengeCat} name="categories" className="categories">
                    <option value="all" selected>all</option>
                    <option value="art">art</option>
                    <option value="allbiography">allbiography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </select>
                </label>
                <label className="sort-params">
                    <span class="ctegories-name">Sorting By:</span>
                    <select value={this.state.sort} onChange={this.handleChengeSort} name="sorting" className="categories">
                        <option value="relevance" >relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </label>
                </form>
    
        )
    }
    
}


  