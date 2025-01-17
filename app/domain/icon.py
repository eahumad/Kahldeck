from uuid import uuid4


class Icon:
    
    uuid: str
    name: str
    iconPackUuid: str
    file: str
    tags: list[str]
    
    def __init__(self, name: str, file: str,  tags: list[str], uuid=None):
        self.tags = tags
        self.file = file
        self.name = name
        if uuid is None:
            self.uuid = str(uuid4())
        else:
            self.uuid = uuid
            
    def to_dict(self):
        return {
            "uuid": self.uuid,
            "name": self.name,
            "file": self.file,
            "tags": self.tags
        }
    
    @classmethod
    def from_dict(cls, data):
        return cls(
            name=data["name"],
            file=data["file"],
            tags=data["tags"],
            uuid=data["uuid"]
        )
        