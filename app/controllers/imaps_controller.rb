class ImapsController < ApplicationController

  def create_imap_credentials
    if Imap.exists? email: imap_params[:email]
        @imap = Imap.find_by_email imap_params[:email]
    else
        @imap = Imap.create(imap_params)
    end



    respond_to do |format|
      if @imap
        session[:imap_id] = @imap.id
        format.json { render json: @imap, status: :created }
      else
        format.json  { render json: @imap.errors, status: :unprocessable_entity }
      end
    end
  end

  def get_email_subjects
      @imap = Imap.find(session[:imap_id])

      respond_to do |format|
        if @imap
          results = @imap.get_email_subjects(search_params)
          format.json { render json: results, status: :created }
        else
          format.json  { render json: "unable to process...", status: :not_found }
        end
      end
  end


  private

  def imap_params
     params.require(:imap).permit(:email, :password, :host, :port, :ssl)
  end

  def search_params
    params.require(:email)
  end
end
