from faker import Faker
from app.domain.layout import Layout
from tests.factory.button_factory import ButtonFactory


class LayoutFactory:
    
    _fake: Faker
    def __init__(self):
        self._fake = Faker()
    
    def create(self) -> Layout:
        layout = Layout(
            name=self._fake.name(),
            rows=self._fake.random_int(min=1, max=5),
            columns=self._fake.random_int(min=1, max=10),
            buttons=[self._fake.random_element(list(ButtonFactory().create() for _ in range(self._fake.random_int(min=1, max=10))))]
        )
        return layout