class ImapAppController < ApplicationController
  layout "imap_app"

  def index
    @imap_app_props = {}
  end
end
