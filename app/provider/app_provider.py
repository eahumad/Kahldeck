from app.repository.app_repository import AppRepository


class AppProvider:
    
    _appRepository: AppRepository
    
    def __init__(self):
        self._appRepository = AppRepository()
    
    def create_tables(self):
        self._appRepository.create_iconpacks_table()
        self._appRepository.create_layouts_table()
   