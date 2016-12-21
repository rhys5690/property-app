class UserMailer < ApplicationMailer

  default from: "rhysdiab@60minutetrainingweek.com"

  def welcome(user)
    @user = user
    mail( :to => @user.email, :subject => "Welcome to the realestate kings", :bcc => "rhys5690@gmail.com" )

    # send welcome.html.erb to @user
  end

  
end
