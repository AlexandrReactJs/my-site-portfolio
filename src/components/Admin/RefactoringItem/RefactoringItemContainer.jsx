import React from "react";
import { connect } from "react-redux";
import RefactoringItem from "./RefactoringItem";
import { setRefactoringItemActionCreator } from "../../../redux/refactoring-portfolio-item";
import axios from "axios";
import {useParams} from "react-router"

const RefactoringItemContainer = ({setRefactoringItemActionCreator, item}) => {
    const {idItem} = useParams();

    const getRefactoringItem = React.useCallback(() => {
        axios.get(`https://62c5b945a361f725128cd8a5.mockapi.io/portfolioItems?id=${idItem}`).then(resp => {
            debugger;
            setRefactoringItemActionCreator(resp.data);
            
        })
    }, [idItem, setRefactoringItemActionCreator])

    React.useEffect(() => {
        debugger;
        getRefactoringItem();
    },[getRefactoringItem])
    return(
        <RefactoringItem item={item}/>
    )
}

const mapStateToProps = (state) => {
    return{
        item: state.refactoringItemPage.item
    }
}


export default connect(mapStateToProps, {setRefactoringItemActionCreator})(RefactoringItemContainer);