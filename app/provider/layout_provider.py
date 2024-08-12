from app.repository.layout_repository import LayoutRepository


class LayoutProvider:
    
    _layout_repository: LayoutRepository
    
    def __init__(self):
        self._layout_repository = LayoutRepository()
    
    def add_layout(self, layout, updateOnDuplicate=False):
        
        existed_layout = self.get_layout('name', layout.name)
        
        if existed_layout is not None and updateOnDuplicate :
            # if exist update
            layout.uuid = existed_layout.uuid
            return self._layout_repository.update_layout(layout)
        elif existed_layout is not None and not updateOnDuplicate:
            # if exist and updateOnDuplicate is false, do nothing
            return True
        else:
            # if not exist, add
            return self._layout_repository.add_layout(layout)
    
    def get_layout(self, key: str, value: str):
        return self._layout_repository.get_layout(key, value)
    
    def remove_layout(self, key: str, value):
        self._layout_repository.remove_layout(key, value)
    
    def get_all_layouts(self):
        self._layout_repository.get_all_layouts()
        
    def update_layout(self, layout):
        return self._layout_repository.update_layout(layout)