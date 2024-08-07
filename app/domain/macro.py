from uuid import uuid4


class Macro:
    
    uuid: str
    name: str
    type: str
    keys: list[str]
    
    def __init__(self, name: str, type: str, keys: list[str], uuid):
        self.name = name
        self.type = type
        self.keys = keys
        if uuid is None:
            self.uuid = str(uuid4())
        else:
            self.uuid = uuid