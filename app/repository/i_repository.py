from abc import ABCMeta, abstractmethod


class IRepository(metaclass=ABCMeta):
    
    @abstractmethod
    def open(self):
        pass
    
    @abstractmethod
    def close(self):
        pass