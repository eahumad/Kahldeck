from app.domain.iconPack import IconPack
from app.repository.icon_pack_repository import IconPackRepository


class IconPackProvider:
    _icon_pack_repository: IconPackRepository
    
    def __init__(self):
        self._icon_pack_repository = IconPackRepository()
    
    def get_icon_pack(self, key: str, value: str):
        self._icon_pack_repository.get_icon_pack(key, value)
    
    def add_icon_pack(self, icon_pack: IconPack):
        pass
    
    def remove_icon_pack(self, key: str, value):
        self._icon_pack_repository.remove_icon_pack(key, value)
    
    def get_all_icon_packs(self):
        self._icon_pack_repository.get_all_icon_packs()
        
    def register_icon_pack(self, icon_pack: IconPack):
        self._icon_pack_repository.add_icon_pack(icon_pack)
        
    def unregister_icon_pack(self, key: str, value):
        self._icon_pack_repository.remove_icon_pack(key, value)