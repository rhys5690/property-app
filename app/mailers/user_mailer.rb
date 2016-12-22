class UserMailer < ApplicationMailer

  default from: "rhysdiab@60minutetrainingweek.com"

  def results(email)


    @email = email
    mail( :to => @email, :subject => "Welcome to the realestate kings", :bcc => "rhys5690@gmail.com" )

    # send welcome.html.erb to @user
  end


end
