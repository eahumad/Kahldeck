from app.domain.layout import Layout
from app.repository.layout_repository import LayoutRepository


class LayoutProvider:
    
    _layout_repository: LayoutRepository
    
    def __init__(self):
        self._layout_repository = LayoutRepository()
    
    def add_layout(self, layout: Layout, updateOnDuplicate=False):    
        return self._layout_repository.add_layout(layout)
    
    def get_layout(self, key: str, value: str):
        return self._layout_repository.get_layout(key, value)
    
    def remove_layout(self, key: str, value):
        self._layout_repository.remove_layout(key, value)
    
    def get_all_layouts(self):
        return self._layout_repository.get_all_layouts()
        
    def update_layout(self, layout):
        return self._layout_repository.update_layout(layout)