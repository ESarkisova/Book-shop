import React from 'react';
import {connect} from "react-redux";
import {Input} from "semantic-ui-react";
import {changeSearchText} from "../actions/filter";

const Search = ({searchText, changeSearchText}) => {

    return <Input icon='search'
                  value = {searchText}
                  onChange={(e) => changeSearchText(e.target.value)}
                  placeholder='Поиск...' />
};

const mapStateToProps = ({filter}) => ({
    searchText: filter.searchText
});

export default connect(mapStateToProps, {changeSearchText})(Search);