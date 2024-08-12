from uuid import uuid4
from app.domain.icon import Icon


class IconPack:
    uuid: str
    name: str
    version: str
    min_kahl_version: str
    author: str
    description: str
    icons: list[Icon]
    
    def __init__(self, name: str, version: str, icons: list[Icon], uuid,  min_kahl_version: str, author: str, description: str):
        self.name = name
        self.version = version
        self.icons = icons
        self.min_kahl_version = min_kahl_version
        self.author = author
        self.description = description
        if uuid is None:
            self.uuid = str(uuid4())
        else:
            self.uuid = uuid
            
    def to_dict(self):
        return {
            "uuid": self.uuid,
            "name": self.name,
            "version": self.version,
            "min_kahl_version": self.min_kahl_version,
            "author": self.author,
            "description": self.description,
            "icons": [icon.to_dict() for icon in self.icons]
        }
    
    @classmethod
    def from_dict(cls, data):
        return cls(
            name=data["name"],
            version=data["version"],
            icons=[Icon.from_dict(icon) for icon in data["icons"]],
            uuid=data["uuid"],
            min_kahl_version=data["min_kahl_version"],
            author=data["author"],
            description=data["description"]
        )
        