class ImapsController < ApplicationController

  def create_imap_credentials
    @imap = Imap.new(imap_params)


    respond_to do |format|
      if @imap.save
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
