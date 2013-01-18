class ApplicationController < ActionController::Base
  include ApplicationHelper
  protect_from_forgery
  before_filter :authenticate, except: [:login]

  def login
    if request.post?
      session[:current_user] = params[:name]
      render '/login.js.erb'
    else
      render '/login.html.erb'
    end
  end

  def logout
    session.clear
    render '/logout.js.erb'
  end

  private

    def authenticate
      unless current_user
        if request.path == '/messages' && request.post?
          render js: 'window.location.href="/";' and return
        else
          redirect_to login_path and return unless current_user
        end
      end
    end

    def current_user
      @current_user ||= session[:current_user]
    end

    helper_method :current_user
end
