from app.db.i_db_connector import IDBConnector
from app.repository.i_repository import IRepository


class BaseRepository(IRepository):
    
    _table = object
    _table_name: str
    _connector: IDBConnector
    
    def __init__(self, table_name: str, connector: IDBConnector):
        self._table_name = table_name
        self._connector = connector
        
    def open(self):
        db = self._connector.connect()
        self._table = db.table(self._table_name)
        
    def close(self):
        self._connector.disconnect()
        