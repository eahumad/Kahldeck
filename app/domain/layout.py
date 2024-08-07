from uuid import uuid4
from app.domain.button import Button


class Layout:
    uuid: str
    name: str
    rows: int
    columns: int
    buttons: list[Button]
    
    def __init__(self, name: str, rows: int, columns: int, buttons: list[Button], uuid):
        self.name = name
        self.rows = rows
        self.columns = columns
        self.buttons = buttons
        if uuid is None:
            self.uuid = str(uuid4())
        else:
            self.uuid = uuid