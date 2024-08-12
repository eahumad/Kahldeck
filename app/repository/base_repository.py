from app.db.i_db_connector import IDBConnector
from app.repository.i_repository import IRepository


class BaseRepository(IRepository):
    
    _table = object
    _table_name: str
    _connector: IDBConnector
    _id_field: str
    
    def __init__(self, table_name: str, connector: IDBConnector, id_field: str = 'uuid'):
        self._table_name = table_name
        self._connector = connector
        self._id_field = id_field
        
    def open(self):
        db = self._connector.connect()
        self._table = db.table(self._table_name)
        # if(self._id_field == None):
        #     self._table = db.table(self._table_name)
        # else:
        #     self._table = db.table(self._table_name, id_field=self._id_field)
        
    def close(self):
        self._connector.disconnect()