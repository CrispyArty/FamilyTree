class UserTestController < ApplicationController
  before_action :authenticate_user!

  def show
    p current_user
    p user_session
  end

  def test_post
    p params
  end
end
