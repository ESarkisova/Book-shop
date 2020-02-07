import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {setSort} from "../actions/filter";


const mapStateToProps = ({ filter }) => ({
    filter: filter.filter
});

export default connect(mapStateToProps, {setSort})(Sidebar);