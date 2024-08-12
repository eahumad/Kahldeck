from flata import where
from app.db.flata_connector import FlataConnector
from app.domain.iconPack import IconPack
from app.repository.base_repository import BaseRepository


class IconPackRepository(BaseRepository):
    
    def __init__(self):
        super().__init__('iconpacks', FlataConnector('app'))
        
    def add_icon_pack(self, icon_pack: IconPack):
        self.open()
        self._table.insert(icon_pack.to_dict())
        self.close()
        return True
    
    def get_icon_pack(self, key: str, value: str ):
        self.open()
        result =  self._table.search(where(key) == value)
        self.close()
        return result[0] if result else None
    
    def remove_icon_pack(self, key: str, value):
        self.open()
        result = self._table.remove(where(key) == value)
        self.close()
        return result
    
    def get_all_icon_packs(self):
        self.open()
        result = self._table.all()
        self.close()
        return result