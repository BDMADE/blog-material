class RegistrationsController < Devise::RegistrationsController
	layout 'themes/materialize/main_layout'

	private
	def sign_up_params
		params.require(:user).permit(:name,:email,:password,:password_confirmation,:role_id)
		
	end

	def account_update_params
	params.require(:user).permit(:name,:email,:password,:password_confirmation,:current_password,:role_id)
	end

end

