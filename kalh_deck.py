import eel

from app.controller.layout_controller import LayoutController
from app.controller.macro_controller import MacroController



layoutController = LayoutController()
macro_controller = MacroController()


eel.expose(layoutController.show_dummy)
eel.expose(layoutController.get_layouts)
eel.expose(layoutController.get_layout)
eel.expose(layoutController.add_layout)
eel.expose(layoutController.update_layout)
eel.expose(layoutController.remove_layout)

# MARK: Macros
eel.expose(macro_controller.add_macro)
eel.expose(macro_controller.get_all_macros)
eel.expose(macro_controller.execute_macro)



eel.init('kahldeck-dashboard/dist')
eel.start('index.html', port=8476, mode=None)
