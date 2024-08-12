from faker import Faker
from app.domain.macro import Macro


class MacroFactory:
    
    _fake: Faker
    def __init__(self):
        self._fake = Faker()
    
    def create(self) -> Macro:
        macro = Macro(
            name=self._fake.name(),
            keys=[self._fake.random_element(list(self._fake.sentence(nb_words=2) for _ in range(self._fake.random_int(min=1, max=3))))],
            uuid= None
        )
        return macro