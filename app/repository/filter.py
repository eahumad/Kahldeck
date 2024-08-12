class Filter:
    key: str
    value: str
    type: str
    
    def __init__(self, key: str, value: str, type: str):
        self.key = key
        self.value = value
        self.type = type