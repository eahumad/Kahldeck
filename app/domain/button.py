from uuid import uuid4
from app.domain.icon import Icon
from app.domain.macro import Macro


class Button:
    
    uuid: str
    name: str
    icon: Icon
    macro: Macro
    
    def __init__(self, name: str, icon: Icon, macro: Macro, uuid):
        self.name = name
        self.icon = icon
        self.macro = macro
        if uuid is None:
            self.uuid = str(uuid4())
        else:
            self.uuid = uuid
    
    def to_dict(self):
        return {
            "uuid": self.uuid,
            "name": self.name,
            "icon": self.icon.to_dict(),
            "macro": self.macro.to_dict()
        }
        
    @classmethod
    def from_dict(cls, data):
        return cls(
            name=data["name"],
            icon=Icon.from_dict(data["icon"]),
            macro=Macro.from_dict(data["macro"]),
            uuid=data["uuid"]
        )