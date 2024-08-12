from app.repository.layout_repository import LayoutRepository


class LayoutProvider:
    
    _layout_repository: LayoutRepository
    
    def __init__(self):
        self._layout_repository = LayoutRepository()
    
    def add_layout(self, layout):
        self._layout_repository.add_layout(layout)
    
    def get_layout(self, key: str, value: str):
        self._layout_repository.get_layout(key, value)
    
    def remove_layout(self, key: str, value):
        self._layout_repository.remove_layout(key, value)
    
    def get_all_layouts(self):
        self._layout_repository.get_all_layouts()