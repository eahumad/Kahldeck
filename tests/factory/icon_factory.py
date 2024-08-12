from faker import Faker
from app.domain.icon import Icon


class IconFactory:
    
    _fake: Faker
    def __init__(self):
        self._fake = Faker()
    
    def create(self) -> Icon:
        icon = Icon(
            name=self._fake.name(),
            file=self._fake.file_name(),
            tags=[self._fake.random_element(list( self._fake.sentence(nb_words=1) for _ in range(self._fake.random_int(min=1, max=10))))] 
        )
        return icon