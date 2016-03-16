class HomeController < ApplicationController

  layout 'themes/bamboo/main_layout',except: 'admin'
  def index
    @posts=Post.all.order(created_at: :desc)
  end

## this is for admin page
  def admin
        if user_signed_in?
  	     redirect_to members_url
  	else
  	     redirect_to new_user_session_path
  	    end
      
  end

 
end

