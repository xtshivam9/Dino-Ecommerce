from django import template
from core.models import USD_TO_INR

register = template.Library()


@register.filter
def to_inr(value):
    """Convert a USD price value to INR using the current exchange rate."""
    try:
        return round(float(value) * USD_TO_INR, 2)
    except (ValueError, TypeError):
        return value
