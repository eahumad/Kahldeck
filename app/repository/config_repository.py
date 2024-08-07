from flata import Query, where
from app.db.flata_connector import FlataConnector
from app.db.i_db_connector import IDBConnector
from app.repository.base_repository import BaseRepository


class ConfigRepository(BaseRepository):
    
    
    def __init__(self):
        super().__init__('config', FlataConnector('config'))
        
        
    def add_config(self, config: dict):
        self.open()
        self._table.insert(config)
        self.close()
        return True
    
    def get_config(self, key: str, value: str ):
        self.open()
        result =  self._table.search(where(key) == value)
        self.close()
        return result[0] if result else None
    
    def remove_config(self, key: str, value):
        self.open()
        result = self._table.remove(where(key) == value)
        self.close()
        return result