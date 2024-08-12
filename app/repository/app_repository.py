from app.db.flata_connector import FlataConnector
from app.db.i_db_connector import IDBConnector
from app.repository.base_repository import BaseRepository


class AppRepository:
    
    _connector: IDBConnector
    
    def __init__(self):
        self._connector = FlataConnector('app')
        
        
    def _open(self, table_name: str):
        db = self._connector.connect()
        return db.table(table_name)
        
    def _close(self):
        self._connector.disconnect()
        
    def create_iconpacks_table(self):
        self._open('iconpacks')
        self._close()
        
    def create_layouts_table(self):
        self._open('layouts')
        self._close()
        