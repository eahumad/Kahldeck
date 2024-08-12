from abc import ABC, ABCMeta, abstractmethod


class IMigration(metaclass=ABCMeta):
    def __init__(self):
        pass
    
    @abstractmethod
    def migrate(self):
        pass
    
    @abstractmethod
    def rollback(self):
        pass