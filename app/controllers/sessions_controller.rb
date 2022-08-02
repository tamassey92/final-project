class SessionsController < ApplicationController
    
    before_action :is_authorized?, except: [:login]

    def login
        user = User.find_by!(username: params[:username])

        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok
            # render json: {user: "Welcome to The Bucket List!"}
        else
            render json: { error: "Invalid Password or Username"}, status: :unprocessable_entity
        end
    end

    def show
        render json: current_user
    end
end
