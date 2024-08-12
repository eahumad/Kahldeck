from abc import ABCMeta, abstractmethod


class IDBConnector(metaclass=ABCMeta):
    
    _db: object
    _db_opath: str
    
    def __init__(self, ):
        self.db = None
        pass
    
    @abstractmethod
    def connect(self):
        pass
    
    @abstractmethod
    def disconnect(self):
        pass