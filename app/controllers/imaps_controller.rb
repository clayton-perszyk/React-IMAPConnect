class ImapsController < ApplicationController

  def create_imap_credentials
    @imap = Imap.new(imap_params)


    respond_to do |format|
      if @imap.save
        session[:imap_id] = @imap.id
        format.html
        format.json { render json: @imap, status: :created }
      else
        format.html
        format.json  { render json: @imap.errors, status: :unprocessable_entity }
      end
    end
  end


  private

  def imap_params
     params.require(:imap).permit(:email, :password, :host, :port, :ssl)
  end
end
