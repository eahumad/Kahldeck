from app.provider.config_provider import ConfigProvider
from migration.config_migration import ConfigMigration


class InstallController:
    _config_migration: ConfigMigration
    _config_provider: ConfigProvider
         
    def __init__(self):
        self._config_migration = ConfigMigration()
        self._config_provider = ConfigProvider()
    
    def install(self):
        self._create_database()
        
        pass
    
    
    def _create_database(self):
        self._config_migration.migrate()
        
    def _check_app_version(self):
        version = self._config_provider.get_config("version")
        print(version)