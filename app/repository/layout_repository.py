from flata import where
from app.db.flata_connector import FlataConnector
from app.domain.layout import Layout
from app.repository.base_repository import BaseRepository


class LayoutRepository(BaseRepository):
    
    def __init__(self):
        super().__init__('layouts', FlataConnector('app'))
        
    def add_layout(self, layout: Layout):
        self.open()
        self._table.insert(layout.to_dict())
        self.close()
        return True
    
    def get_layout(self, key: str, value: str ):
        self.open()
        result =  self._table.search(where(key) == value)
        self.close()
        return result[0] if result else None
    
    def remove_layout(self, key: str, value):
        self.open()
        result = self._table.remove(where(key) == value)
        self.close()
        return result
    
    def get_all_layouts(self):
        self.open()
        result = self._table.all()
        self.close()
        return result