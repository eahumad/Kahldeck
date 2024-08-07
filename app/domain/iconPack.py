from uuid import uuid4
from app.domain.icon import Icon


class IconPack:
    uuid: str
    name: str
    version: str
    icons: list[Icon]
    
    def __init__(self, name: str, version: str, icons: list[Icon], uuid):
        self.name = name
        self.version = version
        self.icons = icons
        if uuid is None:
            self.uuid = str(uuid4())
        else:
            self.uuid = uuid