class CommentsController < ApplicationController


        def index 
            render json: Comment.all
        end 
    

        def show
            comment = Comment.find(params[:id])
            render json: comment, include: [:idea]
        end 


        def create
            comment = Comment.create!(comment_params)
            render json: comment, status: :created
        end
    

        def update
            comment = Comment.find(params[:id])
            comment.update!(comment_params)
            render json: comment, status: :created
        end
    

        def destroy
            comment = Comment.find(params[:id])
            comment.destroy
            head :no_content
        end
    
        private
    
        def comment_params
            params.permit(:description, :user_id, :idea_id)
        end
end
