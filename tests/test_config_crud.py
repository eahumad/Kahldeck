import unittest

from app.provider.config_provider import ConfigProvider


class TestConfigCRUD(unittest.TestCase):
    
    _config_provider: ConfigProvider
    def setUp(self):
        self._config_provider = ConfigProvider()
    
    
    def test_crud(self):
        result = self._config_provider.add_config({'test': 'test_value'})
        self.assertEqual(result, True)
        result = self._config_provider.get_config('test', 'test_value')
        self.assertEqual(result['test'], 'test_value')
        result = self._config_provider.remove_config('test', 'test_value')

        self.assertIsInstance(result, tuple)
        result = self._config_provider.get_config('test', 'test_value')
        self.assertEqual(result, None)
    
if __name__ == '__main__':
    unittest.main()