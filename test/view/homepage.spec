require 'test_helper.rb'

describe "signing in" do
	before :each do
		User.make(:username => "alksjdf", :email => "a@a.a", :password => "password")
	end

	it "navigates to sign in page" do
		visit '/'
		click "Have an account? Sign In."
		save_and_open_page
	end

end