require 'rails_helper'

RSpec.describe "UserTests", type: :request do
  describe "GET /show" do
    it "returns http success" do
      get "/user_test/show"
      expect(response).to have_http_status(:success)
    end
  end

end
