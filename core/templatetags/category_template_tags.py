from django import template
from django.utils.safestring import mark_safe

from core.models import Category

register = template.Library()


@register.simple_tag
def categories():
    items = Category.objects.filter(is_active=True).order_by('title')
    items_li = ""
    for i in items:
        items_li += """<li><a href="/category/{}">{}</a></li>""".format(i.slug, i.title)
    return mark_safe(items_li)

@register.simple_tag
def categories_mobile():
    items = Category.objects.filter(is_active=True).order_by('title')
    items_li = ""
    for i in items:
        items_li += """<li class="item-menu-mobile"><a href="/category/{}">{}</a></li>""".format(i.slug, i.title)
    return mark_safe(items_li)


@register.simple_tag
def categories_li_a():
    items = Category.objects.filter(is_active=True).order_by('title')
    items_li_a = ""
    for i in items:
        items_li_a += """<li class="p-t-4"><a href="/category/{}" class="s-text13">{}</a></li>""".format(i.slug,
                                                                                                         i.title)
    return mark_safe(items_li_a)


@register.simple_tag
def categories_div():
    """
    section banner
    """
    items = Category.objects.filter(is_active=True).order_by('title')
    item_div_list = ""
    for i, j in enumerate(items):
        item_div_list += f"""
        <div class="tight-gallery-item item-{i}">
            <div class="block1 hov-img-zoom pos-relative">
                <img src="/media/{j.image}" alt="{j.title}">
                <div class="block1-wrapbtn w-size2">
                    <a href="/category/{j.slug}" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                        {j.title}
                    </a>
                </div>
            </div>
        </div>
        """
    return mark_safe(f'<div class="category-tight-gallery">{item_div_list}</div>')
