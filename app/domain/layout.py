from uuid import uuid4
from app.domain.button import Button


class Layout:
    uuid: str
    name: str
    rows: int
    columns: int
    buttons: list[Button]
    
    def __init__(self, name: str, rows: int, columns: int, buttons: list[Button], uuid=None):
        self.name = name
        self.rows = rows
        self.columns = columns
        self.buttons = buttons
        if uuid is None:
            self.uuid = str(uuid4())
        else:
            self.uuid = uuid
    
    def to_dict(self):
        return {
            "uuid": self.uuid,
            "name": self.name,
            "rows": self.rows,
            "columns": self.columns,
            "buttons": [button.to_dict() for button in self.buttons]
        }
        
    def from_dict(self, data):
        self.uuid = data["uuid"]
        self.name = data["name"]
        self.rows = data["rows"]
        self.columns = data["columns"]
        self.buttons = [Button.from_dict(button) for button in data["buttons"]]
        return self