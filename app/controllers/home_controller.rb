class HomeController < ApplicationController

layout 'themes/materialize/main_layout'
  def index
    @posts=Post.paginate(:page => params[:page], :per_page => 2).order('created_at DESC')
    @popular_posts=Post.all.order(created_at: :desc).limit(2)
    @archive=Post.all.order(created_at: :asc).limit(8)

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

