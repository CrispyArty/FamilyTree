module Users
  class SessionsController < Devise::SessionsController
    # GET /resource/sign_in
    # def new
    #   super
    #   # self.resource = resource_class.new(sign_in_params)
    #   # clean_up_passwords(resource)
    #   # yield resource if block_given?
    #   # respond_with(resource, serialize_options(resource))
    # end

    # POST /resource/sign_in
    def create
      super
    end

    # DELETE /resource/sign_out
    def destroy
      super
    end
  end
end
