import logging
from app.domain.iconPack import IconPack
from app.repository.icon_pack_repository import IconPackRepository


class IconPackProvider:
    _icon_pack_repository: IconPackRepository
    
    def __init__(self):
        self._icon_pack_repository = IconPackRepository()
    
    def get_icon_pack(self, key: str, value: str):
        data =self._icon_pack_repository.get_icon_pack(key, value)
        if data is not None:
            return IconPack.from_dict(data)
        else:
            return None
    
    def add_icon_pack(self, icon_pack: IconPack):
        pass
    
    def remove_icon_pack(self, key: str, value):
        self._icon_pack_repository.remove_icon_pack(key, value)
    
    def get_all_icon_packs(self):
        data = self._icon_pack_repository.get_all_icon_packs()
        if data is not None:
            return [IconPack.from_dict(icon_pack) for icon_pack in data]
        else:
            return []
            
        
    def register_icon_pack(self, icon_pack: IconPack):
        # TODO: check if icon pack already exists
        existed_icon_pack = self.get_icon_pack('name', icon_pack.name)
        
        if existed_icon_pack is not None and existed_icon_pack.version < icon_pack.version:
            # if exist and version is lower than the new one, unregister the old one and register the new one
            logging.info(f'Icon pack {icon_pack.name} is already registered')
            icon_pack.uuid = existed_icon_pack.uuid
            self._icon_pack_repository.update_icon_pack(icon_pack)
        elif existed_icon_pack is not None and existed_icon_pack.version == icon_pack.version:
            # if exist and version is equal to the new one, do nothing
            pass
        else:
            # if not exist, register the new one
            self._icon_pack_repository.add_icon_pack(icon_pack)    
        
        
        
    def unregister_icon_pack(self, key: str, value):
        logging.info(f'Unregistering icon pack {key}: {value}')
        self._icon_pack_repository.remove_icon_pack(key, value)