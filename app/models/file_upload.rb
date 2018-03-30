class FileUpload < ApplicationRecord
  has_attached_file :upload, styles: ->(file) { file.instance.check_file_type }, default_url: '/images/:style/missing.png'
  validates_attachment_content_type :upload, content_type: /.*/
  # validates_with AttachmentSizeValidator, attributes: :file, less_than: 5.megabytes
  def get_url
    self.file.url
  end
  def check_file_type
    if is_image_type?
      { large: '750x750>', medium: '300x300#', thumb: '100x100#' }
    elsif is_video_type?
      {
          medium: { geometry: '300x300#', format: 'jpg' },
          video: { geometry: '640x360#', format: 'mp4', processors: [:transcoder] }
      }
    elsif is_audio_type?
      {
          audio: {
              format: 'mp3', processors: [:transcoder]
          }
      }
    else
      {}
    end
  end

  def is_image_type?
    upload_content_type=~ /image/
  end


  def is_video_type?
    upload_content_type =~ /video/
  end

  def is_audio_type?
    upload_content_type =~ /\Aaudio\/.*\Z/
  end
end


