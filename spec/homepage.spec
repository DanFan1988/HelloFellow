require 'spec_helper'

feature "signing in" do
	before :each do
		User.create(:username => "alksjdf", :email => "a@a.a", :password => "password")
	end

	scenario "navigates to sign in page" do
		visit '/'
		click_link "Have an account? Sign In."
		save_and_open_page
	end

end