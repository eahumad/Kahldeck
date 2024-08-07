from app.repository.config_repository import ConfigRepository


class ConfigProvider:
    
    _configRepository: ConfigRepository
    
    def __init__(self):
        self._configRepository = ConfigRepository()
    
    def add_config(self, config: dict):
        return self._configRepository.add_config(config)
    
    def get_config(self, key: str, value: str):
        return self._configRepository.get_config(key, value)
    
    def remove_config(self, key: str, value):
        return self._configRepository.remove_config(key, value)