class Api::CardsController < ApplicationController

  def index
    @cards = current_user.cards
    p "LOOOK HERE :LAKSJD:LKAJSD:LAS:DLKJA:KSDJ:AJD"
    p @cards
  end
end
