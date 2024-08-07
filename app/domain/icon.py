from uuid import uuid4


class Icon:
    
    uuid: str
    name: str
    iconPackUuid: str
    fileName: str
    
    def __init__(self, name: str, uuid):
        self.name = name
        if uuid is None:
            self.uuid = str(uuid4())
        else:
            self.uuid = uuid