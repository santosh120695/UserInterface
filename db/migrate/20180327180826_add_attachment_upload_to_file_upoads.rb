class AddAttachmentUploadToFileUpoads < ActiveRecord::Migration[4.2]

def self.up
    change_table :file_uploads do |t|
      t.attachment :upload
    end
  end

  def self.down
    remove_attachment :file_uploads, :upload
  end
end
