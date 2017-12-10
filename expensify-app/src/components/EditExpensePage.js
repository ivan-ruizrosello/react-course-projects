import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props, state) => {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('updated', expense);
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />        
            <button onClick={() => {
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = ( state, props) => {
    console.log(state)
    return {
        expense: state.expenses.find ( (expense) => expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditExpensePage);