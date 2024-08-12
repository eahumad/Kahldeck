from faker import Faker
from app.domain.button import Button
from tests.factory.icon_factory import IconFactory
from tests.factory.macro_factory import MacroFactory


class ButtonFactory:
    
    _fake: Faker
    def __init__(self):
        self._fake = Faker()
    
    def create(self) -> Button:
        button = Button(
            name=self._fake.name(),
            icon=self._fake.random_element(list(IconFactory().create() for _ in range(self._fake.random_int(min=1, max=10)))),
            macro=self._fake.random_element(list(MacroFactory().create() for _ in range(self._fake.random_int(min=1, max=10)))),
            uuid=None
        )
        return button
