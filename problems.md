1. How to make my pagination system by will paginate in ajax ?

solution:

## Create a new helper (ex. app/helpers/will_paginate_helper.rb) with the following content:

module WillPaginateHelper
  class WillPaginateJSLinkRenderer < WillPaginate::ActionView::LinkRenderer
    def prepare(collection, options, template)
      options[:params] ||= {}
      options[:params]['_'] = nil
      super(collection, options, template)
    end

    protected
    def link(text, target, attributes = {})
      if target.is_a? Fixnum
        attributes[:rel] = rel_value(target)
        target = url(target)
      end

      @template.link_to(target, attributes.merge(remote: true)) do
        text.to_s.html_safe
      end
    end
  end

  def js_will_paginate(collection, options = {})
    will_paginate(collection, options.merge(:renderer => WillPaginateHelper::WillPaginateJSLinkRenderer))
  end
end

## Then in your view use this tag for ajax pagination:
   
   <%= js_will_paginate @recipes %>
   Remember that the pagination links will include existing params of the url, you can exclude these as shown below. This is standard will paginate functionality:
   
   <%= js_will_paginate @recipes, :params => { :my_excluded_param => nil } %>

### reference: http://stackoverflow.com/questions/13623953/how-to-implement-ajax-pagination-with-will-paginate-gem
   

