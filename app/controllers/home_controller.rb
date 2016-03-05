class HomeController < ApplicationController
  
  def index
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

