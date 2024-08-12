import os
from app.db.i_db_connector import IDBConnector
from flata import Flata
from flata.storages import JSONStorage

from app.helper.config import ROOT_DIR


class FlataConnector(IDBConnector):
    _db_path: str
    
    def __init__(self, db_name):
        self._db_path = os.path.join(ROOT_DIR, 'db', db_name + '.json')
        super().__init__()
        
    def _create_if_not_exists(self):
        # create db file if not exists
        if not os.path.exists(self._db_path):
            open(self._db_path, 'a').close()
    
    def connect(self):
        self._db = Flata(self._db_path, storage=JSONStorage)
        return self._db
    
    def disconnect(self):
        self._db.close()