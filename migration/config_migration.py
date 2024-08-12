from app.provider.config_provider import ConfigProvider
from migration.i_migration import IMigration


class ConfigMigration(IMigration):
    
    _config_provider: ConfigProvider
    
    def __init__(self):
        self._config_provider = ConfigProvider()
    
    def migrate(self):
        self._config_provider.add_config({"version": "0.0.1"})
    
    def rollback(self):
        self.config_provider.remove_config("version")