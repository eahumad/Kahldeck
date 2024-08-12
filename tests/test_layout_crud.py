import unittest

from app.provider.layout_provider import LayoutProvider
from tests.factory.layout_factory import LayoutFactory


class TestLayoutCRUD(unittest.TestCase):
    
    _layout_provider: LayoutProvider
    _layout_factory: LayoutFactory
    def setUp(self):
        self._layout_provider = LayoutProvider()
        self._layout_factory = LayoutFactory()
    
    
    def test_crud(self):
        layout = self._layout_factory.create()
        
        result = self._layout_provider.add_layout(layout)
        self.assertEqual(result, True)
        result = self._layout_provider.get_layout('name',layout.name)
        self.assertEqual(result.name, layout.name)
        
        layout = result
        layout.rows = layout.rows + 1
        result = self._layout_provider.update_layout(layout)
        self.assertEqual(result, True)
        result = self._layout_provider.get_layout('name',layout.name)
        self.assertEqual(result.rows, layout.rows)
        
        self._layout_provider.remove_layout('name',layout.name)
        result =self._layout_provider.get_layout('name',layout.name)
        self.assertEqual(result, None)

    
if __name__ == '__main__':
    unittest.main()