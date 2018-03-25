module ApplicationHelper

  def bootstrap_class_for flash_type
    case flash_type.to_sym
      when :success
        "success"
      when :error
        "error"
      when :alert
        "warning"
      when :notice
        "info"
      else
        flash_type.to_s
    end
  end
end
