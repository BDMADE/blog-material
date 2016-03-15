class SessionsController < Devise::SessionsController
  layout 'themes/bamboo/main_layout', except: [:new]
end