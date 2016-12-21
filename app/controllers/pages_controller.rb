class PagesController < ApplicationController

  def home

    # ------------------ Start of global stats section --------------------------

    # The following code trys to find the total price for all suburbs

    all_prices = Price.all.pluck(:mean_b3)
    total_price = all_prices.reduce(0) do |total, current_price|
      total + current_price
    end
    @average_all_suburbs = total_price / Price.all.count



    #  The following code will generate an array containing the name and price for every suburb
    # In the form of array inside an array [ [suburb_name, suburb_price], [] ]

    @all_suburbs = Suburb.all
    @suburb_price_array = Array.new
    @suburb_price_history_array = Array.new

    @all_suburbs.each do |suburb|
      latest_price = suburb.prices[0].mean_b3
      current_suburb_price_array = [suburb, latest_price]
      @suburb_price_array.push(current_suburb_price_array)
      # puts "line 28: #{suburb.name} - #{current_suburb_price_array}"
      # interate through all prices in each suburb
      current_suburb_price_history_array = Array.new
      current_suburb_price_history = suburb.prices
      current_suburb_price_history.each do |price|
        monthly_price = price.mean_b3
        month_name = price.suburb.name
        month_name_and_price = [month_name, monthly_price]
        current_suburb_price_history_array.push(month_name_and_price)
        # puts "line 37: #{suburb.name} - #{month_name_and_price}"

      end
      @suburb_price_history_array.push(current_suburb_price_history_array)

    end
    # Find the global previous month average price

    @previous_month_average_array = Price.where({:month => "Nov"}).pluck(:mean_b3)
    @previous_month_average = @previous_month_average_array.reduce(:+)/ (@previous_month_average_array.count)

    # Find the global current month average price
    @current_month_average_array = Price.where({:month => "Dec"}).pluck(:mean_b3)
    @current_month_average = @current_month_average_array.reduce(:+)/ (@current_month_average_array.count)

    # Find the global next month projection
    @projected_growth_percentage = (@current_month_average.to_f - @previous_month_average)/ @previous_month_average * 100

    @projected_growth_value = @current_month_average * (@projected_growth_percentage/100 +1)

    # Render as JSON
    @response = {
      :suburb_price_hash => @suburb_price_history_array,
      :projected_growth_value => @projected_growth_value,
      :previous_month_average => @previous_month_average,
      :current_month_average => @current_month_average
    }

    respond_to do |format|
      format.html # This will render generator.html.erb in response to requests for HTML
      format.json { render json: @response } # This will render JSON in response to AJAX requests
    end
    # ------------------ End of global stats section --------------------------
    # ------------------ Start of Local stats section --------------------------




    # ------------------ End of Local stats section --------------------------

  end

  def search

    bed_base = 1
    @b3_modi = bed_base * 1
    @b1_modi = bed_base * 0.55
    @b2_modi = bed_base * 0.77
    @b4_modi = bed_base * 1.327
    @b5_modi = bed_base * 1.6
    @bmore_modi = bed_base * 1.8

    bth_base = 1
    @bth1_modi = bth_base * 0.96
    @bth2_modi = bth_base * 1.05
    @bth3_modi = bth_base * 1.055
    @bth4_more_modi = bth_base * 1.06

    sqm_base = 1
    @sqm_200_250 = sqm_base * 1.0
    @sqm_150_200 = sqm_base * 0.9
    @sqm_100_150 = sqm_base * 0.8
    @sqm_0_100 = sqm_base * 0.7
    @sqm_250_300 = sqm_base * 1.1
    @sqm_0_100 = sqm_base * 1.2
    @sqm_300_350 = sqm_base * 1.3
    @sqm_350_400 = sqm_base * 1.4
    @sqm_400_more = sqm_base * 1.5

    dist_base = 1
    @dist_0_1 = dist_base * 1.05
    @dist_1_2 = dist_base * 1
    @dist_2_more = dist_base * 0.95

    park_base = 1
    @park_1 = park_base * 1
    @park_2 = park_base * 1.03
    @park_0 = park_base * 0.97
    @park_3 = park_base * 1.06
    @park_4_more = park_base * 1.08



    # UserMailer.results(params[:email]).deliver_now
    # Apply modifiers prices
    # look up postgres ILIKE (case insesnsitive database queries)
    @suburb_hash = Suburb.where({:name => params[:suburb]}).first
    @suburb = params[:suburb]
    @bedrooms = params[:bedrooms]


    @sqm = params[:square_meters]
    @parking_spaces = params[:parking_spaces]
    @bathrooms = params[:bathrooms]
    @street_name = params[:street_name]
    @house_number = params[:house_number]
    @distance_from_transport = params[:distance_from_transport]

    case @bedrooms
    when "1"
      @bedrooms_modi = @b1_modi
    when "2"
      @bedrooms_modi = @b2_modi
    when "3"
      @bedrooms_modi = @b3_modi
    when "4"
      @bedrooms_modi = @b4_modi
    when "5"
      @bedrooms_modi = @b5_modi
    else
      @bedrooms_modi = @bmore_modi
    end


    @sqm_int = @sqm.to_i
    if @sqm_int < 100
      @sqm_modi = @sqm_0_100
    elsif @sqm_int >= 100 && @sqm_int <150
      @sqm_modi = @sqm_100_150
    elsif @sqm_int >= 150 && @sqm_int <200
      @sqm_modi = @sqm_150_200
    elsif @sqm_int >= 200 && @sqm_int <250
      @sqm_modi = @sqm_250_300
    elsif @sqm_int >= 250 && @sqm_int <300
      @sqm_modi = @sqm_250_300
    elsif @sqm_int >= 300 && @sqm_int <350
      @sqm_modi = @sqm_300_350
    elsif @sqm_int >= 350 && @sqm_int <400
      @sqm_modi = @sqm_350_400
    else
      @sqm_modi = @sqm_400_more
    end

    case @bathrooms
    when "1"
      @bathrooms_modi = @bth1_modi
    when "2"
      @bathrooms_modi = @bth1_modi
    when "3"
      @bathrooms_modi = @bth1_modi
    else
      @bathrooms_modi = @bth4_more_modi
    end

    @distance_from_transport_int = @distance_from_transport.to_i
    if @distance_from_transport_int <= 1
      @distance_from_transport_modi = @dist_0_1
    elsif @distance_from_transport_int > 1 && @distance_from_transport_int <= 2
      @distance_from_transport_modi = @dist_1_2
    else
      @distance_from_transport_modi = @dist_2_more
    end

    case @parking_spaces_modi
    when "0"
      @parking_spaces_modi = @park_0
    when "1"
      @parking_spaces_modi = @park_1
    when "2"
      @parking_spaces_modi = @park_2
    when "3"
      @parking_spaces_modi = @park_3
    else
      @parking_spaces_modi = @park_4_more
    end

    @my_property_price = @suburb_hash.prices[0].mean_b3 * (@bathrooms_modi.to_f) * (@bedrooms_modi.to_f) * (@parking_spaces_modi.to_f) * (@sqm_modi.to_f) * (@distance_from_transport_modi.to_f)



    # @my_suburb_current_price = @suburb.price[0].mean_b3
    # puts "The price of my property is: #{@my_suburb_current_price}"


    @response = {
      :suburb_hash => @suburb_hash,
      :suburb => @suburb,
      :bedrooms => @bedrooms,
      :sqm => @sqm,
      :parking_spaces => @parking_spaces,
      :bathrooms => @bathrooms,
      :street_name => @street_name,
      :house_number => @house_number,
      :distance_from_transport => @distance_from_transport,
      :my_property_price => @my_property_price
      # rails "c"

    }
    # binding.pry
    render :json => @response
    #
    #
    # @bedrooms = params[:bedrooms]
    #
    # @bth = params[:bathrooms]
    #
    # @sqm = params[:square_meters]
    #
    # @dist = params[:distance_from_transport]
    #
    # @park = params[:parking_spaces]
    #
    # # Determine total price
    # @prices = @suburb_hash.prices[0].mean_b3 * @bedrooms.to_i * @bth.to_i * @sqm.to_i * @dist.to_i * @park.to_i
    # User.create({:email => params[:email]})
    # # Suburb.where({:name => params[:suburb]})
    # # @prices = @suburb.prices



  end

end
