from app.provider.config_provider import ConfigProvider
from migration.app_migration import AppMigration
from migration.config_migration import ConfigMigration


class InstallController:
    _config_migration: ConfigMigration
    _config_provider: ConfigProvider
    _app_migration: AppMigration

         
    def __init__(self):
        self._config_migration = ConfigMigration()
        self._config_provider = ConfigProvider()
        self._app_migration = AppMigration()
    
    def install(self):
        self._create_database()
        self._register_default_icon_pack()
        self._create_default_layout()
    
    
    def _create_database(self):
        self._config_migration.migrate()
        self._app_migration.migrate()
        
        
    def _check_app_version(self):
        version = self._config_provider.get_config("version")
        print(version)
        
    def _register_default_icon_pack(self):
        self._app_migration._register_default_inconpack()
        
    def _create_default_layout(self):
        self._app_migration._create_default_layout()