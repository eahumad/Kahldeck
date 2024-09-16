import eel

from app.domain.layout import Layout
from app.provider.layout_provider import LayoutProvider


class LayoutController:
    _layoutProvider: LayoutProvider
    
    def __init__(self):
        self._layoutProvider = LayoutProvider()
        pass
    
    def get_layouts(self):
        return self._layoutProvider.get_all_layouts()
    
    def add_layout(self, layout):
        layout = Layout.from_dict(layout)
        return self._layoutProvider.add_layout(layout)
    
    def update_layout(self, layout):
        layout = Layout.from_dict(layout)
        return self._layoutProvider.update_layout(layout)
    
    def show_dummy(self, text):
        return "dummy "+text
    
    