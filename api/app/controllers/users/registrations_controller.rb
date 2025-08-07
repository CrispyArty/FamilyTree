module Users
  class RegistrationsController < Devise::RegistrationsController
    # respond_to :json

    # POST /users/sign_up
    def create
      p "-----------------------1"
      p request.parameters
      p params
      p sign_up_params
      p "-----------------------2"

      build_resource(sign_up_params)

      p resource.save
      p "-----------------------3"
      p resource.errors
      p "-----------------------4"

      build_resource(permitted_params)

      if resource.save
        sign_up :user, resource
      end
    end

    protected

    def permitted_params
      params.permit(:email, :password, :password_confirmation)
    end
  end
end
