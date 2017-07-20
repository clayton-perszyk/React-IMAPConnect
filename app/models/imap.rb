class Imap < ApplicationRecord
  require 'net/imap'

  def get_email_subjects(searchEmail)
    subjects = []
    imapConnection = Net::IMAP.new(self.host, self.port, self.ssl)
    imapConnection.login(self.email, self.password)
    imapConnection.examine("[Gmail]/All Mail")
    uids = imapConnection.uid_search(["FROM", searchEmail])
    uids.each do |uid|
      subjects.push(imapConnection.fetch(uid, "ENVELOPE")[0].attr["ENVELOPE"].subject)
    end

    imapConnection.logout
    imapConnection.disconnect

    return subjects
  end
end
