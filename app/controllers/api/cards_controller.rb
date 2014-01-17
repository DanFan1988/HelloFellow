class Api::CardsController < ApplicationController

  def index
    @cards = current_user.cards
  end

  def show
    @card = current_user.gists.new(params[:list])
    if @card.save
      render :show
    else
      render :json => @card.errors.full_messages, :status => 422
    end
  end

  def create
    @card = Card.new(params[:card])
    if @card.save
      head :ok
    else
      render :json => @card.errors.full_messages, :status => 422
    end
  end
end
