class ApplicationController < ActionController::API
  def health_check
    render json: { gosu: 228 }, status: :ok
  end
end
