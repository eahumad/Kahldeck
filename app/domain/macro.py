from uuid import uuid4


class Macro:
    
    uuid: str
    name: str
    type: str
    keys: list[str]
    
    def __init__(self, name: str, keys: list[str], uuid):
        self.name = name
        self.type = 'single' if len(keys) == 1 else 'multi'
        self.keys = keys
        if uuid is None:
            self.uuid = str(uuid4())
        else:
            self.uuid = uuid
            
    def to_dict(self):
        return {
            "uuid": self.uuid,
            "name": self.name,
            "type": self.type,
            "keys": self.keys
        }
    
    @classmethod
    def from_dict(cls, data):
        return cls(
            name=data["name"],
            keys=data["keys"],
            uuid=data["uuid"]
        )