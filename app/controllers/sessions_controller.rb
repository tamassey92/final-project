class SessionsController < ApplicationController
    
    def login
        user = User.find_by!(username: params[:username])

        if user&.authenticate(params[:password])
            render json: user, status: :ok
            # render json: {user: "Welcome to The Bucket List!"}
        else
            render json: { error: "Invalid Password or Username"}, status: :unprocessable_entity
        end
    end
end
