class SessionsController < Devise::SessionsController
  layout 'themes/materialize/main_layout', only: [:new]
end
