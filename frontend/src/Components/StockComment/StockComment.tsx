import React from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentPostAPI } from '../../Services/CommentService';
import { toast } from 'react-toastify';

type Props = {
    stockSymbol: string;
}

type CommentFormInputs = {
    title: string;
    content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
    const handleComment = async (e: CommentFormInputs) => {
        try {
            const res = await commentPostAPI(e.title, e.content, stockSymbol);
            if(res) {
                toast.success("Comment created successfully!");
            }
        } catch (e) {
            toast.warning("Server error occurred");
        }
    };
  return (
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
  )
};

export default StockComment