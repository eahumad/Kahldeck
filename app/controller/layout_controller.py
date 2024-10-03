import eel

from app.domain.layout import Layout
from app.provider.layout_provider import LayoutProvider
from app.provider.macro_provider import MacroProvider


class LayoutController:
    _layoutProvider: LayoutProvider
    _macroProvider: MacroProvider
    
    def __init__(self):
        self._layoutProvider = LayoutProvider()
        pass
    
    def get_layouts(self):
        return self._layoutProvider.get_all_layouts()
    
    def get_layout(self, uuid):
        layout = self._layoutProvider.get_layout('uuid', uuid)
        return layout.to_dict()
    
    def add_layout(self, layout):
        layout = Layout.from_dict(layout)
        return self._layoutProvider.add_layout(layout)
    
    def update_layout(self, layout):
        layout = Layout.from_dict(layout)
        return self._layoutProvider.update_layout(layout)
    
    def remove_layout(self, uuid):
        return self._layoutProvider.remove_layout('uuid', uuid)
    
    def show_dummy(self, text):
        return "dummy "+text
    
    
    
    