class IdeasController < ApplicationController

    def index
        render json: Idea.all
      end

      def show
        idea = Idea.find(params[:id])
        render json: idea, include: :comments
      end


      def destroy
        idea = Idea.find(params[:id])
        idea.destroy
        head :no_content
    end


    def create
      idea = Idea.create!(idea_params)
      render json: idea, status: :created
  end

  private
    
  def idea_params
      params.permit(:title, :image)
  end

end
