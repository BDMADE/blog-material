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
   

2. How to make(work) comment form in posts/show.html.erb file ?

solution:

You can render the comment form from comments/form or you can copy and paste code from post/show.html.erb page.

But you have to specify @comment=Comment.new in Post controller as like as:

def show
    @comment=Comment.new
end

3. How to show short description of post content ?

solution:

<%=truncate popular.description,length: 210 %>


4. How to show default image if commenter does not upload image ?

Open Models->Comment.rb and paste the image path of default or missing image.

Example:
has_attached_file :image, styles: {thumb: '150x150#' }, default_url: '/assets/materialize/user.png'

Caution: don't use assets/images/...

this path '/assets/materialize/user.png' is goes to open '/assets/images/materialize/user.png' file,
 
 rails always avoids images folder name after assets folder in ruby code ! 
